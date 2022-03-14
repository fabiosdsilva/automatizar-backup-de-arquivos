export default 
    interface IMac {
    address: string,
    netmask: string,
    family: string,
    mac: string,
    internal: boolean,
    cidr: string,
    scopeid?: number
}