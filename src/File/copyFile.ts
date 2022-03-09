import fs from 'fs';

/**
 * 
 * @param source Array contendo o caminho do aruivo no qual quer copiar. Ex: "C:\Users\example\Desktop\txt.txt" . Pode ser mais de um caminho
 * @param dest Caminho no qual o arquivo será enviado. Atenção! O caminha também deverá dizer o nome final do arquivo junto com sua extensão.
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
    try {
        await source.forEach((file) =>{
            fs.copyFileSync(file, dest);
            console.log(`File copied from ${file} to ${dest}}`);
        });
    } catch (error: any) {
        return error;
    }
}

export default {
    copyFile,
    copyFiles
};

