require('dotenv').config()
const axios = require('axios')

export default function handler(req, res) {

                  
    
    if (req.method === 'GET')
    {
        const data = JSON.stringify({
            "collection": "sites",
            "database": "usersites",
            "dataSource": "link0"
        });
        const config = {
            method: 'post',
            url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-hdjhg/endpoint/data/v1/action/find',
            headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': process.env.API_KEY,
            },
            data: data
        }; 
        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            res.status(200).json(response.data);
        })
        .catch(function (error) {
            console.log(error);
            res.status(400).json({data: 'request failed'})
        });
    }
    else if (req.method === 'POST')
    {
        const data = JSON.stringify({
            "collection": "sites",
            "database": "usersites",
            "dataSource": "link0",
            "document": req.body
        });
        const config = {
            method: 'post',
            url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-hdjhg/endpoint/data/v1/action/insertOne',
            headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': process.env.API_KEY,
            },
            data: data
        }; 
        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            res.status(200).json(response.data);
        })
        .catch(function (error) {
            console.log(error);
            res.status(400).json({data: 'request failed'})
        });
    }
    else
    {
        res.status(405).send({ message: `${req.method} not allowed` })
        return
    }
    
  }