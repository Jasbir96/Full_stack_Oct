# Lifecycle of a react component
* Mounting -> creation
* updation -> re-renders
* unmount -> deletion 


## Steps to Render a react application 
* **JSX transpilation** : JSX is converted into JS code and it is done by your `babel`
* **VDOM creation** : is constructed :a in memory repersentation of dom is created, react.createElement is used to create this virtual 
```js
const vdom ={
    type: 'div',
    props: {
        class: "container",
        children: [
            {
                type: 'h1', props: {
                    children: ' this is '
                }
            },
            {
                type: 'p', props: {
                    class: 'paragraph',
                    children: [
                        ' I am ',
                        {
                            type: (props) => ({
                                type: "button", props:
                                    { children: props.counter + "Clicks" }
                            }),
                            props: { counter: 1 }
                        }
                        ,
                        ' from'
                    ]
                }
            }
        ]
    }
}

``` 
* **Component mounting**: if the React elements represent components, React instantiates the component classes or functional components. This initializes the component's state, props, and other internal data, preparing them for rendering
```js
const vdom ={
    type: 'div',
    props: {
        class: "container",
        children: [
            {
                type: 'h1', props: {
                    children: ' this is '
                }
            },
            {
                type: 'p', props: {
                    class: 'paragraph',
                    children: [
                        ' I am ',
                        {
                            type: "button",
                            children : "1 Clicks"
                        }
                        ,
                        ' from'
                    ]
                }
            }
        ]
    }
}

```
*  **Render step occurs**: React takes the created React elements and renders them into the actual browser DOM. It traverses the virtual element tree and generates corresponding DOM nodes, creating the visual representation of the UI on the webpage.

*  **DOM Update**: React updates the browser DOM to reflect the rendered  components. It adds the generated DOM nodes to the appropriate places in the document structure, creating the initial UI layout

* **Event Handling**: React sets up event listeners on the relevant DOM elements to handle user interactions, such as clicks or input changes. This ensures that the specified event handlers are executed when triggered, allowing for interactivity within the UI.

`Summary` : JSX-> JS -> VDOM(JS object)-> init of any component in VDOM with state and props-> creating dom tree(it is soperate from the ui )-> adding this dom tree to your root in UI

## How react effciently update the UI -> 

* **State Change**:Imagine a button in your React application. When a user clicks it, the component's state changes, triggering a cascade of updates. This change could be anything from updating a counter to toggling a component's visibility.
* **New Virtual DOM** : React doesn't directly manipulate the real DOM in the browser. Instead, it creates a new VDOM. This virtual DOM is a lightweight blueprint reflecting the current state of your UI, including all the changes triggered by the state update.
* **Diffing**: React employs a clever `diffing algorithm`. This algorithm compares the old virtual DOM (before the state change) with the new virtual DOM (after the change). It meticulously analyzes each element, attribute, and text node to `identify the minimal set of changes` needed to bring the real DOM in sync with the updated state
* ***Batching**: React doesn't perform DOM updates one by one. Instead, it batches multiple changes together. This is like grouping edits into a single transaction before applying them. Batching avoids unnecessary DOM reflows and repainting, which can be expensive and slow down the browser.

* **Reconciliation**:Once the batch is ready, React performs the actual reconciliation. It takes the minimal changes identified in the diffing step and applies them to the real DOM in the browser. This involves updating text content, adding or removing elements, and modifying attributes, but only for the affected parts


### TakeAway
####  Bottle Neck : UI updates are very costly 

* **Advantage of VDOM** :  we can have a rough version of actual dom that can be reconstructed quickly and do quick changes in it as with the help of diffing algorithm 
* **Advantage of Diffing Algo**:  we can identfiy minimal set of changes that are required in actual DOM.
* **Batching**: reduce the ferquency of DOM update


Architecture : fiber architecture




