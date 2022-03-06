import os from 'os';

export default async function userDetails() {
    const { hostname, version, networkInterfaces } = os;
    return {
        hostname: hostname(),
        OS: version(),
        macAddress: networkInterfaces().Ethernet[0].mac
    }
}