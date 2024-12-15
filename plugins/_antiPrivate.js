export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
if (m.isBaileys && m.fromMe) return !0;
if (m.isGroup) return !1;
if (!m.message) return !0;
if (m.text.includes('jadibot')) return !0;
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
let chat = global.db.data.chats[m.chat];
let user = global.db.data.users[m.sender];
let bot = global.db.data.settings[this.user.jid] || {};
if (bot.antiPrivate && !isOwner && !isROwner) {
await m.reply(`Hola @${who.replace(/@.+/, '')}, no esta permitido hablar en privado.`, false, { mentions: [who] });
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'banchat');
return !1;
}};