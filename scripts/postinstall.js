// scripts/postinstall.js
const fs = require('fs-extra');
const path = require('path');

async function copyComponentToSrc() {
  try {
    // Get the path to the installing project
    const projectPath = process.env.INIT_CWD || process.cwd();
    
    // Source: your component in node_modules
    const sourceDir = path.join(__dirname, '..', 'src', 'components');
    
    // Destination: user's src/components directory
    const destDir = path.join(projectPath, 'src', 'components');

    // Create components directory if it doesn't exist
    await fs.ensureDir(destDir);

    // Copy the component files
    await fs.copy(sourceDir, destDir, {
      overwrite: true,
      errorOnExist: false,
    });

    // Create an index.ts file in the components directory if it doesn't exist
    const indexPath = path.join(destDir, 'index.ts');
    if (!await fs.pathExists(indexPath)) {
      await fs.writeFile(indexPath, `export * from './ToggleButton';\n`);
    }

    console.log('✅ Successfully installed component to src/components/');
  } catch (error) {
    console.error('❌ Error installing component:', error);
    // Don't exit with error to prevent npm install from failing
  }
}

// Only run in production install
if (process.env.NODE_ENV !== 'development') {
  copyComponentToSrc();
}

// src/components/ToggleButton.tsx (example component structure)
import React from 'react';

export interface ToggleButtonProps {
  // your props here
}

export const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
  // your component code here
};

// src/index.ts
export * from './components/ToggleButton';