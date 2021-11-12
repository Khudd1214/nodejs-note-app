const fs = require("fs");
const prompt = require("prompt");

prompt.start();
prompt.get(["filename", "data"], function (err, result) {
  if (err) {
    console.log(err);
  }
  fs.appendFileSync(result.filename, result.data + "\n");
});
