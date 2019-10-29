 
 1 What problem does the context API help solve?

  -Context API helps solve the problem of prop drilling.

 2 In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  -Actions are objects that describe the type of action thats taken place. 
  Reducers are just pure functions that takes an initialState and an action and returns a new state that is then sent to the redux store which is just a global obj that holds all of the data in our Application.
  
 3 What is the difference between Application state and Component state? When would be a good time to use one over the other?

 -Your application state is global, and your component state is local. 
 If you have a small simple application with very few components the component state would be appropriate.
 If you have a large complex app with lots of components then application state would be better suited.

 4 Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

 -Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object inside of our action creators

 5 What is your favorite state management system you've learned and this sprint? Please explain why!
  My favorite would have to be redux because of the power it gives us to store all data in one global obj. 
