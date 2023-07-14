require('dotenv').config()
import axios from 'axios'
import AWS from 'aws-sdk'

export default function handler(req, res) {
    let auth = false
    if (req.headers.authorization)
    {
        auth = req.headers.authorization.split(' ')[1] === btoa(process.env.EDIT_USE+':'+process.env.EDIT_PW)
    }
    if (req.method === 'POST' && auth)
    {
        if(req.query.type === 'user')
        {
            const data = JSON.stringify({
                "collection": "user",
                "database": "usersites",
                "dataSource": "link0",
                "filter": req.body.filter,
                "update": {
                    "$set": {
                        "bio": req.body.bio,
                    }
                }
            });
            const config = {
                method: 'post',
                url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-hdjhg/endpoint/data/v1/action/updateOne',
                headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'api-key': process.env.API_KEY,
                },
                data: data
            }; 
            console.log(data)
            axios(config)
            .then(function (response) {
                res.status(200).json(response.data);
            })
            .catch(function (error) {
                res.status(400).json({data: 'request failed'})
            });
        }
        else if(req.query.type === 'site')
        {
            const data = JSON.stringify({
                "collection": "sites",
                "database": "usersites",
                "dataSource": "link0",
                "filter": req.body.filter,
                "update": {
                    "$set": {
                        "profile": req.body.profile,
                        "description": req.body.description
                    }
                }
            });
            const config = {
                method: 'post',
                url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-hdjhg/endpoint/data/v1/action/updateOne',
                headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'api-key': process.env.API_KEY,
                },
                data: data
            }; 
            console.log(data)
            axios(config)
            .then(function (response) {
                res.status(200).json(response.data);
            })
            .catch(function (error) {
                res.status(400).json({data: 'request failed'})
            });
        }
        else if (req.query.type === 'picture')
        {
            const region = "us-east-2"
            const accessKey = process.env.AWS_KEY
            const secretKey = process.env.AWS_SECRET
            const bucket = "linktreepics"
            AWS.config.update({
                accessKeyId: accessKey,
                secretAccessKey: secretKey
            })
            const s3 = new AWS.S3({
                region: region
            })
            const params = ({
                Bucket: bucket,
                Key: 'unnamed.jpg'
            }) 
            s3.getObject(params, function(err,data){
                if (err) 
                {
                    console.error(err.stack)
                    res.status(400)
                    res.end()
                }
                else
                {
                    res.status(200)
                    res.end(JSON.stringify(data))
                }
            })
        }
    }
    else
    {
        res.status(403).send({ message: `${req.method} not allowed` })
        return
    }
    
  }