import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 *#on stickers* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 𝘼𝙍𝙀 𝘿𝙄𝙎𝘼𝘽𝙇𝙀𝘿 𝙐𝙎𝙀 *#on stickers* 𝙏𝙊 𝙀𝙉𝘼𝘽𝙇𝙀`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0

let nombre = '𝐆𝐨𝐤𝐮𝐛𝐨𝐭'
let nombre2 = '𝐁𝐲 𝐉𝐮𝐚𝐧𝟏𝟗𝟖𝟔'
 
const s = [
'https://od.lk/s/NTZfMjUwNjcxMjdf/Baile%201.gif',
'https://od.lk/s/NTZfMjUwNjcxMTlf/Baile%202.gif',
'https://od.lk/s/NTZfMjUwNjcxMjBf/Baile%203.gif',
'https://od.lk/s/NTZfMjUwNjcxMjFf/Baile%204.gif',
'https://od.lk/s/NTZfMjUwNjcxMjZf/Baile%205.gif',
'https://od.lk/s/NTZfMjUwNjcxMjJf/Baile%206.gif',
'https://od.lk/s/NTZfMjUwNjcxMjNf/Baile%207.gif',
'https://od.lk/s/NTZfMjUwNjcxMjRf/Baile%208.gif',
'https://od.lk/s/NTZfMjUwNjcxMjVf/Baile%209.gif'  
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
await delay(5 * 5000)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
 
 }
handler.customPrefix =  /baile/i 
handler.command = new RegExp
handler.exp = 50
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
