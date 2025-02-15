const fs = require('fs');
const path = require('path');

function copyComponent() {
  const sourceDir = path.join(__dirname, '..', 'dist');
  const targetDir = path.join(process.cwd(), 'src', 'components');
  
  // Create components directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Copy component files
  try {
    fs.cpSync(sourceDir, targetDir, { recursive: true });
    console.log('Component files successfully copied to src/components/');
  } catch (err) {
    console.error('Error copying component files:', err);
  }
}

copyComponent();