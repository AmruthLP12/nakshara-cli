module.exports = (program) => {
  program
    .command("hello [name]")
    .description("Say hello")
    .action((name) => {
      console.log(`Hello ${name || "World"}!`);
    });
};
