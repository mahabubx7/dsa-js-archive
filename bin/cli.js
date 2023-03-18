#! /usr/bin/env node
const yargs = require("yargs");
const utils = require("./utils");
console.log("Tester CLI by Mahabub");

const usage = "\nUsage: tester <file_name> strings";
const options = yargs
  .usage(usage)
  .option("fl", {
    alias: "file",
    describe: "filename of your target one",
    type: "boolean",
    demandOption: false,
  })
  .help(true).argv;

let commands = utils.parseCommands(yargs.argv._);

if (yargs.argv._[0] === null) {
  utils.showHelp();
  return;
}

if (yargs.argv.fl === true || yargs.argv.filename === true) {
  console.log(utils.callFile(commands));
  return;
}
