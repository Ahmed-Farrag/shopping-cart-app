/*
HEADLINE: REDUX : state mangment sys
اباسب البروبس من البيرنت للاب للاب لاب props driling: 
the propblem is : اني بباسي بروبس من البيرنت لكل الشيلد بتوعه

* $ the selotion:
state file have all data and any comp need this data can access it


1.create store
create branch : >git checkout -b "store-branch"
in store folder: create store.js: 
>npm i redux react-redux redux-thunk
import {createStore} from 'redux'
const store = createStore(reducer)

2.create folder in store folder : reducer and make file reducer.js
const reducer = (state = {}, action) => {
  return state;
};
export default reducer;




* * thunk : middleware to send reqs

3.import reducerfile and redux-thunk and applyMiddlware and compose
then play redux-devtool-extention-compose and path it in store
then export store and import provider in App
and rape ur code inside <Provider></Provider> and inject store to provider 


*/
