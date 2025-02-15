#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

const projectRoot = process.cwd(); // Gets the project where the package is installed
const packageName = "custom-toggle-button1"; // Your package name

const sourceDir = path.join(projectRoot, "node_modules", packageName, "dist"); // Source (installed package)
const destinationDir = path.join(projectRoot, "src", "components", packageName"); // Destination (user's project)

// Ensure destination folder exists
fs.ensureDirSync(destinationDir);

// Copy files from node_modules to src/components
fs.copy(sourceDir, destinationDir)
  .then(() => console.log(`✅ Copied ${packageName} to ${destinationDir}`))
  .catch((err) => console.error(`❌ Error copying ${packageName}:`, err));
