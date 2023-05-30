const { Menu } = require('electron');

const mainMenu = Menu.buildFromTemplate([
  {
    label: '菜单1',
    submenu:[
      {
        label: '功能1-1',
        submenu: [
          {
            label: '功能1-1-1'
          },
          {
            label: '功能1-1-2'
          }
        ]
      },
      {
        label: '功能1-2'
      }
    ]
  },
  {
    label: '菜单2',
    submenu: [
      {
        label: '问候',
        click: () => {
          console.log('你好');
        }
      },
      {
        label: 'separator',
        type: 'separator'
      },
      {
        label: '爱好',
        submenu: [
          {
            label: '游泳',
            type: 'checkbox',
          },
          {
            label: '打球',
            type: 'checkbox',
          },
          {
            label: '跑步',
            type: 'checkbox',
            checked: true
          }
        ]
      },
      {
        label: 'separator',
        type: 'separator'
      },
      {
        label: '性别',
        submenu: [
          {
            label: '男',
            type: 'radio'
          },
          {
            label: '女',
            type: 'radio'
          },
        ]
      },
      
    ]
  },
  {
    label: '菜单3',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' }
    ]
  }
]);

module.exports = mainMenu;