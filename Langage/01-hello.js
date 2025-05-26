const names = ['Alice', 'Bob', 'Charlie'];

function hello(name) {
  // template literal (ES6/ES2015)
  return `Hello, ${name.toUpperCase()}!`;
}

for (const n of names) {
  if (n.length > 5) {
    console.log(hello(n));
  }
}

