import getDetailsUser from './Os/getDetailsUser';
import getDetailsFiles from './Os/getDetailsFiles';

import { writeFile } from './File/writeFile';
import { watchFile } from './File/watchFile'

export default async function index(source: string, dest: string) {
    try {
        const user = await getDetailsUser();
        const fileDetails = await getDetailsFiles(source);
        
        await writeFile('./src/UploadFile/fileDetails.json', { user, fileDetails });
        watchFile(source, dest);
        
    } catch (error) {
        return error;
    }
}