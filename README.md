# Building Cells: Adding Behavior With Methods

## Learning Goals

- Write a method that uses instance data and parameter data

## Introduction

In review, with _Object-Oriented programming (OOP)_, we can use classes to
represent concepts such as students, books, comments, posts, or even animals.

We should only have to define the properties and methods of a class once.
Different _instances_ of this class will all have the same properties and
methods.

With knowledge of `constructors`, we can use JavaScript's `class`es as a
template for _instances_.

### Write a Method That Uses Instance Data and Parameter Data

To further explore _OOP_ concepts, let's create 3 classes that will contain
`constructors` and functions that leverage _parameter_ data. In `index.js`,
perform the following tasks:

1. Create `class`es `Cat`, `Dog`, and `Bird`.
2. Each of these `class`es will accept the _parameters_ `name` and `sex`.
3. Your `name` and `sex` _parameters_ will operate as the template for new
_instances_ of each class.

```js
class Cat {
  //...
}

class Dog {
  //...
}

class Bird {
  //...
}
```

For each `class`, create the method `speak`.
- For an _instance_ of `Cat`, speak returns "`name` says meow!",
- For an _instance_ of `Dog`, speak returns "`name` says woof!"
- For an _instance_ of `Bird`, speak returns conditional output. If the _instance_
of `Bird` is `male`, speak returns "It's me! `name`, the parrot!". If it is not `male`,
speak returns "Squawk!".

## Conclusion

We've learned to instantiate class instances, or "objects" in JavaScript.
The constructor function allows us to easily define and standardize the instances
we create. Good work!

## Resources

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) - [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [JavaScript — Multiple Ways to Create Objects](https://codeburst.io/various-ways-to-create-javascript-object-9563c6887a47)
