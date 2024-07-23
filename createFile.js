const fs = require("fs");
// const fs = require("node:fs");

fs.writeFileSync("nuevo_archivo.txt", "contenido de archivo", {
  encoding: "utf8",
});

// fs.writeFileSync("nuevo_archivo.txt", "contenido de archivo", "utf8");
