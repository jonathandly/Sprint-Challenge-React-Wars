# Answers

1.  What is React JS and what problems does it try and solve?

React is a UI library used for creating complex and reusable components that update the DOM in a reactive way, hence the name "React". It uses a virtual DOM and performs a reconciliation process to determine what has changed and to update only the changed parts accordingly. React is considered to be the V in MVC as it is only concerned with the UI or "View" layer.

1.  What does it mean to _think_ in react?

To look at a project and start breaking it down into smaller single purpose components that have one responsibility. Then once you have smaller components built out, you compose them together to build a more complex component made up of smaller components.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Class components are usually a container component that pass data down through props to the functional components that are nested inside. Class components have the method setState whereas functional components do not.

1.  Describe state.

State is data that is stored in the constructor and can only be mutated by using setState. In doing this, React provides a single source of truth, since you know that the data being passed is coming from the state. 

1.  Describe props.

Props are immutable and used as a way to pass data from the state to other components. The state of one component usually becomes props on the child component.