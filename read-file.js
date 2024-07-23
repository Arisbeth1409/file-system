const fs = require("fs");

console.log(
  fs.readFileSync("package.json", {
    encoding: "utf8",
  })
);
