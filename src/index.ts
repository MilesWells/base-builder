import {app, BrowserWindow} from 'electron';
import * as path from 'path';

// main config options loading
import * as config from './config.json';
const {width, height} = config;

app.on('ready', () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height,
    width,
    webPreferences: {
      webSecurity: false
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, '../index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
});
