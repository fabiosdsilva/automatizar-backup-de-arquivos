import getDetailsUser from './Os/getDetailsUser';
import getDetailsFiles from './Os/getDetailsFiles';

import { copyFile } from './File/copyFile';
import{ writeFile } from './File/writeFile';

export default async function index(source: string, dest: string) {
    try {
        const user = await getDetailsUser();
        const fileDetails = await getDetailsFiles(source);
        
        await writeFile('./src/UploadFile/fileDetails.json', { user, fileDetails });

        await copyFile(source, dest)
        
    } catch (error) {
        return error;
    }
}