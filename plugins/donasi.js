import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = 'https://telegra.ph/file/16770368c41f32cf80883.jpg'
    return conn.sendButton(m.chat, '[ π³πππππ πΏππ’ππππ ]\n[ β ] πΆππππ’ = π³πππ πππππππ\n[ β ] πΏππππ = π³πππ πππππππ\n[ β ] π³πππ = 6281260730830\π[ β ] πππ ππππ = π³πππ πππππππ\π[ β ] ππππ = π³πππ πππππππ\n[ β‘οΈ ] 500πΏππππ πΏππ πΆππ πΏππππ π³ππ', donate, img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://chat.whatsapp.com/EhFyoDh3kp8GCXoKuEPHCu",
                mediaType: "VIDEO",
                title: 'π³πππππ π³πππ πΉππ π»πππππ',
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