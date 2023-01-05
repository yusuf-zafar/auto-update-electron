const {app, BrowserWindow} = require('electron');
const path = require("path");
const {autoUpdater} = require('electron-updater');
const log = require('electron-log');
log.transports.file.resolvePath = ()=> path.join('E:/SCALA CODERS/prodchimp/autoUpdater -electron/autoUpdater 2', 'logs/main.log');
log.info('Hello, log');
// log.warn('Some problem appears');
log.log("Application version" + app.getVersion())

let win;
function createWindow(){
    win = new BrowserWindow({width:300,height:400})
    win.loadFile(path.join(__dirname,'index.html'))
}

setInterval(() => {
    autoUpdater.checkForUpdatesAndNotify();
    log.info("checking for update...")
}, 1000 * 60 * 15);

// setInterval(() => {
//     autoUpdater.on("checking-for-update",()=>{
//         log.info("checking for update...")
//     })
// }, 1000 * 60 * 15);


autoUpdater.on("update-available",(info)=>{
    log.info("Update available")
})

autoUpdater.on("update-not-available",(info)=>{
    log.info("Update not available")
})

autoUpdater.on("error",(err)=>{
    log.info("Error in auto-updater. "+ err)
})

autoUpdater.on("download-progress",(progressTrack)=>{
    log.info("Download in progress")
    log.info(progressTrack)
})

autoUpdater.on("update-downloaded",(info)=>{
    log.info("update-downloaded")
    autoUpdater.NotifyQuitAndInstall()
})



app.on('ready',()=>{
    createWindow();
    autoUpdater.checkForUpdatesAndNotify()
})


// CMD -->
// [Environment]::SetEnvironmentVariable("GH_TOKEN","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","User") 

// npm run package