// Also: students haven't seen `templateStrings` yet, so we should write our
// expectations as String
//
// Also our solution in solution branch should not use templateString yet
// either.
let cat, dog, bird, bird2;

describe("cat", () => {
  beforeEach(() => {
    cat = new Cat("Sasha", "female")
  })

  it("has a class of cat", () => {
    expect(new Cat()).to.be.an.instanceof(Cat);
  })
  it("cat.speak() returns '[name]' says meow!", () => {
    // Hard-code in the expectation
    expect(cat.speak()).to.eq(`${cat.name} says meow!`)
  })
})
describe("dog", () => {
  beforeEach(() => {
    dog = new Dog("Rufio", "male")
  })

  it("has a class of dog", () => {
    expect(new Dog()).to.be.an.instanceof(Dog);
  })
  it("dog.speak() returns '[name] says woof!'", () => {
    // Hard-code in the expectation
    expect(dog.speak()).to.eq(`${dog.name} says woof!`)
  })
})
describe("bird", () => {
  beforeEach(() => {
    bird = new Bird("Pablo", "male")
    bird2 = new Bird("Mable", "female")
  })
  
  it("has a class of Bird", () => {
    expect(new Bird()).to.be.an.instanceof(Bird);
  })
  it("bird.speak() returns 'It's me! [name], the parrot!'", () => {
    // Hard-code in the expectation
    expect(bird.speak()).to.eq(`It's me! ${bird.name}, the parrot!`)
  })
  it("bird2.speak() returns 'Squawk!'", () => {
    expect(bird2.speak()).to.eq(`Squawk!`)
  })
})
