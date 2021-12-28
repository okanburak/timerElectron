const { app, BrowserWindow, Menu, MenuItem  } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}
const menu = new Menu()
menu.append(new MenuItem({
  label: 'Akakçe Timer',
  submenu: [{
    role: 'Aman Aman Nerelere Geldik'
  }]
}))
Menu.setApplicationMenu(menu)


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})




app.whenReady().then(createWindow)

