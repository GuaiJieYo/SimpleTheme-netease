import { WatchAnimation } from './script/theme'
import './styles/theme.css'

plugin.onLoad(async ()=>{
    // 注入样式
    const Style = document.createElement('style')
    Style.id = 'STStyle'
    Style.innerHTML = await betterncm.fs.readFileText(GetFilePath() + '/main.css')
    document.head.append(Style)

    // 开启监听动画
    WatchAnimation()
})

function GetFilePath() {
    var path = plugin.pluginPath
    if (betterncm.fs.exists(plugin.filePath + '/dist')) {
        path += '/dist'
    }
    return path
}