require('dotenv').config()
import axios from 'axios'

export default function handler(req, res) {
    if (req.method === 'POST')
    {
        const postObj = atob(req.body.data)
        const auth = postObj.split(':')
        if(auth[0] === process.env.EDIT_USE && auth[1] === process.env.EDIT_PW)
        {
            res.status(200).json({data: 'Basic ' + req.body.data});
        }
        else
        {
            res.status(403).json({data: 'Incorrect username or password'})
        }
        
    }
    else
    {
        res.status(405).send({ message: `${req.method} not allowed` })
        return
    }
    
  }