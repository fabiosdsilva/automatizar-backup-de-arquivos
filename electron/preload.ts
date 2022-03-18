import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
    setEmail: (email) => ipcRenderer.send('set-email', email),
    setPassword: (password) => ipcRenderer.send('set-password', password)
});