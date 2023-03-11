// in server:
/**
 * server.js
 * model filde => db
 * schema folder =>
 * npm init --y
 * npm i express mongoose body-parser nodemon


* headline: Node => JS is runtime env to run js the browser
* env=> browser
* env => node

**write code js in server
**modularty => exprot and require
**fileSystem  => let fs = require('fs)
make file and write in it : fs.writeFileSync('./file.txt', 'ahmed' , function(err){
   if(err) log(err)
   log('done)
})

**read from file : 
fs.readFile('./file.txt' 'utf-8',function(err, data){
    if(err) log(err)
   log('done)
})


to create server: 
const hhtp = require('http')

const server = http.createServer((req, res)=>{

if(req.url == "/"){
   res.write('hello server')
   res.send()
}
if(req.url == '/about'){
   res.write('About Page')
   res.end()
}

   res.write('hello server')
   res.end()
})

server.listen(5000, ()=>{
   log('running')
})


* HEADLINE: Express
>npm init --y
>npm i express

const express = require('express')
const app = express()
app.get('/', (req,res)=>{
   res.send('hello home')
})
app.get('/about', (req,res)=>{
   res.send('hello about')
})
app.listen(3000, ()=>{
   log('server done)
})


* Headline: Mongodb
no-sqldb              sql
collection           table
document             record       {id, name}


** 1.create & connect DB
>npm i mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
.then(res=>log('connected successfully'))
.catch(err=>log(err))

** 2. create collection
   //   model
   // schema :شكل الداتا اللي هتحط في الكولكشن 
   const Product = mongoose.model('product', new mongoose.Schema({
      id: String,
      title: String,
      price: Number
   }))

** 3. Insert document
app.get('/products', async (req,res)=>{
   const p = new product({
      id: 1 ,
      title: 'ahmed',
      price: 20
   })
  const saveData=  await p.save()
  res.send(saveData)
})



// Headline: project
* *make server project in server.js and test it in postman
 */
