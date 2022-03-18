import fs from 'fs';

/**
 * 
 * @param source Passar como string o caminho completo do aroquivo no qual quer obter detalhes como data, criado em...
 * @returns Retorna um objeto com detalhes do arquivo.
 */

export default async function getDetailsFile(source: string) {
    try {
        const {size, atime } = await fs.statSync(source);
        const obj = { size, atime }
        return obj;

    } catch (error: any) {
        return error;
    }
}