const { randomBytes } = require('crypto');
const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express();
app.use(express.json())
app.use(cors())
const posts = {};
app.get('/posts',(req,res)=>
{
    res.send(posts)

})
app.post('/posts', async (req,res)=>
{

    console.log("app.post('/posts',(req,res)=> ")
    const id = randomBytes(4).toString('hex');
    const {title } = req.body;
    posts[id] = {
        id,title
    };
    await axios.post('htt://localhost:4005/events',{
        type:'PostCreated',
        data:{
            id,title
        }
    });

    res.status(201).send(posts[id])

})
app.post('/events',(req,res)=>
{
    console.log("received event",req.body.type);
    res.send({});
})

app.listen(4000,()=>{
    console.log("server started for posts on 4000");

})