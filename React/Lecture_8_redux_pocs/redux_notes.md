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

**Nature of redux** : Data Flow in in redux is always -> unidirectional.

## Three Principles of Redux

 **Single source of truth** 
 -  You can only have one store in whole application . We can have multiple reducer.

**State is read only** 
-  When you want to update the state, then you have to dispatch an 'action' (an object that describes what happened.)

 **Changes are made by pure reducer function** 
- reducer function can't update the  state variable it should always return a new state object
