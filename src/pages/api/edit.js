require('dotenv').config()
import axios from 'axios'

export default function handler(req, res) {
    if (req.method === 'POST')
    {
        if(req.body.data === process.env.EDIT_PW)
        {
            res.status(200).json({data: true});
        }
        {
            res.status(403).json({data: 'request failed'})
        }
        
    }
    else
    {
        res.status(405).send({ message: `${req.method} not allowed` })
        return
    }
    
  }