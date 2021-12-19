// import { verify } from "crypto";

export default function verifyUser(req, res) {
    const { jwt } = req.body;
    if (!jwt) {
        return res.status(401).json({
            error: "No token provided"
        });
    }
    try {
        const decoded = jwt.verify(jwt, process.env.JWT_SECRET);
        const { username } = decoded;
        const user = { username };
        return res.status(200).json({
            user
        });
    }
    catch (err) {
        return res.status(401).json({
            error: "Invalid token"
        });
    }
}