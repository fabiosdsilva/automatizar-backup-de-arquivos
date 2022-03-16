import fs from 'fs';

import { copyFile } from './copyFile';

function watchFile(sourceFile: string, dest: string) {
    fs.watchFile(sourceFile, (file) => {
        if (file) {
            console.log(`The file has been modified`);
            copyFile(sourceFile, dest);
        }
    });
}

export { watchFile }