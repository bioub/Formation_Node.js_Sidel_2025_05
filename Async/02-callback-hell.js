import fs from "node:fs";

// Synchronous copy
try {
  const packageJsonContent = fs.readFileSync("package.json", "utf8");
  fs.writeFileSync("package.json.copy", packageJsonContent, "utf8");
  console.log("Copied package.json synchronously");
} catch (err) {
  console.error("Error copying package.json synchronously:", err);
}

// Asynchronous copy
// Callback hell / Pyramid of doom
// L'utilisation de callbacks imbriqués peut rendre le code difficile à lire et à maintenir
fs.readFile("package.json", "utf8", (err, packageJsonContent) => {
  if (err) {
    console.error("Error reading package.json asynchronously:", err);
  } else {
    fs.writeFile("package.json.copy", packageJsonContent, "utf8", (err) => {
      if (err) {
        console.error("Error writing package.json.copy asynchronously:", err);
      } else {
        console.log("Copied package.json asynchronously");
      }
    });
  }
});
