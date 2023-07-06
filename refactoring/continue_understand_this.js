// objects and arrow functions

//object with normal function

let animals = {
    domesticAnimals: ['cat', 'dog'],
    print: function () {
        console.log(this, "inside print");
        setTimeout(function () {
            console.log(this, "inside Timeout");
        }, 3000);
    }
}

animals.print();

let animalsArrow = {
    domesticAnimals: ['cat', 'dog'],
    print: function () {
        console.log(this, "inside print");
        setTimeout(() => console.log(this.domesticAnimals.join(" - "))
        , 3000);
    }
}

animalsArrow.print()

const sayName = function() {
    return {
        name: 'Eliz',
        age: 14,
    };
}
console.log(sayName().name)

const sayNameArrow = () => ({
   
    name: 'Eliz',
    age: 14,
   
});
console.log(sayNameArrow().name)

/** With an arrow function:

No more function keywords are need, and parenthesis are optional as well as curly braces.
Arrow functions make code shorter, more concise, and less verbose.
The keyword return would indeed be optional. The Arrow function has an implicit return. Thus no curly braces. If you are using the curly braces, you have to use the return statement.
Arrow functions are not attached to an identifier (the function name). To call or reuse them, your need to assign them to a variable.
They are frequently used in callback chaining, promise chaining, array methods, and situations where anonymous (the function has no name) functions would be useful.
They handle this operator a lot more clearly. The Arrow functions shine most whenever you need this to be attached to the context and not its own function.
 */

/** When not to use arrow functions
The arrow functions concept is great, however, they are not ideal across all functional instances. You should be keen on where to apply the arrow function.

For example, there are some instances that you should avoid using.

They include:

Arrow function can never be a method
For example, this applies to the mom example we explained earlier

For example:

 */

const parent = {
    // add property
 mom_name: "Samantha Quinn",
    // create a method to return parent
 mother: () => {
   return `${this.mom_name} is my mother.`;
 },
};
console.log(parent.mother());

/** Object parent has one property, mom_name, and one method, mother.

In this case, this.mom_name return undefined because this value is equal to the method upon where we call the object property.

As we said earlier, this inside an arrow function is equivalent to the global object.

Whenever an arrow function is inside an object, it will derive this value from the enclosing lexical scope. Lexical scope, in this case, is the global scope.

this.mom_name in the mother method is equal to the window.mom_name in the web browser. The window.mom_name is undefined by default.

Window object doesn’t have the property mom_name. Thus console.log(mom. mother()) will return undefined as this inherits its eclosing context mother where mom_name is undefined.

To prevent the this value from binding to the global scope, use the regular function inside the object method as follows:

 */

// an object mom with the property mom_name
const parent1 = {
    // add property
    mom_name: "Samantha Quinn",
    // create a method to return parent
    mother: function () {
      return `${this.mom_name} is my mother.`;
    },
  };
  console.log(parent.mother());

  /** Avoid arrow functions when using a code block with methods. They can be confusing at times due to their lexical scoping. This occurs mostly on object methods, prototype methods, and class methods. this is scoped to the parent (window) context.

An arrow function can never be a constructor
The value this points to its parent does not have a constructor. */
const User = () => {
    (this.name = "John Doe"), (this.age = 20);
  };
  const user = new User();
  console.log(user);

  /**When you execute, this will throw an error Uncaught TypeError: User is not a constructor because arrow functions are not constructable.

However, a regular function can be constructors,

For example:

 */

function User1() {
    (this.name = "John Doe"), (this.age = 20);
  }
  const user1 = new User1();
  console.log(user1)
  /** Using the new keyword to create an object in an arrow function will output an error.

Click handlers
Suppose I have a button CLICK ME.

Here is the code to implement a click me button. */

`<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    button {
      font-size: 100px;
    }
    .on {
      background: #ffc600;
    }
  </style>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <button id="clicky">CLICK ME</button>
  <script>
// Call the following arrow function when the button is clicked.
    const button = document.querySelector('#clicky'); button.addEventListener('click', () => { this.classList.toggle('on'); });
  </script>
  </button>
</body>
</html>
`
/** When you click the button, you get an error. But why? This means that this in the click event handle is undefined. And will always return undefined.

Remember what we said about the arrow functions using this?. this, inside the arrow function, implies that the function does not have a this value of its own.

They don’t define their own context since it doesn’t have its own this context. They inherit that from the parent scope whenever you call this. The parent scope is the window scope. Thus this in the above example will reference the window object.

this is not attached to the element we refer to. The window object doesn’t have .classList.toggle property. Thus Javascript engine will add the .classList.toggle to the window object and set it to undefined. To fix these issues, you would use the regular function where this is bound to the element that triggers the click event. */

`
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    button {
      font-size: 100px;
    }
    .on {
      background: #ffc600;
    }
  </style>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <button id="clicky">CLICK ME</button>
  <script>
    const button = document.querySelector('#clicky'); button.addEventListener('click', function() { this.classList.toggle('on'); });
  </script>
  </button>
</body>
</html>
`

/** Debugging may not be easy
Arrow functions cannot be named. They are anonymous. Anonymous functions are labeled as anonymous during a debugging session.

This doesn’t give you any idea what the code block is running. When you run into issues, it may be harder to debug the root cause. When the functions have names, it’s simpler to trace back to the problem. With anonymous functions, it adds a level of complexity to debugging.

Readability takes a hit
Although arrow functions help with writing short and concise code, it is not necessarily readable. Most programmers are used to the traditional way of writing functions, and arrow functions change this completely. This makes code harder to read and might take a while for someone newer to grasp the code.

Therefore in such circumstances, developers may choose to use regular functions rather than arrow functions. The primary objective when you compose a function is to create the purest function practicable. Meaning that the function would still return its same value. If you’re using regular functions or arrow functions, it doesn’t matter. It should be about writing readable and cleaner code always.

 */