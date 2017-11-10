#### Arrow Functions

**EDIT CODE ON SLIDE**

function addOne(value) {
  return value + 1;
};

const addOne = (value) => {
  return value + 1;
};

const addOne = value => value + 1;

* Named functions can be assigned to a variable
* If returning a value immediately, `{ return ... }` isn't needed.
* If there is only one parameter, the parenthesis aren't required either.

Aside from being more pleasant to read/write, arrow functions also have no binding of `this`, which helps with various issues commonly encountered.
