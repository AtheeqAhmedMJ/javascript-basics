# JavaScript Basics – Beginner's Notes

## Pre-requisites (Let’s keep it real simple)

1. You’ll need a code editor (download VS Code, or Sublime Text if you’re old-school).
2. Make a file and save it as `.js` (don’t forget this extension, else JS won’t run).
3. You also need a browser (Chrome, Edge, Firefox – all fine), because JS is made to run inside browsers originally.

---

## What exactly is JavaScript?

JavaScript (or simply JS) is a high-level, interpreted programming language designed to make web pages interactive.
You might have written Python, Java or C – this one’s like those but runs mostly in browsers.

For example – when you click buttons, scroll, popups show – JS is running behind the scenes.

---

## Is JS compiled or interpreted?

Hmm... tricky one.

✔️ Initially, JS was **interpreted** – that means code runs line-by-line directly by the browser. Like old-school scripting languages.

✔️ But **modern JS engines** (like Google Chrome’s V8) made it better – they do **JIT (Just-In-Time) Compilation**. So the engine parses, compiles and optimizes JS into machine code on the fly.

So today, JS is **both interpreted AND JIT compiled** depending on the browser.

---

## What is DOM?

DOM = Document Object Model.

Just think of it like this: Your HTML page is turned into a tree structure by the browser – every tag like `<h1>`, `<p>`, `<div>` becomes a node in this tree.

JS can use this tree to:

* change text,
* change styles,
* remove/add things,
* make the page interactive.

Example:

```html
<p id="demo">Hello</p>
```

```js
document.getElementById("demo").innerHTML = "Hi Atheeq";
```

Boom! Text changes to "Hi Atheeq". That's DOM in action.

---

## How is JS Code Executed? (For the curious ones)

1. **Parsing**: Browser reads JS, checks for mistakes.
2. **Compilation**: JIT compiler converts JS to machine code.
3. **Execution**: The browser engine (like V8) runs this machine code.

JS runs **single-threaded** (one task at a time) but it can handle async stuff (like API calls, timers) using callbacks, promises and async/await.

---

## Quick HTML & CSS Reminder (Why? Because JS controls these)

Some important HTML tags to remember because JS often plays with them:

| Tag        | Purpose                      | Example                             |
| ---------- | ---------------------------- | ----------------------------------- |
| `<html>`   | Root of the page             | `<html>...</html>`                  |
| `<head>`   | Info about the page          | `<head><title>Title</title></head>` |
| `<body>`   | Visible content goes here    | `<body><h1>Hello</h1></body>`       |
| `<h1>`     | Heading 1 (big title)        | `<h1>Welcome</h1>`                  |
| `<p>`      | Paragraph                    | `<p>This is text.</p>`              |
| `<a>`      | Link                         | `<a href="#">Link</a>`              |
| `<div>`    | Block container (for layout) | `<div>Box</div>`                    |
| `<span>`   | Inline container             | `<span>Text</span>`                 |
| `<form>`   | Form                         | `<form>...</form>`                  |
| `<input>`  | Input field                  | `<input type="text">`               |
| `<button>` | Button                       | `<button>Click me</button>`         |

CSS you may need because JS changes styles sometimes:

| Property    | What it does                 | Example               |
| ----------- | ---------------------------- | --------------------- |
| `color`     | Text color                   | `color: red;`         |
| `font-size` | Text size                    | `font-size: 16px;`    |
| `margin`    | Space outside element        | `margin: 10px;`       |
| `padding`   | Space inside (before border) | `padding: 5px;`       |
| `border`    | Border line                  | `border: 1px solid;`  |
| `width`     | Width of box                 | `width: 100px;`       |
| `height`    | Height of box                | `height: 100px;`      |
| `position`  | Positioning method           | `position: absolute;` |
| `display`   | Box display type             | `display: flex;`      |

---

## Basic Syntax of JS

1. **Variables**: Think "containers" for values.

```js
var x = 5;          // Old way (function scoped) – avoid using 'var'
let name = "Ace";  // Modern, block scoped (good practice)
const pi = 3.14;   // Like 'final' or 'const' – cannot change
```

✔️ Block scoped means usable only inside `{ }` where you defined it.

---

## Data Types

| Type      | Example                            | Meaning                  |
| --------- | ---------------------------------- | ------------------------ |
| Number    | `let num = 42;`                    | Whole or decimal numbers |
| String    | `let name = "Atheeq";`             | Text                     |
| Boolean   | `let isCool = true;`               | true/false               |
| Array     | `let colors = ["red", "blue"];`    | List                     |
| Object    | `let user = {name: "A", age: 20};` | Key-value pairs          |
| Null      | `let empty = null;`                | Empty value (by intent)  |
| Undefined | `let notSet;`                      | Declared, no value yet   |

---

## Operators

| Type       | Example                   | Meaning                                 |     |              |
| ---------- | ------------------------- | --------------------------------------- | --- | ------------ |
| Arithmetic | `+ - * / %`               | Basic math                              |     |              |
| Assignment | `= += -= *= /=`           | Assign/change variable                  |     |              |
| Comparison | `== === != !== > < >= <=` | Check values (use === for strict check) |     |              |
| Logical    | \`&&                      |                                         | !\` | And, Or, Not |
| String     | `+`                       | Joins strings                           |     |              |
| Type check | `typeof`                  | Check type of variable                  |     |              |

---

## Conditional Statements

✔️ **if else** – Same as other languages:

```js
let age = 18;

if(age >= 18){
  console.log("Adult");
} else {
  console.log("Minor");
}
```

✔️ **switch case** – Like C/Java:

```js
let fruit = "apple";

switch(fruit){
  case "apple":
    console.log("Red");
    break;
  case "banana":
    console.log("Yellow");
    break;
  default:
    console.log("Unknown fruit");
}
```

---

## Loops

✔️ **for loop** (familiar):

```js
for(let i = 0; i < 3; i++){
  console.log("Hello " + i);
}
```

✔️ **while loop**:

```js
let i = 0;
while(i < 3){
  console.log(i);
  i++;
}
```

✔️ **do...while loop** (runs at least once):

```js
let i = 0;
do {
  console.log(i);
  i++;
} while(i < 3);
```

✔️ **for...of (for arrays)**:

```js
let cars = ["BMW", "Audi"];
for(let car of cars){
  console.log(car);
}
```

✔️ **for...in (for objects)**:

```js
let person = {name: "Ace", age: 20};
for(let key in person){
  console.log(key, person[key]);
}
```

---

## Functions (JS loves functions)

✔️ **Basic function:**

```js
function greet(name){
  return "Hi " + name;
}
```

✔️ **Arrow function:**

```js
const greet = (name) => "Hi " + name;
```

✔️ **With default parameter:**

```js
function greet(name = "Guest"){
  return "Welcome, " + name;
}
```

✔️ **Rest parameters:**

```js
function sum(...nums){
  return nums.reduce((a, b) => a + b);
}
```

