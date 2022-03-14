import fs from 'fs';

/**
 * 
 * @param source Array contendo o caminho do aruivo no qual quer copiar. Ex: "C:\Users\example\Desktop\txt.txt" . Pode ser mais de um caminho
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

async function copyFiles(source: string[], dest: string) {
    const fileName: string[] = [];

    source.forEach(name => {
        const lastBar = name.lastIndexOf('/');
        fileName.push(name.slice(lastBar+1))
    });

    try {
        await source.forEach((file) =>{
            fileName.forEach(filename => {
                fs.copyFileSync(file, dest+filename);
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

