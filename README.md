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
For some elements we want to attach attributes to them to provide extra information about the tags. Using regular CSS, this would look something like the following:

##### JSX

```html
 <input type="text" placeholder="please enter a username" className="form-input"/>
```

##### CSS

```css
.form-input {
  width: 80%;
  height: 10%;
  outline: none;
};
```

With styled components, we can use the built-in method `.attrs()` that we recieve for each element. The `.attrs()` method will be given and object as an argument. This object will contain information that will provide that extra attribute data to the component. The object will use the object keys to represent the name of the attribute and and value of the key to represent the value of the attribute. This will look something like this:

```javascript
const FormInput = styled.input.attrs({
  type: 'text',
  placeholder: 'please enter a username or password 
})`
  width: 80%;
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

### Animations
We can create animations for styled components by bringing in the `keyframes` helper from the styled components package. At the top of the file, import the `keyframes` helper.

```javascript
import { keyframes } from 'styled-components'
```

We can now create an animation variable to store the animation in.

```javascript
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
```

We can now use this animation on one of our styled components. We need to make sure we use interpolation to include the animation, so wrap the name of the animation variable in the `${}` syntax. It will look like this:

```javascript
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
```

### Psuedo Selecters, Psuedo ELements, and Nesting
Stlyed components uses a preprocessor called `stylis` that supports scss-like-syntax to allow us to use nesting styles. Psuedo selectors and psuedo elements don't require any further configuration and are automatically set to the component itself. It will look like this:

```javascript
 const Button = styled.div`
   color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  
  // this is what it looks like to use psuedo elements and selectors
  :hover {
    // apply styles for the hover effect here
    color: black;
  }
  
  ::before {
    content: '💅';
  };
 `
```

We can follow more complex selector patterns by using the ampersand (&). The ampersand will refer directly back to the main component. Any nested selectors not using the `&` will refer to the children elements within the component.

```javascript
const Button = styled.div`
   color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  
  // refering to the hover effect for the button itself
  &:hover {
    cursor: pointer;
  }
  
  // refering to a nested h1 child element
  h1 {
    font-size: 20;
  }
  `
```


### Creating A Theme
Styled components give us the oppritunity to create a defined theme for our application. We first want to bring in the `ThemeProvider` higher order component and wrap our application in it. At the top level of your application, import the `ThemeProvider`.

```javascript
import { ThemeProvider } from 'styled-components;
```

We then want to wrap our entire application with it.

```javascript
class App extends React.Component {
  render() {
    return (
       <ThemeProvider>
         <Wrapper>
           <Home />
         </Wrapper>
       </ThemeProvider>
    );
  }
};

export default App;
```

The `ThemeProvider` requires a `theme` prop. This will be an object that will serve our styles defined for our theme to our application.

```javascript
class App extends React.Component {
  render() {
    return (
       <ThemeProvider theme={}>
          <Wrapper>
           <Home />
         </Wrapper>
       </ThemeProvider>
    );
  }
};

export default App;
```

We now want to create a theme object that will contain the styling we want for our theme and pass it to the `theme` prop on `ThemeProvider`. Styles that are declared will be set to the styled components `props` and we will have access to them through the theme property on the props `props.theme.name_of_style_property`. When it's all said and done, our file for our `App` component will look something like this:

```javascript
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Create The Theme
const appTheme = {
  primaryPurple: '#bd93f9'
};

class App extends React.Component {
  render() {
    return (
       <ThemeProvider theme={appTheme}>
          <Wrapper>
           <Home />
         </Wrapper>
       </ThemeProvider>
    );
  }
};

// Styled Components
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  bavkground: ${props => props.theme.primaryPurple}
`

export default App;
```


---

# Sources
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)


[Styled Component Docs](https://www.styled-components.com/)
