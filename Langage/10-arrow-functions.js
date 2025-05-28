// function declaration
function hello(name) {
  return `Hello, ${name}!`;
}

// function expression
const greet = function(name) {
  return `Hello, ${name}!`;
};

// arrow function
const greetArrow = (name) => {
  return `Hello, ${name}!`;
};

// arrow function with implicit return
const greetArrowImplicit = (name) => `Hello, ${name}!`;

const createCoords = (x, y) => {
  return {
    x: x, // shorthand property names : au lieu de x: x, on peut juste mettre x
    y: y,
  };
}

// shorthand property names in object literals
const createCoordsShorthand = (x, y) => ({ x, y });
