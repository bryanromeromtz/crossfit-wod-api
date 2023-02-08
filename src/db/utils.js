const fs = require("fs");

const saveToDB = (data) => {
  fs.writeFileSync("./src/db/DB.json", JSON.stringify(data, null, 2), {
    encoding: "utf-8",
  });
};

module.exports = {
  saveToDB,
};
