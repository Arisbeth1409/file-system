const fs = require("fs");

try {
  fs.appendFileSync("nuevo_archivo.txt", "hola koders", {
    encoding: "utf8",
  });
} catch (err) {
  console.log("hubo un error");
}
