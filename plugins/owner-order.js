let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `kalo kamu nemu pesan eror, lapor pake perintah ini\n\ncontoh:\n${usedPrefix + command} selamat siang owner, sy menemukan eror seperti berikut <copy/tag pesan erornya>`
    if (text.length < 1 ) throw `Laporan terlalu pendek, minimal 10 karakter!`
    if (text.length > 1000) throw `Laporan terlalu panjang, maksimal 1000 karakter!`
    let teks = `*${htki} ${command.toUpperCase()} ${htka}*\n📮 : ${text}\n*- @${m.sender.split`@`[0]}*`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply('[ ✔ ] 𝙿𝚎𝚜𝚊𝚗𝚊𝚗 𝙰𝚗𝚍𝚊 𝚃𝚎𝚕𝚊𝚑 𝚃𝚎𝚛𝚔𝚒𝚛𝚒𝚖 𝙺𝚎 𝙿𝚒𝚑𝚊𝚔 𝙱𝚘𝚝\n[ ☘ ] 𝚃𝚞𝚗𝚐𝚐𝚞 𝙲𝚘𝚗𝚏𝚒𝚛𝚖𝚊𝚜𝚒 𝙾𝚠𝚗𝚎𝚛 !')
}
handler.command = /^(order)$/i
export default handler