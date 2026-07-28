module.exports = (program) => {
  program
    .command("whoami")
    .description("About Nakshara")
    .action(() => {
      console.log("Nakshara CLI");
      console.log("Version: 1.0.0");
      console.log("Author: Amruth");
    });
};
