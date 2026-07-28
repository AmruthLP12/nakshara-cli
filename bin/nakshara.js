#!/usr/bin/env node

const { Command } = require("commander");

const helloCommand = require("../commands/hello");
const whoamiCommand = require("../commands/versions");

const program = new Command();

program.name("nakshara").description("Nakshara Developer CLI").version("1.0.0");

helloCommand(program);
whoamiCommand(program);

program.parse(process.argv);
