
import fs from 'fs';

const indexFile = fs.readFileSync('node_modules/react-icons/si/index.mjs', 'utf8');

function checkIcon(icon) {
    // Search for the icon name in the index file
    // Simple Icons exports are often formatted like: export function SiIconName (props) {
    const regex = new RegExp(`export function\\s+${icon}\\s*\\(`, 'm');
    return regex.test(indexFile);
}

const iconsToCheck = [
    'SiCss3',
    'SiAdobephotoshop',
    'SiAdobeillustrator',
    'SiAdobexd',
    'SiAdobepremierepro',
    'SiAngular',
    'SiKubernetes',
    'SiNx',
    'SiBitbucket'
];

for (const icon of iconsToCheck) {
    console.log(`${icon}: ${checkIcon(icon)}`);
}
