const fs = require("fs");
const path = require("path");
const fse = require("fs-extra"); // Ensures cross-platform copying

const source = path.join(__dirname, "node_modules", "custom-toggle-button1", "dist");
const destination = path.join(__dirname, "src", "components", "custom-toggle-button1");

// Create destination folder if it doesn't exist
if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
}

// Copy the files
fse.copy(source, destination)
    .then(() => console.log("✅ Component copied to src/components/custom-toggle-button1"))
    .catch(err => console.error("❌ Error copying component:", err));
