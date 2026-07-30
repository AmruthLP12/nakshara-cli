const { execSync } = require("child_process");

function run(script) {
  try {
    execSync(script.command, {
      cwd: script.cwd,
      stdio: "inherit",
      shell: true,
    });
  } catch (err) {
    console.error("❌ Script failed.");
  }
}

module.exports = run;
