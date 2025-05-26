function externalFct() {

  function internalFct() {
    console.log("Hello from internalFct");
  }

  internalFct();
  console.log("Hello from externalFct");

}

externalFct();
