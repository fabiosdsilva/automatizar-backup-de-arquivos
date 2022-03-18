import { app, BrowserWindow, ipcMain as ipc } from 'electron';
import { resolve } from 'path';

async function createWindow() {
    const win = new BrowserWindow({
        width: 375,
        height: 650,
        webPreferences: {
            nodeIntegration: true,
            preload: resolve(__dirname, 'preload.js')
        }
    });

    win.loadFile('./electron/src/pages/login/index.html');

    // Recebendo informações da tela de login
    // Email e Password
    ipc.on('set-email', (evendt, email) =>{
        // Mostrar email digitado no terminal
        console.log(email);
    });

    ipc.on('set-password', (evendt, password) =>{
        // Mostrar senha digitado no terminal
        console.log(password);
    });
}

app.whenReady().then(() => {
    createWindow();
})