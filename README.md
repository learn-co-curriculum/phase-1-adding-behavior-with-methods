# Building Cells: Adding Behavior With Methods

## Learning Goals

- Write a method that uses instance data and parameter data

## Introduction

In review, with _object-oriented programming (OOP)_, we can use objects to
represent concepts such as students, books, comments, posts, or even animals.

We should only have to define the properties of an object one time and then
be able to create as many different _instances_ of this objected as we want,
without repeating ourselves.

With knowledge of `constructors`, we can use JavaScript to create a template for
objects that we can use to _construct_ many different pets.

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

We've reviewed working with objects in JavaScript, and started to think about
object-orientated programming by applying the constructor function pattern when
creating objects so that we can easily define and reuse objects that we design.
We can probably think of ways to continue refactoring our constructors and even
making these pretend pets do more useful things; but for now, let's appreciate
that JavaScript gives you a way of passing information down from a higher-level
constructor to concrete instances, and how instances can modify each other's
properties as they're passed around. Good work!

## Resources

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) - [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [JavaScript — Multiple Ways to Create Objects](https://codeburst.io/various-ways-to-create-javascript-object-9563c6887a47)
