import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"

let handler  = async (m, { conn }) => {

 let thumb = 'https://telegra.ph/file/16770368c41f32cf80883.jpg'
 
let msg = await generateWAMessageFromContent(m.chat, { locationMessage: {
  degreesLatitude: 0,
  degreesLongitude: 0,
  name: '𝙼𝚢 𝙲𝚘𝚗𝚝𝚊𝚌𝚔 𝙿𝚎𝚛𝚜𝚘𝚗 𝙱𝚘𝚝',
  address: botdate,
  url: nomorowner,
  isLive: true,
  accuracyInMeters: 0,
  speedInMps: 0,
  degreesClockwiseFromMagneticNorth: 2,
  comment: 'tes',
  jpegThumbnail: await( await fetch(thumb)).buffer()
}}, { quoted: fpay })

return conn.relayMessage(m.chat, msg.message, {})
}

handler.help = ['owner']
handler.tags = ['Bot']

handler.command = /^(owner|creator)$/i

export default handler
