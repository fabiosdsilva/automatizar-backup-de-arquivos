import { app, BrowserWindow } from 'electron';
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

    win.loadFile(resolve(__dirname, 'index.html'));
}

app.whenReady().then(() => {
    createWindow();
})