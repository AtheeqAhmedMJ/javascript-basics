# **Events in JS**

Events are **actions** that happen in the browser – like clicks, mouse moves, key presses.
JS allows you to "listen" to these and "react".

---

## **How to add events?**

**Inline in HTML (old school, not recommended now)**

```html
<button onclick="alert('Clicked')">Click Me</button>
```

**JS Way (better way)**

```js
let btn = document.getElementById("myBtn");

btn.addEventListener("click", function(){
  alert("Button clicked!");
});
```

**Common events:**

| Event Type  | Description           |
| ----------- | --------------------- |
| `click`     | User clicked element  |
| `mouseover` | Mouse over an element |
| `mouseout`  | Mouse left element    |
| `keydown`   | Key pressed down      |
| `submit`    | Form submitted        |
| `change`    | Value changed (input) |

---

# **Output Methods (In-Depth)**

**Console log (for developers):**

```js
console.log("Hey, this is for devs!");
```

**Alert box (pops up in browser):**

```js
alert("I am an alert!");
```

**Document write (prints on the page – not recommended anymore):**

```js
document.write("Hello World!");
```

**DOM Manipulation (change page content):**

```js
document.getElementById("demo").innerHTML = "New Text!";
```

---

# **Template Literals (String Interpolation)**

This is a **modern way to build strings**, much better than the old `+` operator.

**Old way:**

```js
let name = "Atheeq";
console.log("Hello " + name + ", welcome!");
```

**New way (Template Literal using backticks \`):**

```js
let name = "Atheeq";
console.log(`Hello ${name}, welcome!`);
```

---

# **try-catch in JavaScript**

It’s a way to catch errors without crashing the whole program.

When JS code hits an error — it usually stops running and throws a "red scary error" in the console.

But with try...catch, you can "catch" that error, handle it gently, and keep the program running.

---

## **The Structure:**

```js
try {
  // risky code here (may throw error)
} catch(error) {
  // this runs if error happens
}
```

## **Real Example:**

```js
try {
  let num = 5;
  console.log(num.toUpperCase()); // this will throw error - toUpperCase() on number
} catch(err) {
  console.log("Error happened: " + err); // handling error
}
```

Without try-catch: app crashes, red error in console.
With try-catch: you handle it smoothly, maybe show user-friendly message instead.

---

# **What exactly is an API?**

API = Application Programming Interface.

* You write JavaScript code in the browser.
* You want data (say weather info or stock prices) from another server.
* You cannot directly access their database.
* So you send a request to the API endpoint (like calling the waiter).
* API gives you data (in JSON form mostly) as response.

---

# **Fetch API (Getting Data from API)**

Old way (XMLHttpRequest) is painful – now we use Fetch API.

**Example: Get data from URL:**

```js
fetch('https://api.example.com/data')
  .then(response => response.json()) // Convert to JSON
  .then(data => console.log(data))   // Handle the data
  .catch(error => console.log("Error: ", error));
```

`fetch()` returns a **Promise** – so we can handle success and failure.

---

# **What is Asynchronous (Async) Code in JavaScript?**

Async = "Not waiting for the previous task to finish."

JS can handle multiple tasks at once, without waiting for each to finish one by one.

---

## **Real Life Example (so you remember):**

* You boil water (takes time).
* Meanwhile, you cut vegetables.
* When water boils, you hear the whistle and use it.
* You didn’t "wait" doing nothing — you did other work in between — this is Async in life.

---

## **How JS does Async?**

* `setTimeout()`, `setInterval()` — run code later.
* Promises — wait for something to finish.
* `async/await` — cleaner way to handle promises.
* `fetch()` — API calls run async.

---

# **Async/Await (Best way to handle async code)**

**Promise way (looks ugly sometimes):**

```js
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data));
```

**Async/Await way (clean, readable):**

```js
async function getData(){
  try {
    let res = await fetch('https://api.example.com/data');
    let data = await res.json();
    console.log(data);
  } catch(error) {
    console.log("Error:", error);
  }
}
getData();
```

Notice the use of:

* `async`: Declares an asynchronous function.
* `await`: Wait till promise resolves before moving on.

---

# **Spread and Rest Operator (`...`)**

---

## **Spread Operator (expands things)**

Use it to copy or expand arrays/objects.

```js
let arr1 = [1,2,3];
let arr2 = [...arr1, 4,5];  // arr2 is [1,2,3,4,5]
```

Also works with objects:

```js
let obj1 = {a:1, b:2};
let obj2 = {...obj1, c:3}; // obj2 is {a:1, b:2, c:3}
```

---

## **Rest Operator (collects things)**

Used to gather multiple values into an array.

```js
function sum(...numbers){
  return numbers.reduce((a, b) => a + b);
}
console.log(sum(1,2,3,4)); // 10
```

Here `...numbers` collects all arguments into an array called `numbers`.

---

## **Difference between Rest and Spread**

| Spread                                  | Rest                            |
| --------------------------------------- | ------------------------------- |
| Expands arrays/objects                  | Gathers arguments into an array |
| Used in array/object copying or merging | Used in function parameter list |

---

## **Example for clarity:**

```js
let arr = [1,2,3];
console.log(...arr); // Spread: prints 1 2 3

function printAll(...args){  // Rest: collects all arguments
  console.log(args);
}
printAll(1,2,3); // prints [1,2,3]
```

---
