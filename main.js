const { app, BrowserWindow, Menu, shell } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL('https://intranetet/__beta__/');

    const template = [
        {
            label: 'Redigera',
            submenu: [
                { role: 'undo', label: 'Ångra' },
                { role: 'redo', label: 'Gör om' },
                { type: 'separator' },
                { role: 'cut', label: 'Klipp ut' },
                { role: 'copy', label: 'Kopiera' },
                { role: 'paste', label: 'Klistra in' },
                { role: 'selectall', label: 'Markera allt' }
            ]
        },
        {
            label: 'Öppna Outlook',
            click: async () => await shell.openExternal('https://outlook.office.com')
        },
        {
            label: 'Öppna Webbsidan',
            click: async () => await shell.openExternal('https://www.robursafe.se')
        },
        {
            label: 'Om',
            submenu: [
                { label: `Version ${app.getVersion()}` }
            ]
        },
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});