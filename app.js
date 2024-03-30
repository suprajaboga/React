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

 /*
const heading = React.createElement(
    "h1",                       //name of the tag
    {id: "heading"},            //attributes
    "Hello world from React!"   //children
);
*/


console.log(heading);   //returns an object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);   //this method converts object into Html tag to display it on the browser