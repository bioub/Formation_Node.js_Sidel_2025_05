// En ES2017, une nouvelle syntaxe a été introduite : `async/await`.
// Cette syntaxe ne fonctionne qu'avec les fonctions qui retournent des promesses.


import fs from "node:fs/promises";

async function copyPackageJson() {
  try {
    const packageJsonContent = await fs.readFile("package.json", "utf8");
    await fs.writeFile("package.json.copy", packageJsonContent, "utf8");
    console.log("Copied package.json asynchronously");
  } catch (err) {
    console.error("Error copying package.json asynchronously:", err);
  }
}

copyPackageJson();

// ^
// |
// |[readFile->await readFile]                               [writeFile->await writeFile]              [log]
// |[copyPackageJson         ] ⟳                             [->await readFile]             ⟳         [->await writeFile]
// +------------------------------------------------------------------------------------------------------->

// Le meilleure des 2 mondes
// - on peut écrire du code asynchrone aussi simplement que du code synchrone
// - on peut utiliser les try/catch pour gérer les erreurs
// - on reste asynchrone, donc on ne bloque pas l'exécution du programme
