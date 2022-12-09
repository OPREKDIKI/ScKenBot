import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = 'https://telegra.ph/file/16770368c41f32cf80883.jpg'
    return conn.sendButton(m.chat, '[ 𝙳𝚘𝚗𝚊𝚜𝚒 𝙿𝚊𝚢𝚖𝚎𝚗𝚝 ]\n[ ✘ ] 𝙶𝚘𝚙𝚊𝚢 = 𝙳𝚘𝚗𝚝 𝚂𝚞𝚙𝚙𝚘𝚛𝚝\n[ ✘ ] 𝙿𝚞𝚕𝚜𝚊 = 𝙳𝚘𝚗𝚝 𝚂𝚞𝚙𝚙𝚘𝚛𝚝\n[ ✔ ] 𝙳𝚊𝚗𝚊 = 6281260730830\𝚗[ ✘ ] 𝚂𝚊𝚠𝚎𝚛𝚒𝚊 = 𝙳𝚘𝚗𝚝 𝚂𝚞𝚙𝚙𝚘𝚛𝚝\𝚗[ ✘ ] 𝚀𝚛𝚒𝚜 = 𝙳𝚘𝚗𝚝 𝚂𝚞𝚙𝚙𝚘𝚛𝚝\n[ ⚡︎ ] 500𝙿𝚎𝚛𝚊𝚔 𝙿𝚞𝚗 𝙶𝚊𝚔 𝙿𝚊𝚙𝚊𝚑 𝙳𝚊𝚑', donate, img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://chat.whatsapp.com/EhFyoDh3kp8GCXoKuEPHCu",
                mediaType: "VIDEO",
                title: '𝙳𝚘𝚗𝚊𝚜𝚒 𝙳𝚘𝚗𝚐 𝙹𝚊𝚗 𝙻𝚒𝚊𝚝𝚒𝚗',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler