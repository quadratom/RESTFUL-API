// const fs = require("fs/promise");
// var Promise = require("bluebird");
// var fs = Promise.promisifyAll(require("fs")); 
// var directory = "templates";
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const {v4: uuid } = require("uuid");

const app = express();
 
app.use(express.json());

app.get('/outfit', (req,res) => {
    // res.send("this is working")
    const tops = ['grey', 'purple', 'yellow', 'black'];
    const jeans = ['blue', 'green', 'yellow','mangenta'];
    const shoes = ['pink','black'];

    res.json({
        top:_.sample(tops),
        jean:_.sample(jeans),
        shoe:_.sample(shoes)
    });
   
});

app.post('/comment',async (req,res) => {
    const id = uuid();
    const content = req.body.content;
    const page = req.body.page;

    if(!content || !page){
        return res.sendStatus(400)
    }
    //console.log(content + ' '+ page);

    // await fs.mkdir('data/comments', { recursive: true});

    res.sendStatus(201);
})

app.listen(6000, () => {
    console.log("API Server is running on port http://localhost:6000/outfit");
})






