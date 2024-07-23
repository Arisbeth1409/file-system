const fs = require("fs");

try {
  fs.rmdirSync("Files");
} catch (err) {
  console.log("hubo un error");
}
