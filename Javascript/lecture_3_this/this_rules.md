## Rules 
* This is determined on run-time.
* This is always determined when an Excecution context is created
### non-strict mode 
* This is determined in diff scinerios
    * `this in GEC` -> `window`
    * EC created using `method call` then your this -> `calling obj`
    * EC is created using a `fn call` then your this -> `window`
* Arrow -> do not have it's own this it take it's this from outer scope 

### strict mode 
* This is determined in diff scinerios
    * `this in GEC` -> `window`
    * EC created using `method call` then your this -> `calling obj`
    * EC is created using a `fn call` then your this -> `undefined`
* Arrow -> do not have it's own this it take it's this from outer scope 