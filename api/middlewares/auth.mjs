import jwt from 'jwt-simple'

export function verifyAuth(req, res, next) {
    if(!req.headers.auth)
        return res.status(403).send({message: "Auth missing"})

    try {
        const payload = jwt.decode(req.headers.auth, process.env.JWT_TOKEN_SECRET);
        //expira
        // if(payload.exp) {
        //     return res.status(401).send({message: 'Token expired'})
        // }
        
    } catch (error) {
        return res.status(404).send({message: 'Invalid token'})
    }

    //guardar en cookie el token o algo asi
    next()

}