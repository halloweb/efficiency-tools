import Vue from 'vue'
import Datastore from 'nedb-promise'
import { remote } from 'electron'
import path from 'path'
const basePath = remote.app.getPath('userData')
console.log('程序数据存储路径：', basePath)
const project = new Datastore({
  autoload: true,
  timestampData: true,
  filename: path.join(basePath, '/project.db')
})
Vue.prototype.$db = {
  project
}
