
// function to verify jwt

function verifyToken(req, res , next){
    // get auth header value
    const bearerHeader = req.headers['authorization'];

    // check bearer if undefined
    if(typeof bearerHeader !== 'undefined'){
        // split bearer from authorixation header
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // set bearer token
        req.token = bearerToken;

        // forward the req to next middleware
        next();
    } else {
        
        res.json({
            message: 'Error bearer undefined'
            
        });
    }
};

export default verifyToken;