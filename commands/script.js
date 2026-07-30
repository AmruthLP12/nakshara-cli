const scripts = require("../config/scripts.json");
const run = require("../utils/runner");

module.exports = (program) => {
  Object.entries(scripts).forEach(([name, script]) => {
    program
      .command(name)
      .description(`Run ${name}`)
      .action(() => run(script));
  });
};
