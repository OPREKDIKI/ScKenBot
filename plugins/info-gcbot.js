let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.wm
let str = `
✧─────[ *𝙺𝚎𝚗 𝙱𝚘𝚝 𝙶𝚛𝚘𝚞𝚙 𝙾𝚏𝚏𝚌𝚒𝚊𝚕* ]─────✧
[ ☕︎ ] 𝙶𝚛𝚞𝚋 = https://chat.whatsapp.com/EhFyoDh3kp8GCXoKuEPHCu
✧──────────···──────────✧
`.trim()
conn.sendButton(m.chat, str, `${botol}`, [['𝙺𝚕𝚒𝚔 𝚃𝚘 𝙼𝚎𝚗𝚞','.menu']],m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler 
