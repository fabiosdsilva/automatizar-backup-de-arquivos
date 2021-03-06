import { basename, join } from 'path';
import fs from 'fs';

/**
 * 
 * @param source String contendo o caminho do aruivo no qual quer copiar. Ex: "C:\Users\example\Desktop\txt.txt" . Pode ser mais de um caminho
 * @param dest Caminho no qual o arquivo será enviado.
 * @returns Retorna uma mensagem de arquivo copiado.
 */

async function copyFile(source: string, dest: string) {
    try {
       await fs.copyFileSync(source, dest);
    } catch (error: any) {
        return error;
    }
}

async function copyFiles(sourceArray: string[], dest: string) {
    const fileName: string[] = [];

    sourceArray.forEach(name => {
        fileName.push(basename(name));
    });

    try {
        sourceArray.forEach( async (file) =>{
            await fileName.forEach(filename => {
                fs.copyFileSync(file, join(dest, filename));
                console.log(`File copied from ${file} to ${dest}`);
            })
        });

    } catch (error: any) {
        return error;
    }
}

export {
    copyFile,
    copyFiles
}

