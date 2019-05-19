import * as path from 'path';
import * as url from 'url';
import {app, BrowserWindow} from 'electron';

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
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  );

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
});
