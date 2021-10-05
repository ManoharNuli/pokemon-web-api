import express from 'express';
import * as dotenv from 'dotenv';
import pokemon from './middleware/description.js';


dotenv.config();

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.get('/',(req,res)=>{
    res.send(`welcome to pokemon service`);
});

app.get('/pokemon/:name', async (req,res) => {
    const response =  await pokemon(req.params.name);
    if(response.error){
        res.send(response);
    }
    else{
     res.send({name:req.params.name,description:response}); 
    }
});

app.listen(5000, () => {
    console.log(`server running on 5000`);
});