import fs from 'fs';

/**
 * @param sourceFile Caminho do arquivo a ser escrito.
 * @param obj Poderá ser do tipo object ou string. É importante que, case for string, terá que ser escrita com aspas duplas
 */

type TypeObject = string | object;

async function writeFile(sourceFile: string, obj: TypeObject) {
    if (typeof obj == 'object') {
        try {
            await fs.writeFileSync(sourceFile, JSON.stringify(obj));
        } catch (error) {
            return error;
        }
    }

    if (typeof obj == 'string') {
        try {
            await fs.writeFileSync(sourceFile, obj);
        } catch (error) {
            return error;
        }
    }
}

export { writeFile }