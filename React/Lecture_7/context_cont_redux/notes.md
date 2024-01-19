##  Context API
 Usecase : solve prop drilling 

 ### Pro: 
 * it is part if react library
 * simpler setup

### cons:
* if the prop that context is passing gets  updated so the whole sub tree that context is wrapping will re-rendered -> peformance 
* you don't get devtools

### Where to use it ?? 
* State -> whose is read is high but update is low 
*  Real life Application -> dark-light change , auth , localization

## usereducer 
### What 
* another way of setting the state -> alternative of useState

## Usereducer vs useState
* useState -> 
    - input: inital state and 
    - returns the state var and setter function
* useReducer -> 
    - input : take a function (contains all the possible ways to update the state the state ) and initial state
    - retruns : initial state and a single dispatch function 
**Dispatch** : it is responsible for passing an action 
**action**: it is the case iniside your switch case of reducer function 
**Note** : dipsatch and reducer , state all three things are handleed by your useReducer

* useReducer -> you don't have to worry about previous state  

## Usecase
*  useState : only used to update simple states 
* useReducer : handle complex states  

```js
const initialState = {
    cart: [
        { id: 1, name: 'Product A', quantity: 2 },
        { id: 2, name: 'Product B', quantity: 1 },
    ],
    totalCounter:3
};
```
## Notions 
 -> Redux -> 
        * context(global state)
        * usereducer(update /work with complex state)
        *  peformance  ->React.memo
        *  lot of boiler plate code -> particular structure

### Redux   
* 1. React component : 
           1. state managment
           2. Event listners  and business logic
           3. UI 
2. state management -> 
            *)  set the state 
            *) update of the state
3. Real world apps
        * 1000+ they will in tree format
            * Passing of the props -> avoid this
            * proper way to handle global state -> 
            * it should also be peformant 
4. central state managment library-> predictvely  manage
the global state .
 5. Redux : 
    *  Third Party JS library for state managment (install it ) -> redux , react-redux
    *  It gives you feature known as `store` -> where all the state are stored;
    
**note**: recommended way to use redux -> redux toolkit , learning it through core redux library








