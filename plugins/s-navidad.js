import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 *#on stickers* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 𝘼𝙍𝙀 𝘿𝙄𝙎𝘼𝘽𝙇𝙀𝘿 𝙐𝙎𝙀 *#on stickers* 𝙏𝙊 𝙀𝙉𝘼𝘽𝙇𝙀`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0

let nombre = '𝐆𝐨𝐤𝐮𝐛𝐨𝐭'
let nombre2 = '𝐁𝐲 𝐉𝐮𝐚𝐧𝟏𝟗𝟖𝟔'
 
const s = [
'https://od.lk/s/NTZfMjcyNzI0NTJf/Navidad%2001.png',
'https://od.lk/s/NTZfMjcyNzI0NTNf/Navidad%2002.png',
'https://od.lk/s/NTZfMjcyNzI0NTBf/Navidad%2003.png',
'https://od.lk/s/NTZfMjcyNzI0NDdf/Navidad%2004.png',
'https://od.lk/s/NTZfMjcyNzI0NDhf/Navidad%2005.png',
'https://od.lk/s/NTZfMjcyNzI0NTRf/Navidad%2006.png',
'https://od.lk/s/NTZfMjcyNzI0NDlf/Navidad%2007.png',
'https://od.lk/s/NTZfMjcyNzI0NTFf/Navidad%2008.png'  
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
await delay(5 * 5000)
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
}
handler.customPrefix = /navidad|🔔|❄️|☃️|🎁|🎅/i 
handler.command = new RegExp
handler.exp = 50
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))