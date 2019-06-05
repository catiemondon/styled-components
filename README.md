# Styled Components

A small introduction to styled components 💅

## Installation 
In directory of your project, run:
```bash
$ npm install styled-components
```
## Usage
Start by import the style components package into your file.
```javascript
import styled from 'styled-components';
```

Let's create a button element using the styled-component library
```javascript
const Button = styled.button``;
```

This is the basic setup for a styled component. The 'Button' variable is now a React component that can now be used like any other React component. It's important to note the three main parts of creating a styled component. First, we are using the styled-component library that we brought in as `styled`. Second, we are declaring what kind of element we want this component. In this case, we want a `button` element. Third, we are using backticks. This is where we will store our css so when we add our styling to this component, it will look like the following.

```javascript
const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`
```

This backtick syntax is a newer feature to Javascript known as `tagged template literals`. This pretty much allows us to call functions within backticks. Find out more about `tagged template literals` [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates).

Let's now render this sweet new `Button` component.
```javascript
import React from 'react'
// styled components library
import styled from 'styled-components';

export const App = () => {
    return (
        <div>
            <Button>Submit</Button>
        </div>
    )
};

// Styled Components
const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`
```

### Using Props
We can pass function 'interpolations' to our component styling to render styles based off of the props that are given to the styled component.

Let's look at what that looks like:
```javascript
import React from 'react'
// styled components library
import styled from 'styled-components';

export const App = () => {
    return (
        <div>
            <Button login>Login</Button>
            <Button>Submit</Button>
        </div>
    )
};

// Styled Components
const Button = styled.button`
  background: ${props => props.login ? 'palevioletred' : 'skyblue';
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`
```

Above we have are now rendering the same `Button` styled component twice, but we are passing the prop of `login` for the login button. In our styling we can use the `props` that are set to the component to check and see if it has the `login` prop set to it. We then can use `${}` (just like a regular javascript template string) syntax to use an interpolated arrow function and base the `background` styling off of whether we have the `login` prop or not. This is great because it creates very reusable and DRY code.

### Extending Styles
Sometimes we want to use the same styled component that we created but we want to tweak some styling just enough that using interpolated functions to decide a value for a property won't be enough. In thise case, we can create a new styled component 
that extends the component we want to use so we will inherit the styling properties already set to that component and add some of our own to it. This will save us from writing redundent code. Extending a styled component looks a little like this:
```javascript
// The Button from the last section without the interpolations
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const GreenButton = styled(Button)`
  color: green;
  border-color: green;
`;
```

### Attributes
For some elements we want to attach attributes to them to provide extra information about the tags. In CSS, this would look something like the following:

```html
 <input type="text" placeholder="please enter a username" />
```

With styled components, we can use the built-in method `.attrs()` that we recieve for each element. The `.attrs()` method will be given and object as an argument. This object will contain information that will provide that extra attribute data to the component. The object will use the object keys to represent the name of the attribute and and value of the key to represent the value of the attribute. This will look something like this:

```javascript
const FormInput = styled.input.attrs({
  type: 'text',
  placeholder: 'please enter a username or password 
})`
  idth: 80%;
  height: 10%;
  outline: none;
`
```

We can also use the function interpolations and props to determine what kind of input it should be. This way we can keep our code reusable. Example:

```javascript
// In the return of the component
<FormInput email="email" />
<FormInput />

// Styled Component
const FormInput = styled.input.attrs({
  placeholder: props => props.email ? 'email' : 'password',
  type: props => props.email ? 'email' : 'password'
})`
  width: 80%;
  height: 10%;
  outline: none;
```

Here we are just checking to see if there is an 'email' prop set to the component to see if it will have an email type of input or password.
