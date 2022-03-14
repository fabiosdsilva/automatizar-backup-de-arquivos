import { hostname, version, networkInterfaces }  from 'os';
import IMac from '../types/interfaces';

/**
 * 
 * @returns Retorna um objeto com informações do hostname, version do OS e o endereço mac.
 */

export default function userDetails() {
    const macAddress = networkInterfaces().Ethernet as IMac[];
    
    return {
        hostname: hostname(),
        OS: version(),
        macAddress: macAddress[0].mac
    }
}

