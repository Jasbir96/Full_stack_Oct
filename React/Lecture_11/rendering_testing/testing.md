## Testing 
**Definition**
whether you code matches the specification

 **Types of Testing** 
` Way to you test`
* Manual testing  -> user manually  test the applications
* Automated testing 

`Areas of Testing`
* Unit Test : Verifying the smallest units (components) of the app in isolation to ensure individual functionality.

*  Functional test/integration test: Verifying the a module /functionality of the app works and interact with different modules
* End to end Testing : How much closer your application is to the specification 
* Regression testing : Testing whether a new features/module/ compenet have negatively impact the existing application
* Peformance Testing : how our responsive our app is to the end client 
* Stress testing : how your application works in  exterm condition 
* Security Testing : if there are any vulnerabilities 
## writing a unit test for React component
### Pre-req
* text -> UI [count=0] -> VDOM
* onclick -> event [inc,dec] -> fire events

### Tech solution 
* JEST : js test runner
    * test ,describe , expect 
* React Testing Library : 
    * gives you access to VDOM , events, screen

### Things to test in a unit test
* inital render
* on re-render
* snapshot test

## TDD -> Test driven Development(red-green)
`Usecase`: requirements are stable
* first write all the testcases -> write the component
* refractor all your testcases -> optimize your component

`Note`: only write the testcase for complex components/critical 
