// Iniciar as funções para copiar um arquivo e salvar os detalhes em um json
import fs from 'fs';

import getDetailsUser from './Os/getDetailsUser';
import getDetailsFiles from './Os/getDetailsFiles';

import { copyFile } from './File/copyFile';

export default async function index(source: string, dest: string) {
    try {
        const user = await getDetailsUser();
        const fileDetails = await getDetailsFiles(source); // Tenho que passar o caminho do arquivo que quero obter detalhes

        // Processo para copiar um arquivo
        const file = await copyFile(source, dest) // Tenho que passar um array de caminho para copiar os arquivos e colar em uma única pasta

        // Salvar em arquivo json
        const obj = { user, fileDetails };
        const fileJson = await fs.writeFileSync('./Upload/file.json', JSON.stringify(obj));
    } catch (error) {
        return error;
    }
}