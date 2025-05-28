// Historiquement
// on peut être embêté par le mot "this" en JavaScript dans un contexte de callback

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello, ${this.name}!`);
//   }

//   delayedGreet() {
//     const that = this;
//     setTimeout(function() {
//       console.log(this); // Timeout {}
//       that.greet(); // Erreur
//     }, 1000);
//   }
// }

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }

  delayedGreet() {
    setTimeout(() => {
      // Dans une fonction fléchée, les pseudo-variables ne sont pas créées
      // (this, arguments, super, new.target)
      this.greet();
    }, 1000);
  }
}

const romain = new User('Romain');
romain.delayedGreet();

