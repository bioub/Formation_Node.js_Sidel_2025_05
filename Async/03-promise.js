import fs from "node:fs/promises";

// Avec les promesses
// On écrira toujours .then(callback de succès)
// et .catch(callback d'erreur)

// A ce stade on a toujours le callback hell :
// fs.readFile("package.json", "utf8")
//   .then((packageJsonContent) => {
//     fs.writeFile("package.json.copy", packageJsonContent, "utf8")
//       .then(() => {
//         console.log("Copied package.json asynchronously");
//       })
//       .catch((err) => {
//         console.error("Error writing package.json.copy asynchronously:", err);
//       });
//   })
//   .catch((err) => {
//     console.error("Error reading package.json asynchronously:", err);
//   });

// Quand on utilise les promesses, si un callback retourne lui même une promesse,
// on peut enchaîner les appels avec .then()/.catch sans avoir besoin de d'imbriquer les callbacks
fs.readFile("package.json", "utf8")
  .then((packageJsonContent) => {
    return fs.writeFile("package.json.copy", packageJsonContent, "utf8");
  })
  .then(() => {
    console.log("Copied package.json asynchronously");
  })
  .catch((err) => {
    console.error("Error copying package.json asynchronously:", err);
  });

// Cette exemple en plus court avec les arrow functions
fs.readFile("package.json", "utf8")
  .then((packageJsonContent) => fs.writeFile("package.json.copy", packageJsonContent, "utf8"))
  .then(() => console.log("Copied package.json asynchronously"))
  .catch((err) => console.error("Error copying package.json asynchronously:", err));

