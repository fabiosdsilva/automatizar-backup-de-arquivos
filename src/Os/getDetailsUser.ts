import os from 'os';

/**
 * 
 * @returns Retorna um objeto com informações do hostname, version do OS e o endereço mac.
 */

export default async function userDetails() {
    const { hostname, version, networkInterfaces } = os;

    return {
        hostname: hostname(),
        OS: version(),
        macAddress: networkInterfaces().Ethernet[0].mac
    }
}