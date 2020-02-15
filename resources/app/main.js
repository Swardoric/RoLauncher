const electron = require('electron');
const DiscordRPC = require('discord-rich-presence')('678009995497046027');
require('update-electron-app')({repo:"Swardoric/RoLauncher"});


const BrowserWindow = electron.BrowserWindow;

const app = electron.app;

let win = null
function CreateWindow(){
     
    win = new BrowserWindow({
        width:1200,
        height:550,
        backgroundColor:'#272727',
        frame:false,
        center:true,
        show:false,
        webPreferences:{
            nodeIntegration:true,
            nativeWindowOpen: true,
            devTools:true
        }
    });

    win.loadFile("index.html")
    win.once('ready-to-show',() =>{
        win.show();
    })
}
app.whenReady().then(CreateWindow);

app.on('window-all-closed',() => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {

    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })

let Tray  = electron.Tray
let Menu = electron.Menu

var appIcon = null
app.on('ready', () => { 
  appIcon = new Tray(__dirname + '/Assets/Imgs/RoLauncher-logo.png')
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Exit',
     click:function(){app.exit()} 
    }
  ])

  // Fait un changement au menu contextuel
  //contextMenu.items[0].checked = false


  // Appelé à nouveau pour Linux car nous avons modifié le menu contextuel
  appIcon.setContextMenu(contextMenu)

  appIcon.on('click',() =>{
        win.show();
  })
})



  //Discord RPC
DiscordRPC.updatePresence({
  state: 'In the Launcher',
  details: 'Home',
  startTimestamp: Date.now(),
  largeImageKey: 'rolauncher-logo',
  instance: true,
})

