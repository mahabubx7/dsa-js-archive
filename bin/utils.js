const { usage } = require("yargs");
const { exec } = require("node:child_process");

function parseCommands(params) {
  return params[0].split("/");
}

function showHelp() {
  console.log(usage);
  console.log("\nOptions:\r");
  console.log("\t--version\t    " + "See version." + "\t\t" + "[boolean]\r");
  console.log(
    "   -fl, --file\t" + "    " + "Take target file." + "\t\t" + "[boolean]\r"
  );
  console.log("\t--help\t\t     " + "Show help." + "\t\t\t" + "[boolean]\n");
}

function callFile(topic) {
  try {
    let command = "mocha src";
    for (const t of topic) {
      command += "/";
      command += t;
    }
    exec(`${command}/tests.js`, (err, output) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(output);
    }); // shell command
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  parseCommands,
  showHelp,
  callFile,
};
