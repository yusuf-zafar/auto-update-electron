const {app, BrowserWindow} = require('electron');
const path = require("path");
const {autoUpdater} = require('electron-updater');
const log = require('electron-log');
log.transports.file.resolvePath = ()=> path.join('E:/SCALA CODERS/prodchimp/autoUpdater -electron/autoUpdater 2', 'logs/main.log');
log.info('Hello, log');
log.warn('Some problem appears');
let win;
function createWindow(){
    win = new BrowserWindow({width:300,height:400})
    win.loadFile(path.join(__dirname,'index.html'))
}

app.on('ready',()=>{
    createWindow();
    autoUpdater.checkForUpdatesAndNotify()
})


autoUpdater.on("update-available",()=>{
    console.log()
})