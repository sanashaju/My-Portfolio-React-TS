
import fs from 'fs';
import path from 'path';

const searchDir = 'src';
const indexFile = fs.readFileSync('node_modules/react-icons/si/index.mjs', 'utf8');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

const files = getAllFiles(searchDir);
const missingInFiles = {};

files.forEach(file => {
    if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        const content = fs.readFileSync(file, 'utf8');
        const siBlockMatch = content.match(/import\s*{([^}]*)}\s*from\s*'react-icons\/si'/);
        if (siBlockMatch) {
            const icons = siBlockMatch[1].split(',').map(s => s.trim().split(/\s+as\s+/)[0]).filter(Boolean);
            const missing = [];
            for (const icon of icons) {
                if (!indexFile.includes(`export function ${icon}`)) {
                    missing.push(icon);
                }
            }
            if (missing.length > 0) {
                missingInFiles[file] = missing;
            }
        }
    }
});

console.log(JSON.stringify(missingInFiles, null, 2));
