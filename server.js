import express from 'express';
import jwt from 'jsonwebtoken';
import verifyToken from './middlewares/verifyToken.js';

const app = express();


app.get('/api', (req,res)=>{
    res.json({
        message: "Hello from server.js"
    });
});

app.post('/api/posts', verifyToken, (req,res) =>{
    jwt.verify(req.token, 'whatever', (err, authData) => {
        if(err){
            res.json({
                err
            });
        } else {
            res.json({
                message: "post created",
                authData            
            });
        }
    });
});


app.post('/api/login',(req,res) => {
    const user = {
        username: 'bipin',
        email: 'bt@gmail.com'
    };

    jwt.sign({user}, 'whatever', { expiresIn: 60}, (err , token) => {
        res.json({
            token
        });
    });
});


app.listen(1000, () => console.log('server running '));