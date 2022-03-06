import fs from 'fs';

/**
 * 
 * @param source Array contendo o caminho do aruivo no qual quer copiar. Ex: "C:\Users\example\Desktop\txt.txt" . Pode ser mais de um caminho
 * @param dest Caminho no qual o arquivo será enviado. Atenção! O caminha também deverá dizer o nome final do arquivo junto com sua extensão.
 * @returns Retorna uma mensagem de arquivo copiado.
 */

export default async function copyFile(source: string[], dest: string) {
    try {
        for (let i = 0; i < source.length; i++) {
            await fs.copyFileSync(source[i], dest);
            console.log(`File copied from ${source[i]} to ${dest}}`);
        }
    } catch (error: any) {
        return error;
    }
}