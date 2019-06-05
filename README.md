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
