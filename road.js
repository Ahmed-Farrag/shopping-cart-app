// make structure :
//    -client folder : React
//    -server folder : node

// in react :
/**
 * create application
 * create component
 * pages component 
 * to redux make data, store folder
 * * Gulp: gulpjs.com : it's a task runner - tool make repited functions 
 *     make minfication to css, js code and compreazing to imgs and make compiling to sass code 
 * * Sass: pre prosessor - dunumic css - variables and func
 
 *>npm i gulp gulp-sass sass
 * creat in src/ file:  .scss
 * create in app : gulpfile.js
 * put 3 require and write function
 * in package.json : 'sass':'gulp sass'


* * estimation time : 
   jira : sprint : 1 to 3 months - tasks to developers
   meetings : 1.planning meeting = discripe to tasks and give point estimation depend:
    spic/اخد وقت افكر في التاسك  - complicty  - time 
   2.desgin meeting : give tasks to devs

* * git: 
1. push first commit in master
2. create branch: 
   >git chechout -b "header-comp"
   >git branch

   
* * make css selectors : grid and flex
** gulp to handle css files : take scss from components to src/css file
** make header comp and make in it : header.js and header.scss
*>npm run sass
** finish header comp - push it in branch:
 *>git add .     >git commit -m ""    >git push origin header-comp
*3.my sir make pull req to my on master and merge it in master
*4.go to main and take new code: >git checkout master
>git pull origin master


** make footer comp:
5.لو عمل كود وانا في الماستر ونسيت اقد اكتب الكومند دة علشان كل اللي كتبتة يروح للبرنش الجديد
>git checkout -b "footer-comp" 


* *create words.js : to put data of site and import it in header.js - more reusiple - and for malti lang
* *create data.json : put data in file 

** create products comp make for it layout
* take product from json file to app by setState and 
call data in data.json to product.js as a props <Products products={products} />
and in products.js make maping in data and handel css


** create new comp;
create new branch : >git checkout -b "product-details"
install modal to show & exit product:
> npm i react-modal   and import it and make functions


* *Create filter comp:
لو عملت الشغل ونسيت اعمل البرانش 
>git checkout -b "filter-comp"

* *Create filter comp logic:
state for size and state for sort and make methods for it
controle element : بعد متتحكم في كل المنت بعد مخلص كل فاليو ارجعله فاليو جديده
=> to show in input 
then take products and update it


**create cart comp:
handle html and sass then handle setState in app

* ! all methods in app.js will remove and handle it in redux

* ex to prosess of methods:
** in app.js :
const [cartItems, setCartItems] = useState([]);

 const removeFromeCart = (product) => {
    const cartItemsClone = [...cartItems];
    setCartItems(cartItemsClone.filter((p) => p.id !== product.id));
  };

return (
 <Cart removeFromeCart={removeFromeCart} />
 );

 ** in Cart.js:
<button onClick={() => props.removeFromeCart(item)}>


* todo: save cart in localstorge
after adding and removing save it in localstorge
by useEffect

in cart.js : make function to sum total
then: checkout form comp: 

*#checkout-form
required - type=''  - handle submit method
change: methode to name and email => const [value, setValue]

**  inupt comp


*Headline: Animation
react reveal npm
>npm i react-reveal
*!if i have error in npm : >npm config set legacy-peer-deps true

**handle mediaquery in sass




 */

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
hello ahmed
 */
