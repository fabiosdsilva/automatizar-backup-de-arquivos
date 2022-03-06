import fs from 'fs';

/**
 * 
 * @param source Passar como string o caminho completo do aroquivo no qual quer obter detalhes como data, criado em...
 * @returns Retorna um objeto com detalhes do arquivo.
 */

export default async function getDetailsFile(source: string) {
    try {
        const stat = await fs.statSync(source);
        return stat;

    } catch (error: any) {
        return error;
    }
}