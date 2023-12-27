## steps  -> render an ouput by browser
### intial step
    * DOM + CSSOM -> calculation 
    * Layout creation 
    * rendering them on the UI
    * adding JS 

### subsequent  updates
    * DOM(update) + CSSOM(update) -> calculation 
    * Layout updation 
    * rendering them on the UI
    * JS update -> that is proccessed 

**Fact** : browser does all these things on a single thread

**How to do costly operation while keeping main thread idle**
**solution** : using `web worker` -> it provides a different 
    1. main script(processed on main thread) -> this call's the worker.
    2. worker script -> this is processed on different threads
* Message
    to send data -> postMessage
    to recieve data -> onmessage
    Data -> is receievd in event.data


`Note`: only use it when caculation is taking a bit of time otherwise it is an overkill




