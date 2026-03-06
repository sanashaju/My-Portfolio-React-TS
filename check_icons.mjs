
import fs from 'fs';
import path from 'path';

const skillsFile = fs.readFileSync('src/data/skills.ts', 'utf8');
// Extract imports from Si block
const siBlockMatch = skillsFile.match(/import\s*{([^}]*)}\s*from\s*'react-icons\/si'/);
if (siBlockMatch) {
    const icons = siBlockMatch[1].split(',').map(s => s.trim()).filter(Boolean);
    const indexFile = fs.readFileSync('node_modules/react-icons/si/index.mjs', 'utf8');
    const missing = [];
    for (const icon of icons) {
        if (!indexFile.includes(`export function ${icon}`)) {
            missing.push(icon);
        }
    }
    console.log('Missing icons:', missing);
} else {
    console.log('Si block not found');
}
