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

* $ git: 
1. push first commit in master
2. create branch: 
   >git chechout -b "header-comp"
   >git branch
// delete branch locally
git branch -d localBranchName

// delete branch remotely
git push origin --delete remoteBranchName

   
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
