import { NextApiRequest, NextApiResponse } from "next"
import jwt from 'jsonwebtoken'

export default function login(req : NextApiRequest, res : NextApiResponse) {
  const {username, password} = req.body
    if(username === "spiral117" && password === "spiralhimanshuraja"){
        const token = jwt.sign({
            username,
            password
        }, "spiralhimanshurajasecretkey")
        res.status(200).json({
            token,
            message: "Login Successful"
        })
    }else{
        res.status(401).json({
            message: "Login Failed"
        })
    }
}
