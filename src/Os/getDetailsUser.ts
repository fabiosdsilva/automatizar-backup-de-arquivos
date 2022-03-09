import os from 'os';

/**
 * 
 * @returns Retorna um objeto com informações do hostname, version do OS e o endereço mac.
 */
interface IMac {
    address: string,
    netmask: string,
    family: string,
    mac: string,
    internal: boolean,
    cidr: string,
    scopeid?: number
}

export default function userDetails() {
    const { hostname, version, networkInterfaces } = os;

    const macAddress = networkInterfaces().Ethernet as IMac[];
    
    return {
        hostname: hostname(),
        OS: version(),
        macAddress: macAddress[0].mac
    }
}

console.log(userDetails());

