globalThis.globalScope = 'globalScope'; // variable globale, accessible partout
const scriptScope = 'scriptScope'; // selon la plateforme peut être globalScope, closureScope ou moduleScope

function externalFct() {
  const closureScope = 'closureScope';

  function internalFct() {
    // Appelée à l'intérieur de internalFct
    // localScope est une variable locale à internalFct
    // idem si c'était un paramètre de la fonction
    const localScope = 'localScope';

    if (true) {
      // blockScope est une variable locale à ce bloc
      // (ici le bloc if), elle n'existe pas après le if
      let blockScope = 'blockScope';
      console.log(globalScope);
      console.log(scriptScope);
      console.log(closureScope);
      console.log(localScope);
      console.log(blockScope);
    }
    // blockScope n'est pas accessible ici, car il est défini dans le bloc if
  }
  internalFct();
  // localScope n'est pas accessible ici, car il est défini dans internalFct

}

externalFct();
