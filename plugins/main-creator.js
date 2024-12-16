let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:YerTX2;;\nFN:By Juan1986 \nORG:YerTX2 🌟\nTITLE:\nitem1.TEL;waid=16285002831:16285002831\nitem1. By Juan1986 \nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:YerTX2  🌟\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'YerTX2.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
