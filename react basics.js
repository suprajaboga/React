import React from "react";
import ReactDOM from "react-dom/client";
/*
<div id="parent">
    <div id="child">
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
</div>
*/

const heading = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        [ React.createElement("h1", {id: "heading"}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")]
    )
)

//without JSX, using React
//React.createElement => ReactElement (JS Object) => HTMLElement(render)
 /*
const heading = React.createElement(
    "h1",                       //name of the tag
    {id: "heading"},            //attributes
    "Hello world from React!"   //children
);
*/

console.log(heading);   //returns an object, React elements at the end of the day are objects
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);   //this method converts object into Html tag to display it on the browser


//with JSX => it internally is transpiled to ReactElement
//JSX => React.createElement => ReactElement (JS Object) => HTMLElement(render)
//(babel package is converting from JSX to React.createElement)
const jsxHeading = <h1>Hello world!</h1>
console.log(jsxHeading);    //returns an object


//React Element
const element1 = (
    <h1 className="heading" tabIndex="5">
    Hello world!
    </h1>
);

//React component
//These both declarations are same
const HeadingComponent1 = () => {
    return <h1 className="heading">Functional Component</h1>;
}

const HeadingComponent2 = () => (
    <div id="container">
        <h1 className="heading">Functional Component</h1>;
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />); //renders a react component


//Component composition
const Component1 = () => {
    <h1>Component1</h1>;
}

const Component2 = () => {
    <div id="container">
        <Component1 />
        <Component1></Component1>
        {Component1()}
        <h1>Component2</h1>
    </div>
}


const output1 = ReactDOM.createRoot(document.getElementById("root"));
output1.render(<Component2 />); 

//Insert JS code inside JSX
const Component3 = () => {
    <div id="container">
        <h1>{100 + 200}</h1>
        <h1>Component2</h1>
    </div>
}

//Insert ReactElement inside ReactComponent
const element2 = (
    <h1 className="heading" tabIndex="5">
    Hello world!
    </h1>
);

const Component4 = () => {
    <div id="container">
        {element2}
        <h1>Component2</h1>
    </div>
}
const output2 = ReactDOM.createRoot(document.getElementById("root"));
output2.render(<Component4 />); 


