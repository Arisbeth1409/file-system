const fs = require("fs");

console.log(
  fs.readdirSync("Files", {
    encoding: "utf8",
    recursive: true,
  })
);
