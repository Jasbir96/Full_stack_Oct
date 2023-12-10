# Promise behaviour
## Promise Object  
 * Promise is a JS object
 * `Properties`
    * value  :  undefined,  value/err               
    * state :  pending , resolved ,rejected 
* Promise can only be rejected / resolved once in the lifetime

## new Promise function
`Input` : a function as an input: we can call it executor function
`Output`: an new object on which we have then and catch method

### Then behaviour
 1. then's is an eventlistener/subscriber  attached to  a promise it's cb only executes when
  promise is resolved
 2. you can attach multiple then to a given promise and every one will execute

### Catch behaviour 
 1. catch is an eventlistener/subscriber  attached to  a promise it's cb only executes when promise is rejected
  2. you can attach multiple catch to a given promise and every one will execute

## Relation b/w then and catch
 ## re-Empahasising: consumer methods behaviour
* ALl the consumer function : then , catch and finally behaves like  event listeners
* cbs of these consumer functions are asynchronously called 
* Promise is synchronous 

Promise specification : https://promisesaplus.com/