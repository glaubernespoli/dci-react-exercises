# React Todo App

The goal for this exercise is to create a react application for a Todo App. A todo list is a small application that let you add new tasks and delete them when you have finished them.


## Instructions

So in this application the user should be able to:
  - Create a new todo by using an input text and a button.
  - Display the todos in a list and update the list when a new todo is added.
  - Each todo can be checked with a checkbox. This will mean the todo is done.
  - Each todo can be deleted with either a button for each todo or a selecting many todos and deleting them. (The second way is optional, you can only do the first way).

The design and appearance of the Todo App is of free choice, you can designed as you like.

## Steps

These are the general steps you can follow to design your Todo App:
 (Note: This is not a mandatory order, is just a suggestion)
- **Step 1**: Create your base structure by using `create-react-app`.
- **Step 2**: Create a main component, **TodoApp** , that will contain the other small components. You can call it `TodoApp.jsx`. Inside this file create a class component.
- **Step 3**: Now is needed to start thinking about the small components needed. The first one to create will be a small **Form** component. Create file for this component inside a component folder. 
- **Step 4**: Inside the **Form** file, you can use a functional component as it will be only for display matters. Create a form and inside an input and a button inside the return of this component. You are free to style it as you like.
- **Step 5**: The next component to be created is the **List** component. This list component will contain the list of todos. Here a functional component is also enough. Create inside the return an unordered list, for now let the list be empty. 
- **Step 6**: This list will have some complex items, as it will have a checkbox, the text of the todo and a button to delete. For this we will need a component. Create a component and call it **ListItem**.
- **Step 7**: Inside **ListItem** create a functional component. Inside the return create a `<li>` element. Inside this element create the checkbox, a span tag to add the todo text and a button. The design of how these button, checkbox and text look is free for you to decide. For the content of each element you can write some dummy text for the moment.
- **Step 8**: Then the whole idea is to use the **TodoApp** component as our smart component and pass from this component the information to the other small ones. Now the order of the next # steps can be different depending on how you like to code, this is just one way of doing it.
- **Step 9**: The order that we will follow here is to write the props inside each of the small components before sending them from the **TodoApp**. For example, we will start with the **Form** component. Here we have a form, an input and a button. First we would add props as a parameter for the function. To the form we will add the `onSubmit` event and make it equal to a prop that we will send in the future to handle this event. Then this should look like:
```
  <form className="yourClass" onSubmit={props.onSubmitHandler}>
```
- **Step 10**: Next in the **Form** component, to the input we will add to new attributes. The first one will an `onChange` event and the second one the value that will come from the state of **TodoApp**. The event handler and the value will be received as props in the the **Form** component. It should look like plus the extra attributes you will like to have:
```
  <input
    className="yourClass"
    name="todoText"
    onChange={props.onChangeInputHandler}
    value={props.todoTextValue}
  >
```
- **Step 11**: Now we will work with the props inside the other components. Inside the **ListItem** component, we will need to add the some events and attributes to each of the elements of the `<li>` tag.
- **Step 12**: To the input checkbox inside the **ListItem** component, we will add a value, an event and an id. First to the `checked` attribute we will assign a prop, for example `props.checkState`. Then we will add the `onChange` event and a prop similar as before (similar as in step 10), `props.onChangeCheckHandler`. All of this information will come from the main component **TodoApp**. The `id` attribute will help when is needed to find the todo to change the check status. Then add the `id` attribute and assign to it `props.todoId`
- **Step 13**: To the span inside the **ListItem** component, we will add inside the span the prop containing the text of the todo, for example something like:
```
  <span> {props.todoText} </span>
```
This information will come from the main component **TodoApp**.
- **Step 14**: To the delete button inside the **ListItem** component, we will add an event and an id attribute. The event will be an `onClick` event, and will assign to it a prop with the method coming from the main component **TodoApp**. For example we can call it `props.onClickDeleteButton`. The `id` attribute will help when is needed to find the todo to delete. Then add the `id` attribute and assign to it `props.todoId`
- **Step 15**: Now, let's continue with the **List** component. Here we will receive the prop from the main component **TodoApp**. First we will add a the props as a parameter to the function. Then we can start using the props in the component. First we will create the list of todos, this list comes from the props as `props.todoList`. This will be an array with the information of the todos. Use the map method from arrays and apply it to the array coming from the props. This map will return the **ListItem** component (remember to import it the **List** component file). In the part where we return the **ListItem** component, we will need to add all the props used in the **ListItem**. Then it will looks similar to:
```
//... map function return
  return(
    <ListItem 
      todoId = {item.id}
      checkState = {item.checkState}
      onChangeCheckHandler = {props.onChangeCheckHandler}
      todoText = {item.text}
      onClickDeleteButton = {props.onClickDeleteButton}
    >
  )
```

Look that some properties, are not making reference to the props but to the item of the map function.
- **Step 16**: Now with all of these props added, we have created the link between the small components and the main component. Now is just missing to send all of this information to each of those components from the **TodoApp**. First let's start by creating the state. The state will have the values that will define how our app will behave. We need a property for the value of the input text of the form. You can call it `inputValue`. At the beggining it will be an empty string. We need another property that contains the array of the todos, you can call it `todosArray`. this at the beggining will be an empty array.
- **Step 17**: Now we need to create each of the handlers for the events. Start with the `onChangeInputHandler` from the form input. Here we need a method that takes the value from the input and save it in the state. use the `this.setState()` method to assign the value to the `inputValue` property of the state.
- **Step 18**: The next handler will be the `onSubmitHandler` that will then save the new todo in the array of todos of the state. For this use the `this.setState()` method and save inside the `todosArray` the new todo. The todo will be an object whit the following properties: 
```
  {
    id: Number
    text: String
    checkState: Boolean
  }
```
The `id` should start from 1 in the first todo and then incresae with the number of todos. the default `checkState` will be false. The `text` will have the `inputValue` value, check that it is not empty.

- **Step 19**: The next handler will be the `onChangeCheckHandler`. In this method you will change the value of the `checkState` of the respective todo. For this use the method `this.setState()` and search for the correct todo and change its property `checkState` to the opposite value. You can find the correct todo by using the id coming from the input check.
- **Step 20**: The last handler will be the `onClickDeleteButton`. In this method you wil delete the respective todo from the `todosArray`. To find  the correct todo use the id coming from the button. use the method `this.setState()`, delete the todo from the array and save the new array without the todo.
- **Step 21**:  Now with all the handlers and the state we can use the small components and pass to them the props they need. For this import first the **Form** and the **List** component.
- **Step 22**: Now in the return of the **TodoApp** add the **Form** and **List** components, one below the other. Then add to the **Form** and **List** the props that each of them needs. (check for each component file to know which props they need).
- **Step 23**: Now import the **TodoApp** component in the **App** component as the only thing inside the `<div>` tag. remember to delete all the things you don't need from the **App** component.
- **Step 24**: After this the one thing remaining is to test the app, check if you cand do the things specified in the ***instructions***. If something is not working as expected check the steps or ask questions! If it does everything as youe expected then you finished the exercise *\*insert Party sounds!\** 
