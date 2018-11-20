# Building Cells: Adding Behavior With Methods

## Learning Goals

- Write a method that uses instance data and parameter data

## Introduction

In review, with _Object-Oriented programming (OOP)_, we can use objects to
represent concepts such as students, books, comments, posts, or even animals.

We should only have to define the properties and methods of a class once.
Different _instances_ of this class will all have the same properties and
methods.

With knowledge of `constructors`, we can use JavaScript's `class`es as a
template for _instances_.

### Write a Method That Uses Instance Data and Parameter Data

- `Cat`, `Dog`, and `Bird` classes accept parameters: `name`,`sex`
- If `sex` of `Bird` is "male", variable `canTalk` equals true
- Write function `speak`: `Cat` says "[name] says meow!", `Dog` says "[name]
says woof!" and `Bird`, if male, says "It's me! `name`, the parrot!", if not,
it says "Squawk!".

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

## Conclusion

We've learned to instantiate class instances, or "objects" in JavaScript.
The constructor function allows us to easily define and standardize the instances
we create. Good work!

## Resources

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) - [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [JavaScript — Multiple Ways to Create Objects](https://codeburst.io/various-ways-to-create-javascript-object-9563c6887a47)
