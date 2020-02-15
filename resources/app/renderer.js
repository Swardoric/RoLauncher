const electron = require('electron');
const child = require('child_process').execFile;
const remote = electron.remote;
const DiscordRPC = require('discord-rich-presence')('678009995497046027');
const Config = require('./config.json')
const path = "C:\\Users\\gg\\AppData\\Local\\Roblox\\Versions\\version-a35b6d2e3b604b49\\RobloxPlayerBeta.exe"


function openRoblox(website){
    if(website){
        let rbx = window.open('https://roblox.com');
        rbx.focus();
        let win = remote.BrowserWindow.getFocusedWindow();
        //win.hide();
        win.maximize();

        DiscordRPC.updatePresence({
            state: 'Play Roblox',
            details: 'On the website',
            startTimestamp: Date.now(),
            largeImageKey: 'rolauncher-logo',
            instance: true,
          })
          
        win.once('closed',() =>{
            DiscordRPC.updatePresence({
                state: 'In the Launcher',
                details: 'Home',
                startTimestamp: Date.now(),
                largeImageKey: 'rolauncher-logo',
                instance: true,
              })
        })
    }

    if(website != true){
        child(Config.robloxPath,(err)=>{
            console.log(err);
        })
    }
}

function openRobloxStudio(website){
    if(website){
        let rbx = window.open('https://www.roblox.com/develop');
        rbx.focus();
        let win = remote.BrowserWindow.getFocusedWindow();
        //win.hide();
        win.maximize();

        DiscordRPC.updatePresence({
            state: 'Developing',
            details: 'On the website',
            startTimestamp: Date.now(),
            largeImageKey: 'rolauncher-logo',
            instance: true,
          })
          
        win.once('closed',() =>{
            DiscordRPC.updatePresence({
                state: 'In the Launcher',
                details: 'Home',
                startTimestamp: Date.now(),
                largeImageKey: 'rolauncher-logo',
                instance: true,
              })
        })
    }

    if(website != true){
        child(Config.robloxStudioPath,(err)=>{
            console.log(err);
        })
    }
}

