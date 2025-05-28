// Top Level Await
// Depuis ES2022 on peut utiliser await sans fonction async
// A condition que le fichier soit un module ESM (ne fonctionne pas avec CommonJS)

import fs from "node:fs/promises";

try {
  const packageJsonContent = await fs.readFile("package.json", "utf8");
  await fs.writeFile("package.json.copy", packageJsonContent, "utf8");
  console.log("Copied package.json asynchronously");
} catch (err) {
  console.error("Error copying package.json asynchronously:", err);
}

