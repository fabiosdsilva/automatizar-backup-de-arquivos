import fs from 'fs';

/**
 * 
 * @param source Caminho do aruivo no qual quer copiar. Ex: "C:\Users\example\Desktop\txt.txt" .
 * @param dest Caminho no qual o arquivo será enviado. Atenção! O caminha também deverá dizer o nome final do arquivo junto com sua extensão.
 * @returns Retorna uma mensagem de arquivo copiado.
 */

export default async function copyFile(source: string, dest: string) {
    try {
        const copy = await fs.copyFileSync(source, dest);
        return `File copied from ${source} to ${dest}`;
    } catch (error: any) {
        return error;
    }
}