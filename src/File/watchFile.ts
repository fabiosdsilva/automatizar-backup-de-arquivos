import fs from 'fs';

function watchFile(sourceFile: string) {
    fs.watchFile(sourceFile, (file) => {
        if (file) {
            console.log(`The file has been modified`);
        }
    });
}

export { watchFile }