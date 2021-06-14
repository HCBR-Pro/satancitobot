// das créditos puta

//npm
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const util = require('util')
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

//json file
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const afk = JSON.parse(fs.readFileSync('./database/off.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))

//Config
const { covidindo } = require("./config/covidindo.js")
const { covidworld } = require("./config/covidworld.js")
const { cnn } = require("./config/cnn.js")
const { Gempa } = require("./config/gempa.js");
const { herolist } = require("./config/herolist.js")
const { herodetails } = require("./config/herodetail.js")

//wa connect
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		ChatModification,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
//===========================================================//
prefix = '.'
hit_today = []
blocked = []
banChats = false
offline = false
targetpc = '5521981449242'
owner = '5521981449242'
fake = '☙𝐊𝐚𝐋𝐢↭𝐋𝐢𝐍𝐮𝐗❧'
numbernye = '0'
waktu = '-'
alasan = '-'
//===========================================================//
async function starts() {
	const pato = new WAConnection()
	pato.logger.level = 'warn'
	console.log('>', '[',color('CHECK','green'),']','𝐂𝐡𝐞𝐜𝐚𝐧𝐝𝐨 𝐜𝐫𝐞𝐝𝐞𝐧𝐜𝐢𝐚𝐢𝐬...')
	pato.on('qr', () => {
	console.log(color('[','green'), color('!','red'), color(']','green'), color(' 𝐒𝐜𝐚𝐧𝐞𝐢𝐞 𝐨 𝐜𝐨𝐝𝐢𝐠𝐨 𝐐𝐑 𝐚𝐜𝐢𝐦𝐚!'))
	})

	fs.existsSync('./session.json') && pato.loadAuthInfo('./session.json')
	pato.on('connecting', () => {
	console.log(color('> [ INGFO ]', 'white'), color('Cσиєcтαиdσ...'))
	})
	pato.on('open', () => {
	console.log(color('> [ INGFO ]', 'white'), color('Cσиєcтαdσ'))
	})
		await pato.connect({timeoutMs: 30*1000})
  fs.writeFileSync('./session.json', JSON.stringify(pato.base64EncodedAuthInfo(), null, '\t'))
//Banned Call
pato.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        pato.sendMessage(callerId, "𝐒𝐢𝐬𝐭𝐞𝐦𝐚 𝐝𝐞 𝐛𝐥𝐨𝐪𝐮𝐞𝐢𝐨 𝐚𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐜𝐨, 𝐧𝐚𝐨 𝐥𝐢𝐠𝐮𝐞, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫!", MessageType.text)
        await sleep(4000)
        await pato.blockUser(callerId, "add")
})
//Welkom
	pato.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
            num = anu.participants[0]
            const mdata = await pato.groupMetadata(anu.jid)
            try {
                var pp_user = await pato.getProfilePicture(num)
            } catch (e) {
                var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (anu.action == 'add') {
                ini_user = pato.contacts[num]
                ini_img = await getBuffer(`http://api.lolhuman.xyz/api/welcomeimage?apikey=${LolHuman}&img=${pp_user}&text=${ini_user.notify}`)
                group_info = await pato.groupMetadata(anu.jid)
                welkam = `𝐒𝐚𝐥𝐯𝐞 ${ini_user.notify}\n◪ 𝐒𝐞𝐣𝐚 𝐛𝐞𝐦 𝐯𝐢𝐧𝐝𝐨\n├─ ${mdata.subject}\n\n└─ ❏ Numero: ${num.replace('@s.whatsapp.net', '')}\n 𝐋𝐞𝐢𝐚 𝐚𝐬 𝐫𝐞𝐠𝐫𝐚𝐬 𝐬𝐞 𝐜𝐨𝐦𝐩𝐨𝐫𝐭𝐞 𝐞 𝐧𝐚𝐨 𝐟𝐚ç𝐚 𝐬𝐩𝐚𝐦 𝐜𝐨𝐦 𝐨 𝐛𝐨𝐭!\n${ini_user.notify}`
                pato.sendMessage(anu.jid, ini_img, MessageType.image, { caption: welkam })
            }
            if (anu.action == 'remove') {
                ini_user = pato.contacts[num]
                ini_img = await getBuffer(`http://api.lolhuman.xyz/api/welcomeimage?apikey=${LolHuman}&img=${pp_user}&text=${ini_user.notify}`)
                out = `◪ 𝐓𝐜𝐡𝐚𝐮 ${ini_user.notify}\n◪ 𝐒𝐚𝐢𝐮 𝐩𝐨𝐫𝐪𝐮𝐞 𝐪𝐮𝐢𝐬 \n${mdata.subject}\n│\n└─ ❏ Numero: ${num.replace('@s.whatsapp.net', '')}\n𝐒𝐞 𝐬𝐚𝐢𝐮 𝐧𝐚 𝐯𝐚𝐜𝐢𝐥𝐚ç𝐚𝐨 𝐞𝐬𝐩𝐞𝐫𝐨 𝐪𝐮𝐞 𝐧𝐚𝐨 𝐯𝐨𝐥𝐭𝐞!`
                pato.sendMessage(anu.jid, ini_img, MessageType.image, { caption: out })
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})
	// Chat Update
pato.on('chat-update', async (mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()
		hit_today.push(command)
        const arg = budy.slice(command.length + 1, budy.length)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		//const meNumber = pato.user.jid.split("@")[0]
		const botNumber = pato.user.jid
		const ownerNumber = ['5521981449242@s.whatsapp.net']        //Dono do BoT
//SETTING WeA
		const isGroup = from.endsWith('@g.us')
		const sender = isGroup ? mek.participant : mek.key.remoteJid
		const senderme = mek.participant
		const isOwner = ownerNumber.includes(sender)
		const isMe = botNumber.includes(senderme)
//
		const totalchat = await pato.chats.all()
		const groupMetadata = isGroup ? await pato.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? pato.user.jid : pato.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? pato.user.name : conts.notify || conts.vname || conts.name || '-'
       
        //MESS
        
		mess = {
			wait: '𝐒𝐞𝐣𝐚 𝐩𝐚𝐜𝐢𝐞𝐧𝐭𝐞, 𝐭𝐮𝐝𝐨 𝐧𝐨 𝐬𝐞𝐮 𝐭𝐞𝐦𝐩𝐨!',
			success: '𝐒𝐮𝐜𝐞𝐬𝐬𝐨!',
			wrongFormat: '𝐅𝐨𝐫𝐦𝐚𝐭𝐨 𝐞𝐫𝐫𝐚𝐝𝐨, 𝐭𝐞𝐧𝐭𝐞 𝐧𝐨𝐯𝐚𝐦𝐞𝐧𝐭𝐞!',
			error: {
				stick: '𝐍𝐚𝐨 𝐜𝐨𝐧𝐬𝐞𝐠𝐮𝐢 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐞𝐫, 𝐝𝐞𝐬𝐜𝐮𝐥𝐩𝐞!',
				Iv: '𝐄 𝐞𝐬𝐬𝐞 𝐥𝐢𝐧𝐤 𝐟𝐮𝐧𝐜𝐢𝐨𝐧𝐚?'
			},
			only: {
				group: '𝐀𝐩𝐞𝐧𝐚𝐬 𝐞𝐦 𝐠𝐫𝐮𝐩𝐨𝐬!',
				admin: '𝐀𝐩𝐞𝐧𝐚𝐬 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬!',
				Badmin: '𝐍𝐚𝐨 𝐬𝐨𝐮 𝐮𝐦 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫!'
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            pato.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            pato.sendMessage(hehe, teks, text, {sendEphemeral: true})
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? pato.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : pato.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        //FAKEH
const fakekontak = (teks) => {
pato.sendMessage(from, teks, MessageType.text, {
quoted: {
key: {
fromMe: false,
 participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {})
 },
message: {
 'contactMessage': {
 'displayName': `𝐒𝐚𝐥𝐯𝐞 ${pushname}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanWaktu},;;;\nFN:${ucapanWaktu},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
}
}
                }
            })
        }


			

        const fakethumb = (teks, yes) => {
            pato.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakestatus = (teks) => {
            pato.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `ㅤ𝐒𝐚𝐥𝐯𝐞➛ㅤ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    },
                    contextInfo: {
                      "forwardingScore": 999, "isForwarded": true
                    }
                }
            })
        }
        const fakegroup = (teks) => {
            pato.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `ㅤ𝐒𝐚𝐥𝐯𝐞↠ㅤ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
 const faketoko = (teks) => {
 pato.sendMessage(from, teks, text, {
quoted: {
 key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) 
}, message: {
'productMessage': {
'product': {
 'productImage':{
'mimetype': 'image/jpeg',
 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
},
'title': `ㅤ𝐒𝐚𝐥𝐯𝐞⇝ㅤ${pushname}`,
'productImageCount': 9999
},
'businessOwnerJid': `0@s.whatsapp.net`
}
}
                }
            })
        }
const faketokoforwaded = (teks) => {
	anu = {
	  key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`)
					},
					"title": `ㅤ𝐒𝐚𝐥𝐯𝐞 ${pushname}, ${ucapanWaktu}`,
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
	pato.sendMessage(from, teks, text, {
	  quoted: anu,
	  contextInfo:{
	    "forwardingScore": 999, "isForwarded": true
	  }
	})
}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        pato.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    pato.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            pato.sendMessage(mek.key.remoteJid,`@${owner} 𝐀𝐭𝐮𝐚𝐥𝐦𝐞𝐧𝐭𝐞 𝐨𝐟𝐟𝐥𝐢𝐧𝐞!\n\n*𝐑𝐚𝐳𝐚𝐨 :* ${alasan}\n* 𝐃𝐞𝐬𝐝𝐞 𝐚 :* ${heheh.hours} 𝐇𝐨𝐫𝐚, ${heheh.minutes} 𝐌𝐢𝐧𝐮𝐭𝐨, ${heheh.seconds} 𝐒𝐞𝐠𝐮𝐧𝐝𝐨𝐬 𝐚𝐭𝐫𝐚𝐬\n\n𝐄𝐧𝐭𝐫𝐞 𝐞𝐦 𝐜𝐨𝐧𝐭𝐚𝐭𝐨 𝐧𝐨𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐦𝐚𝐢𝐬 𝐭𝐚𝐫𝐝𝐞`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        pato.sendMessage(mek.key.remoteJid,`@${owner} 𝐀𝐭𝐮𝐚𝐥𝐦𝐞𝐧𝐭𝐞 𝐨𝐟𝐟𝐥𝐢𝐧𝐞!\n\n *𝐑𝐚𝐳𝐚𝐨 :* ${alasan}\n * 𝐃𝐞𝐬𝐝𝐞 𝐚 :* ${heheh.hours} 𝐇𝐨𝐫𝐚, ${heheh.minutes} 𝐌𝐢𝐧𝐮𝐭𝐨, ${heheh.seconds} 𝐒𝐞𝐠𝐮𝐧𝐝𝐨𝐬 𝐚𝐭𝐫𝐚𝐬\n\n𝐄𝐧𝐭𝐫𝐞 𝐞𝐦 𝐜𝐨𝐧𝐭𝐚𝐭𝐨 𝐧𝐨𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐦𝐚𝐢𝐬 𝐭𝐚𝐫𝐝𝐞`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    //> Level <
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const jadiUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            user.push(obj)
            fs.writeFileSync('./database/user.json', JSON.stringify(user))
        }
        const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        }
			//[-- function level bar --]
			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
			/*[-- function rank --]*/
			const levelRole = getLevelingLevel(sender)
   	     var role = 'Noob'
   	     if (levelRole <= 3) {
   	         role = 'Aun noob'
   	     } else if (levelRole <= 5) {
   	         role = 'Soldado'
   	     } else if (levelRole <= 7) {
   	         role = 'Asalto'
   	     } else if (levelRole <= 8) {
   	         role = 'Sargento'
   	     } else if (levelRole <= 9) {
   	         role = 'Sargento II'
   	     } else if (levelRole <= 10) {
   	         role = 'Sargento III'
   	     } else if (levelRole <= 11) {
   	         role = 'Sargento IV'
   	     } else if (levelRole <= 12) {
   	         role = 'Teniente'
   	     } else if (levelRole <= 13) {
   	         role = 'Teniente II'
   	     } else if (levelRole <= 14) {
   	         role = 'Sgt 1st class III'
   	     } else if (levelRole <= 14) {
   	         role = 'Ggt 1st class IV'
   	     } else if (levelRole <= 15) {
   	         role = 'Master sgt I'
   	     } else if (levelRole <= 16) {
   	         role = 'Master sgt II'
   	     } else if (levelRole <= 17) {
   	         role = 'Master sgt III'
   	     } else if (levelRole <= 18) {
   	         role = 'Master sgt IV'
   	     } else if (levelRole <= 19) {
   	         role = 'Master sgt V'
   	     } else if (levelRole <= 20) {
   	         role = '2nd Lt I'
   	     } else if (levelRole <= 21) {
   	         role = '2nd Lt II'
   	     } else if (levelRole <= 22) {
   	         role = '2nd Lt III'
   	     } else if (levelRole <= 23) {
   	         role = '2nd Lt IV'
   	     }
   //Function Level Up
const levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	fakekontak(`\nㅤㅤㅤㅤ↶𝐹𝐸𝐿𝐼𝒞𝐼𝒟𝒜𝒟𝐸𝒮↷ \nㅤㅤ𝒩𝑜𝑚𝑒 : ${pushname}\nㅤㅤ𝒩𝑢𝑚𝑒𝑟𝑜 : wa.me/${sender.split("@")[0]}\nㅤㅤ𝒳𝒫 : ${getLevelingXp(sender)}\nㅤㅤ𝑅𝑜𝑙 : ${role}\nㅤㅤ𝒩𝑖𝑣𝑒𝑙 : ${getLevel} ⊱ ${getLevelingLevel(sender)}`)
}
//Function Level
            if (isGroup) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await fakestatus(levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
//=====================//      
         // Ucapan Waktu
        const hour_now = moment().format('HH')
        var ucapanWaktu = 'wenas👋'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'wenas👋'
        } else if (hour_now >= '10' && hour_now <= '14') {
          ucapanWaktu = 'wenas👋'
        } else if (hour_now >= '14' && hour_now <= '17') {
          ucapanWaktu = 'wenas👋'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'wenas👋'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'wenas🌚'
        } else {
          ucapanWaktu = 'wenas🌚'
        }
//========================================================================================================================//
		colors = ['blue']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;37m>', '[ \x1b[1;36mEXECC\x1b[1;37m ]', time, color(command), 'from', color(sender.split('@')[0]))
     	if (isCmd && isGroup) console.log('\x1b[1;37m>', '[ \x1b[1;36mEXECC\x1b[1;37m ]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName))
//selfmode
		if (!mek.key.fromMe && banChats === true) return
//botna
switch (command) {
  case prefix+ 'menu':
  case prefix+ 'help':
  case prefix+ '?':
    let i = []
    let giid = []
    for (mem of totalchat){
      i.push(mem.jid)
    }
    for (id of i){
      if (id && id.includes('g.us')){
        giid.push(id)
      }
    }
    let timestampi = speed();
    let sepid = speed() - timestampi
    var { device_manufacturer, device_model, mcc, mnc, os_version, os_build_number, wa_version  } = pato.user.phone
    anu = process.uptime()
    runtem = `${kyun(anu)}`
//
    var menu = `  
                ☙𝐊𝐚𝐋𝐢↭𝐋𝐢𝐍𝐮𝐗❧
ㅤㅤㅤㅤㅤㅤ   ↶»𝘉𝘰𝘛⇝☠⇜𝘏𝘊𝘉𝘙«↷

╔═════ 𝔻𝕚𝕤𝕡𝕠𝕤𝕚𝕥𝕚𝕧𝕠 
║ㅤ➛Hits de hoje : ${hit_today.length}
║ㅤ➛Celular : ${device_manufacturer}
║ㅤ➛Modelo : ${device_model}
║ㅤ➛RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
║ㅤ➛Android : ${os_version}
║ㅤ➛Versão do WhatsApp : ${wa_version}
║ㅤ➛Grupos : ${giid.length}
║ㅤ➛Chats : ${totalchat.length - giid.length}
║ㅤ➛Total de chat : ${totalchat.length}
║ㅤ➛Velocidade : ${sepid.toFixed(4)}ㅤMilissegundos
║ㅤ➛Meu tempo de atividade: ${runtem}
║ㅤ➛Prefix : 「 ${prefix} 」
╚═══════.✵.═══════╝

╭────➛𝕄𝕖𝕟𝕦 
┃
├⇝ㅤ${prefix}off
├⇝ㅤ${prefix}on
├⇝ㅤ${prefix}status
├⇝ㅤ${prefix}dono
├⇝ㅤ${prefix}self
├⇝ㅤ${prefix}public
├⇝ㅤ${prefix}peson
├⇝ㅤ${prefix}pesoff
├⇝ㅤ${prefix}spam
├⇝ㅤ${prefix}mute
├⇝ㅤ${prefix}unmute
├⇝ㅤ${prefix}delete
├⇝ㅤ${prefix}setfake
├⇝ㅤ${prefix}welcome 1/0
├⇝ㅤ${prefix}setfakeimg
├⇝ㅤ${prefix}setprefix
├⇝ㅤ${prefix}setthumb
├⇝ㅤ${prefix}settarget
├⇝ㅤ${prefix}covidindo
├⇝ㅤ${prefix}covidworld
├⇝ㅤ${prefix}cnn
├⇝ㅤ${prefix}infogempa
├⇝ㅤ${prefix}get [ᵍᵒᵒᵍˡᵉ.ᶜᵒᵐ]
├⇝ㅤ${prefix}revip [ 8.8.8.8 ]
├⇝ㅤ${prefix}avatar
├⇝ㅤ${prefix}loli
├⇝ㅤ${prefix}waifu
├⇝ㅤ${prefix}husbu
├⇝ㅤ${prefix}image [ᵃˡᵉᵃᵗᵒʳⁱᵃ]
├⇝ㅤ${prefix}pinterest [ᵃˡᵉᵃᵗᵒʳⁱᵃ]
├⇝ㅤ${prefix}anime [ᵃˡᵉᵃᵗᵒʳⁱᵃ]
├⇝ㅤ${prefix}wallpaperanime
├⇝ㅤ${prefix}nsfwavatar 
├⇝ㅤ${prefix}nekopoi  
├⇝ㅤ${prefix}hentai 
├⇝ㅤ${prefix}sticker [ⁱᵐᵃᵍᵉ>ᵃᵈᵉˢⁱᵛᵒ]
├⇝ㅤ${prefix}swm [ⁿᵒᵐᵉ ᵈᵒ ᵖᵃᶜᵒᵗᵉ]
├⇝ㅤ${prefix}take [ⁿᵒᵐᵉ ᵈᵒ ᵖᵃᶜᵒᵗᵉ]
├⇝ㅤ${prefix}fdeface
├⇝ㅤ${prefix}emoji
├⇝ㅤ${prefix}attp
├⇝ㅤ${prefix}toimg [ᵃᵈᵉˢⁱᵛᵒ>ⁱᵐᵃᵍᵉ]
├⇝ㅤ${prefix}tovid [ᵃᵈᵉˢⁱᵛᵒ>ᵛⁱᵈᵉᵒ]
├⇝ㅤ${prefix}tomp3 [ᵃᵈᵉˢⁱᵛᵒ>ᵐᵖ3]
├⇝ㅤ${prefix}slow [ᵛⁱᵈᵉᵒ>ˡᵉⁿᵗᵒ]
├⇝ㅤ${prefix}fast [ᵛⁱᵈᵉᵒ>ʳᵃᵖⁱᵈᵒ]
├⇝ㅤ${prefix}reverse [ᵛⁱᵈᵉᵒ>ʳᵉᵛᵉʳˢᵒ]
├⇝ㅤ${prefix}tourl [ⁱᵐᵃᵍᵉ>ᵘʳˡ]
├⇝ㅤ${prefix}upswteks
├⇝ㅤ${prefix}upswimage
├⇝ㅤ${prefix}upswvideo
├⇝ㅤ${prefix}herolist
├⇝ㅤ${prefix}herodetail [ᵇᵃʳᵃᵗᵒ]
├⇝ㅤ${prefix}igstalk [ⁿᵒᵐᵉᵈᵒᵘˢᵘᵃʳⁱᵒ]
├⇝ㅤ${prefix}ig [ˡⁱⁿᵏ] 
├⇝ㅤ${prefix}play [ⁱⁿˢᵉʳⁱʳ] 
├⇝ㅤ${prefix}video [ⁱⁿˢᵉʳⁱʳ] 
├⇝ㅤ${prefix}ytmp3 [ˡⁱⁿᵏ] 
├⇝ㅤ${prefix}ytmp4 [ˡⁱⁿᵏ] 
├⇝ㅤ${prefix}ytsearch [ⁱⁿˢᵉʳⁱʳ] 
├⇝ㅤ${prefix}twitter [ˡⁱⁿᵏ] 
├⇝ㅤ${prefix}tiktok [ˡⁱⁿᵏ] 
├⇝ㅤ${prefix}tiktokaudio [ˡⁱⁿᵏ] 
├⇝ㅤ${prefix}fb [ˡⁱⁿᵏ] 
├⇝ㅤ${prefix}tiktokaudio [ⁱⁿˢᵉʳⁱʳ] 
├⇝ㅤ${prefix}brainly [ⁱⁿˢᵉʳⁱʳ] 
├⇝ㅤ${prefix}add [5521xxxxx-xxxx]
├⇝ㅤ${prefix}kick [ᵐᵃʳᶜᵃʳ]
├⇝ㅤ${prefix}promote [ᵐᵃʳᶜᵃʳ ᵐᵉᵐᵇʳᵒ]
├⇝ㅤ${prefix}demote [ᵐᵃʳᶜᵃʳ ᵃᵈᵐⁱⁿ]
├⇝ㅤ${prefix}kontak [628xxᵉᵘ]
├⇝ㅤ${prefix}hidetag [ˢᵘᵃ ᵐᵉⁿˢᵃᵍᵉᵐ]
├⇝ㅤ${prefix}sticktag [ᵃᵈᵉˢⁱᵛᵒ>ᵐᵃʳᶜᵃʳ]
├⇝ㅤ${prefix}giftag [ᵍⁱᶠ>ᵐᵃʳᶜᵃʳ]
├⇝ㅤ${prefix}doctag [ᵈᵒᶜᵘᵐᵉⁿᵗᵒ>ᵐᵃʳᶜᵃʳ]
├⇝ㅤ${prefix}kontag [687xxᵉᵘ>ᵐᵃʳᶜᵃʳ]
├⇝ㅤ${prefix}totag [ᵐⁱᵈⁱᵃ>ᵐᵃʳᶜᵃʳ]
├⇝ㅤ${prefix}ping
├⇝ㅤ${prefix}term [ᶜᵒᵈⁱᵍᵒ]
├⇝ㅤ${prefix}runtime
├⇝ㅤ${prefix}speed
┃
╰─ ☙𝐊𝐚𝐋𝐢↭𝐋𝐢𝐍𝐮𝐗❧─
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
↶»𝘉𝘰𝘛⇝☠⇜𝘏𝘊𝘉𝘙«↷          

`
        	faketokoforwaded(menu)
           	break
    case prefix+ 'on':
            if (!mek.key.fromMe) return 
            offline = false
            fakestatus(' 𝐎𝐍𝐋𝐈𝐍𝐄 ')
            break       
    case prefix+ 'off':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            fakestatus(' 𝐃𝐞𝐬𝐥𝐢𝐠𝐚𝐝𝐨 ')
            break
    case prefix+ 'status':
            fakestatus(` 𝐒𝐓𝐀𝐓𝐔𝐒 \n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
	case prefix+ 'self':
          	if (!mek.key.fromMe) return fakestatus(' 𝐕𝐨𝐜𝐞 𝐧𝐚𝐨 𝐞 𝐦𝐞𝐮 𝐝𝐨𝐧𝐨 !')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 𝐏𝐫𝐢𝐯𝐚𝐝𝐨 」`)
          	break
 //Set Owner For gc
    case prefix+ 'public':
          	if (!mek.key.fromMe) return fakestatus(' 𝐕𝐨𝐜𝐞 𝐧𝐚𝐨 𝐞 𝐦𝐞𝐮 𝐝𝐨𝐧𝐨 !')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 𝑃𝑈𝐵𝐿𝐼𝐶𝑂 」`)
          	break
					case prefix+ 'peson':
					  pato.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL)
					  break
					  case prefix+ 'pesoff':
					    pato.toggleDisappearingMessages(from, 0)
					    break
            case prefix+ 'spam':
                if (!isMe) return reply(' 𝐕𝐨𝐜𝐞 𝐧𝐚𝐨 𝐞 𝐦𝐞𝐮 𝐝𝐨𝐧𝐨 !')
                if (!arg) return reply(` 𝐔𝐬𝐚𝐫 ${prefix}𝐒𝐩𝐚𝐦 𝐭𝐞𝐱𝐭𝐨|𝐪𝐮𝐚𝐧𝐭𝐢𝐝𝐚𝐝𝐞 𝐝𝐞 𝐬𝐩𝐚𝐦`)
                argz = arg.split("|")
                if (!argz) return reply(` 𝐔𝐬𝐚𝐫 ${prefix}𝐒𝐩𝐚𝐦 𝐭𝐞𝐱𝐭𝐨|𝐪𝐮𝐚𝐧𝐭𝐢𝐝𝐚𝐝𝐞 𝐝𝐞 𝐬𝐩𝐚𝐦`)
                if (isNaN(argz[1])) return reply(` 𝐝𝐞𝐯𝐞 𝐬𝐞𝐫 𝐮𝐦 𝐧𝐮𝐦𝐞𝐫𝐨𝐬 `)
                for (let i = 0; i < argz[1]; i++){
                pato.sendMessage(from, argz[0], MessageType.text, {sendEphemeral: true})
                }
	        break
             case prefix+ 'mute':
                if (!isMe) return reply(' 𝐕𝐨𝐜𝐞 𝐧𝐚𝐨 𝐞 𝐦𝐞𝐮 𝐝𝐨𝐧𝐨 !')
                pato.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply(' 𝐌𝐮𝐭𝐚𝐧𝐝𝐨 𝐜𝐡𝐚𝐭 ')
                console.log(' 𝐒𝐮𝐜𝐞𝐬𝐬𝐨 𝐜𝐡𝐚𝐭 𝐦𝐮𝐭𝐚𝐝𝐨  = ' + from)
                break
            case prefix+ 'unmute':
                if (!isMe) return reply(' 𝐕𝐨𝐜𝐞 𝐧𝐚𝐨 𝐞 𝐦𝐞𝐮 𝐝𝐨𝐧𝐨 !')
                pato.modifyChat(from, ChatModification.unmute)
                reply('𝐄𝐮 𝐣𝐚 𝐩𝐨𝐬𝐬𝐨 𝐯𝐞𝐫 𝐨 𝐝𝐞𝐥𝐞𝐬 𝐜𝐨𝐧𝐯𝐞𝐫𝐬𝐚𝐬 ')
                console.log(' 𝐒𝐮𝐜𝐞𝐬𝐬𝐨 𝐧𝐨 𝐛𝐚𝐭𝐞-𝐩𝐚𝐩𝐨 𝐜𝐨𝐦 𝐚𝐮𝐝𝐢𝐨  = ' + from)
                break
            case prefix+ 'delete':
                if (!isMe) return reply(' 𝐕𝐨𝐜𝐞 𝐧𝐚𝐨 𝐞 𝐦𝐞𝐮 𝐝𝐨𝐧𝐨 !')
                reply(' 𝐁𝐚𝐭𝐞-𝐩𝐚𝐩𝐨𝐬 𝐞𝐱𝐜𝐥𝐮𝐢𝐝𝐨𝐬 ')
                console.log('𝐒𝐮𝐜𝐞𝐬𝐬𝐨 𝐞𝐱𝐜𝐥𝐮𝐢𝐫 𝐛𝐚𝐭𝐞-𝐩𝐚𝐩𝐨 = ' + from)
                pato.modifyChat(from, ChatModification.delete)
                break
	case prefix+ 'setreply':
	case prefix+ 'setfake':
	  if (isMe) return('𝐏𝐫𝐢𝐦𝐞𝐢𝐫𝐚𝐦𝐞𝐧𝐭𝐞 𝐢𝐫𝐦𝐚𝐨, 𝐪𝐮𝐞𝐦 𝐞 𝐯𝐨𝐜𝐞 ?')
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(` 𝐒𝐮𝐜𝐞𝐬𝐬𝐨 𝐧𝐚 𝐦𝐮𝐝𝐚𝐧ç𝐚 𝐝𝐞 𝐜𝐨𝐧𝐯𝐞𝐫𝐬𝐚 𝐟𝐚𝐥𝐬𝐚 : ${q}`)
			break
	case prefix+ 'setfakeimg':
	  if (isMe) return(' 𝐕𝐨𝐜𝐞 𝐧𝐚𝐨 𝐞 𝐦𝐞𝐮 𝐝𝐨𝐧𝐨 !')
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await pato.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus(' 𝐅𝐞𝐢𝐭𝐨 𝐦𝐞𝐮 𝐦𝐞𝐬𝐭𝐫𝐞 ')
        	} else {
            reply(` 𝐄𝐧𝐯𝐢𝐞 𝐮𝐦𝐚 𝐟𝐨𝐭𝐨 𝐜𝐨𝐦 𝐮𝐦𝐚 𝐥𝐞𝐠𝐞𝐧𝐝𝐚 ${prefix}sethumb`)
          	}
			break	
	case prefix+ 'setprefix':
	  if (isMe) return(' 𝐕𝐨𝐜𝐞 𝐧𝐚𝐨 𝐞 𝐦𝐞𝐮 𝐝𝐨𝐧𝐨 !')
			prefix = q
			fakegroup(` 𝐒𝐮𝐜𝐞𝐬𝐬𝐨 𝐧𝐚 𝐚𝐥𝐭𝐞𝐫𝐚ç𝐚𝐨 𝐝𝐨 𝐩𝐫𝐞𝐟𝐢𝐱𝐨 : ${q}`)
			break
	case prefix+ 'setthumb':
		  if (isMe) return(' 𝐕𝐨𝐜𝐞 𝐧𝐚𝐨 𝐞 𝐦𝐞𝐮 𝐝𝐨𝐧𝐨 !')
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await pato.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus(' 𝐅𝐞𝐢𝐭𝐨 𝐦𝐞𝐮 𝐦𝐞𝐬𝐭𝐫𝐞 ')
        	} else {
            reply(` 𝐄𝐧𝐯𝐢𝐞 𝐮𝐦𝐚 𝐟𝐨𝐭𝐨 𝐜𝐨𝐦 𝐮𝐦𝐚 𝐥𝐞𝐠𝐞𝐧𝐝𝐚  ${prefix}sethumb`)
          	}
			break	
    case prefix+ 'settarget':
	  if (isMe) return(' 𝐕𝐨𝐜𝐞 𝐧𝐚𝐨 𝐞 𝐦𝐞𝐮 𝐝𝐨𝐧𝐨 !')
            if(!q) return reply(`${prefix}settarget 503xxxxx`)
            targetpc = args[0]
            fakegroup(` 𝐒𝐮𝐜𝐞𝐬𝐬𝐨 𝐦𝐮𝐝𝐚𝐧𝐝𝐨 𝐨 𝐚𝐥𝐯𝐨 𝐝𝐚 𝐜𝐚𝐥𝐮𝐧𝐢𝐚: ${targetpc}`)
            break
case prefix+ 'term':
if (!isMe) return reply(' 𝐀𝐩𝐞𝐧𝐚𝐬 𝐦𝐞𝐮 𝐌𝐞𝐬𝐭𝐫𝐞')
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`pato@self:~$ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
//INFORMATION
    case prefix+ 'covidindo':
                ci = await covidindo()
                var { kasus, kematian, sembuh } = ci[0]
                reply(` 𝐂𝐚𝐬𝐨 : ${kasus}\n\n 𝐌𝐨𝐫𝐭𝐨 : ${kematian}\n\n 𝐑𝐞𝐜𝐮𝐩𝐞𝐫𝐚𝐝𝐨𝐬 : ${sembuh}`)
                break
    case prefix+ 'covidworld':
                 cw= await covidworld()
                var { kasus, kematian, sembuh } = cw[0]
                reply(` 𝐂𝐚𝐬𝐨 : ${kasus}\n\n 𝐌𝐨𝐫𝐭𝐨 : ${kematian}\n\n 𝐑𝐞𝐜𝐮𝐩𝐞𝐫𝐚𝐝𝐨𝐬 : ${sembuh}`)
                break
    case prefix+ 'cnn':
                var result = await cnn()
                cn = '𝐂𝐍𝐍 𝐍𝐄𝐖𝐒'
                for (let i = 0; i < result.length; i++) {
                  cn += `\n\n 𝐓𝐢𝐭𝐮𝐥𝐨 : ${result[i].judul}\n 𝐋𝐢𝐧𝐤 : ${result[i].link}\n 𝐈𝐦𝐚𝐠𝐞𝐦 : ${result[i].thumb}`
                }
                buff = await getBuffer(result[0].thumb)
                pato.sendMessage(from, buff, MessageType.image, {caption: cn})
                break
    case prefix+ 'infogempa':
                tres = await Gempa()
                var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
                console.log(Map)
                captt = ` 𝐓𝐞𝐦𝐩𝐨 : ${Waktu}\n 𝐋𝐚𝐭𝐢𝐭𝐮𝐝𝐞 : ${Lintang}\n 𝐋𝐨𝐧𝐠𝐢𝐭𝐮𝐝𝐞 : ${Bujur}\n 𝐑𝐞𝐠𝐢𝐚𝐨 : ${Wilayah}`
                thumbbb = await getBuffer(Map)
                pato.sendMessage(from, thumbbb, MessageType.image, {caption: `${captt}`})
                break
//tools
     case prefix+ 'get':
      if(!q) return reply('link :3?')
			.then(res => res.json())
			qweryna = args.join(' ')
			eses = await axios.get(`https://shot.screenshotapi.net/screenshot?token=D2TDY3F-G5YMM94-K9JEQT8-FYBDQBB&url=${qweryna}&full_page=true&fresh=true&output=json&file_type=png&wait_for_event=load`)
			buffqw = await getBuffer(eses.data.screenshot)
			pato.sendMessage(from, buffqw, image, {quoted: mek})
			.catch(err => {
				return(' 𝐑𝐞𝐩𝐞𝐭𝐢𝐧𝐝𝐨 𝐬𝐞𝐧𝐡𝐨𝐫, 𝐡𝐚 𝐮𝐦 𝐞𝐫𝐫𝐨...')
			})
			break
    case prefix+ 'revip':
			if (args.length < 1) return reply(' 𝐎𝐧𝐝𝐞 𝐞𝐬𝐭𝐚 𝐨 𝐝𝐨𝐦𝐢𝐧𝐢𝐨 / 𝐢𝐩?')
			var qwery = args.join(' ')
			var repip = await fetchJson(`https://sonar.omnisint.io/reverse/${qwery}`)
			pato.sendMessage(from, `${repip}`, text)
      .catch((error) => {
            reply(' 𝐃𝐨𝐦𝐢𝐧𝐢𝐨 / 𝐢𝐩 𝐢𝐧𝐯𝐚𝐥𝐢𝐝𝐨!'); 
            })
			break
//WIBU
case prefix+ 'avatar':
			anu = await axios.get('https://nekos.life/api/v2/img/avatar')
				avatars = await getBuffer(anu.data.url)
				pato.sendMessage(from, avatars, image, {quoted: mek})
			break
		case prefix+ 'loli':
		  anu = await axios.get('https://nekos.life/api/v2/img/neko')
				loliz = await getBuffer(anu.data.url)
				pato.sendMessage(from, loliz, image, {quoted: mek})
			break
		case prefix+ 'waifu':
			waifud = await axios.get('https://nekos.life/api/v2/img/waifu')
			nyed = await getBuffer(waifud.data.url)
			pato.sendMessage(from, nyed, image, { caption: ' 𝐍𝐚𝐨 𝐬𝐞𝐢 𝐪𝐮𝐚𝐥 𝐞 𝐚 𝐥𝐞𝐠𝐞𝐧𝐝𝐚 ', quoted: mek })
			.catch(err => {
				return(' 𝐒𝐢𝐧𝐭𝐨 𝐦𝐮𝐢𝐭𝐨!')
			})
			break
	case prefix+ 'husbu':
			husbud = await fetchJson(`https://api.fdci.se/rep.php?gambar=husbu`)
			sasu = JSON.parse(JSON.stringify(husbud));
			ke =  sasu[Math.floor(Math.random() * sasu.length)];
			nye = await getBuffer(ke)
			pato.sendMessage(from, nye, image, { caption: ' 𝐍𝐚𝐨 𝐬𝐞𝐢 𝐪𝐮𝐚𝐥 𝐞 𝐚 𝐥𝐞𝐠𝐞𝐧𝐝𝐚 !', quoted: mek })
			.catch(err => {
				return(' 𝐒𝐢𝐧𝐭𝐨 𝐦𝐮𝐢𝐭𝐨!')
			})
			break
//IMAGE
case prefix+ 'image':
            if (args.length < 1) return reply(' 𝐈𝐧𝐠𝐫𝐞𝐬𝐬𝐞 𝐨 𝐭𝐞𝐱𝐭𝐨!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            pato.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
case prefix+ 'pinterest':
			goblog = args.join(" ")
			anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=${goblog}`)
			sasu = JSON.parse(JSON.stringify(anu));
			ke =  sasu[Math.floor(Math.random() * sasu.length)];
			nye = await getBuffer(ke)
			pato.sendMessage(from, nye, image, { caption: ' ☙𝐊𝐚𝐋𝐢↭𝐋𝐢𝐍𝐮𝐗❧ ', quoted: mek })
			.catch(err => {
				return(' 𝐓𝐞𝐧𝐭𝐞 𝐝𝐞 𝐧𝐨𝐯𝐨! 𝐎 𝐪𝐮𝐞 𝐯𝐨𝐜𝐞 𝐞𝐬𝐭𝐚 𝐛𝐮𝐬𝐜𝐚𝐧𝐝𝐨?')
			})
			break
    case prefix+ 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            pato.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
	case prefix+ 'wallpaperanime':
			wanime = await axios.get('https://nekos.life/api/v2/img/wallpaper')
			bufwanime = await getBuffer(wanime.data.url)
			pato.sendMessage(from, bufwanime, image, { quoted: mek })
			.catch(err => {
			return(' 𝐀𝐧𝐮𝐧𝐜𝐢𝐨 𝐜𝐨𝐦 𝐞𝐫𝐫𝐨𝐬, 𝐭𝐞𝐧𝐭𝐞 𝐧𝐨𝐯𝐚𝐦𝐞𝐧𝐭𝐞...')
			})
			break
//HARAM FEATURE
case prefix+ 'nsfwavatar':
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_avatar')
				nsavatar = await getBuffer(anu.data.url)
				pato.sendMessage(from, nsavatar, image, {quoted: mek})
			.catch(err => {
			return('Error 7-7.')
			})	
			break
case prefix+ 'nekopoi':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'pussy':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pussy')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'pussyimage':
  pusiimg = await axios.get('https://nekos.life/api/v2/img/pussy_jpg')
			bufpusy = await getBuffer(pusiimg.data.url)
				pato.sendMessage(from, bufpusy, MessageType.image, {quoted: mek})
			.catch(err => {
			return('Error 7-7.')
			})
			break
case prefix+ 'oppai':
			opai = await axios.get('https://nekos.life/api/v2/img/tits')
			opaiz = await getBuffer(opai.data.url)
			pato.sendMessage(from, opaiz, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7.')
			})
			break
case prefix+ 'feetg':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feetg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'bj':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/bj')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'ero':
			eroz = await axios.get('https://nekos.life/api/v2/img/ero')
			bufero = await getBuffer(eroz.data.url)
			pato.sendMessage(from, bufero, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7.')
			})
			break
case prefix+ 'erokemo':
			erokz = await axios.get('https://nekos.life/api/v2/img/erokemo')
			erokzs = await getBuffer(erokz.data.url)
			pato.sendMessage(from, erokzs, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7.')
			})
			break
case prefix+ 'eroyuri':
			eroyuriz = await axios.get('https://nekos.life/api/v2/img/eroyuri')
			buferoyu = await getBuffer(opai.data.url)
			pato.sendMessage(from, buferoyu, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7')
			})
			break
case prefix+ 'tickle':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/tickle')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'feed':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feed')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'kuni':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/kuni')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'femdom':
      anu = await axios.get('https://nekos.life/api/v2/img/femdom')
			bupemdom = await getBuffer(anu.data.url)
				pato.sendMessage(from, bupemdom, image, {quoted: mek})
			.catch(err => {
			return('Error 7-7.')
			})
			break
case prefix+ 'futanari':
			futan = await axios.get('https://nekos.life/api/v2/img/futanari')
			futanz = await getBuffer(futan.data.url)
			pato.sendMessage(from, futanz, image, { quoted: mek })
			break
case prefix+ 'les':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/les')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'trap':
			trapx = await axios.get('https://nekos.life/api/v2/img/tits')
			traps = await getBuffer(trapx.data.url)
			pato.sendMessage(from, traps, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7.')
			})
			break
case prefix+ 'pat':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pat')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'boobs':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/boobs')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'blowjob':
			blowz = await axios.get('https://nekos.life/api/v2/img/blowjob')
			bufblowz = await getBuffer(blowz.data.url)
			pato.sendMessage(from, bufblowz, image, {quoted: mek})
			.catch(err => {
			return('Error 7-7.')
			})
			break
	case prefix+ 'hentai':
			hentaiz = await axios.get('https://nekos.life/api/v2/img/hentai')
			bufhtz = await getBuffer(hentaiz.data.url)
			pato.sendMessage(from, bufhtz, image, {quoted: mek})
			.catch(err => {
			return('Error 7-7.')
			})
			break
	case prefix+ 'hololewed':
			hololew = await axios.get('https://nekos.life/api/v2/img/hololewd')
			hololewx = await getBuffer(hololew.data.url)
			pato.sendMessage(from, hololewx, image, { quoted: mek })
			.catch(err =>{
			  return('Pwro')
			})
			break
case prefix+ 'lewd':
			lewdd = await axios.get('https://nekos.life/api/v2/img/lewd')
			buflewd = await getBuffer(lewdd.data.url)
			pato.sendMessage(from, buflewd, image, { quoted: mek })
			
			break
	case prefix+ 'lewdk':
			lewdkk = await axios.get('https://nekos.life/api/v2/img/lewdk')
			lewdkz = await getBuffer(lewdkz.data.url)
			pato.sendMessage(from, lewdkz, image, { quoted: mek })
			.catch(err =>{
			  return('Pwro..')
			})
			break
case prefix+ 'lewdkemo':
			lewdkm = await axios.get('https://nekos.life/api/v2/img/lewdkemo')
			buflewd = await getBuffer(lewdkm.data.url)
			pato.sendMessage(from, buflewd, image, { quoted: mek })
			.catch(err => {
			return('Pwro..')
			})
			break
case prefix+ 'goose':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/goose')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'solog':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/solog')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'yuri':
			yuriz = await axios.get('https://nekos.life/api/v2/img/tits')
			bupyuri = await getBuffer(yuriz.data.url)
			pato.sendMessage(from, bupyuri, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7.')
			})
			break
	case prefix+ 'anal':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/anal')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break		
case prefix+ 'pwankg':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pwankg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'eron':
			eronz = await axios.get('https://nekos.life/api/v2/img/eron')
			buferon = await getBuffer(eronz.data.url)
			pato.sendMessage(from, buferon, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7..')
			})
			break
case prefix+ 'kiss':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/kiss')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'keta':
			ketaz = await axios.get('https://nekos.life/api/v2/img/keta')
			bufketa = await getBuffer(ketaz.data.url)
			pato.sendMessage(from, bufketa, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7..')
			})
			break
case prefix+ 'cum':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/cum')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				pato.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'cumimage':
			cumjpg = await axios.get('https://nekos.life/api/v2/img/cum_jpg')
			bupjpg = await getBuffer(cumjpg.data.url)
			pato.sendMessage(from, bupjpg, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7..')
			})
			break
case prefix+ 'oppai':
			opai = await axios.get('https://nekos.life/api/v2/img/tits')
			opaiz = await getBuffer(opai.data.url)
			pato.sendMessage(from, opaiz, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7..')
			})
			break
case prefix+ 'holoero':
		holox = await axios.get('https://nekos.life/api/v2/img/holoero')
			bufholox = await getBuffer(holox.data.url)
			pato.sendMessage(from, bufholox, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7..')
			})
			break
//MAKER
    case prefix+ 'sticker': 
    case prefix+ 'stiker':
    case prefix+ 'sg':
    case prefix+ 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await pato.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                pato.sendMessage(from, fs.readFileSync(ran), MessageType.sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await pato.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            pato.sendMessage(from, fs.readFileSync(ran), MessageType.sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(` 𝐄𝐧𝐯𝐢𝐞 𝐮𝐦𝐚 𝐟𝐨𝐭𝐨 𝐜𝐨𝐦 𝐮𝐦  ${prefix}𝐬𝐭𝐢𝐜𝐤𝐞𝐫\n𝐃𝐮𝐫𝐚ç𝐚𝐨 𝐝𝐨 𝐯𝐢𝐝𝐞𝐨 𝐝𝐞 1-9 𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬.`)
            }
            break
	case prefix+ 'stikerwm':
	case prefix+ 'stickerwm':
    case prefix+ 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await pato.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            pato.sendMessage(from, ' 𝐎𝐜𝐨𝐫𝐫𝐞𝐮 𝐮𝐦 𝐞𝐫𝐫𝐨 ',' 𝐓𝐞𝐧𝐭𝐞 𝐧𝐨𝐯𝐚𝐦𝐞𝐧𝐭𝐞', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            pato.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await pato.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            pato.sendMessage(from, ' 𝐎𝐜𝐨𝐫𝐫𝐞𝐮 𝐮𝐦 𝐞𝐫𝐫𝐨 ',' 𝐂𝐨𝐧𝐯𝐞𝐫𝐬𝐚𝐨 ', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            pato.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(` 𝐄𝐧𝐯𝐢𝐞 𝐮𝐦𝐚 𝐟𝐨𝐭𝐨 𝐜𝐨𝐦 𝐮𝐦𝐚 𝐥𝐞𝐠𝐞𝐧𝐝𝐚 ${prefix}swm 𝐭𝐚𝐠𝐬 𝐝𝐞 𝐭𝐞𝐱𝐭𝐨 | 𝐭𝐞𝐱𝐭𝐨 𝐨𝐮 𝐢𝐦𝐚𝐠𝐞𝐦 𝐪𝐮𝐞 𝐟𝐨𝐫𝐚𝐦 𝐞𝐧𝐯𝐢𝐚𝐝𝐚𝐬`)
            }
            break
    case prefix+ 'take':
    case prefix+ 'colong':
    		if (!isQuotedSticker) return reply('𝐒𝐨 𝐚𝐝𝐞𝐬𝐢𝐯𝐨𝐬')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await pato.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, pato, mek, from)
			break
    case prefix+ 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `𝐄𝐧𝐯𝐢𝐚𝐫 / 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞𝐫 𝐢𝐦𝐚𝐠𝐞𝐦 𝐜𝐨𝐦 𝐥𝐞𝐠𝐞𝐧𝐝𝐚 ${prefix}fdeface 𝐥𝐢𝐧𝐤 | 𝐭𝐢𝐭𝐮𝐥𝐨 | 𝐝𝐞𝐬𝐜 | 𝐭𝐞𝐤𝐬`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await pato.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await pato.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		pato.sendMessage(from, mat, MessageType.extendedText, anu)
            break
case prefix+ 'emoji':
			if (!q) return fakegroup('𝐄𝐦𝐨𝐣𝐢 𝐮𝐦?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
           .catch((err) => {
            reply(' 𝐃𝐞𝐬𝐜𝐮𝐥𝐩𝐞-𝐦𝐞 𝐢𝐬𝐬𝐨 𝐧𝐚𝐨 𝐩𝐨𝐝𝐞!'); 
            })
    		break
case prefix+ 'attp':
						if (args.length < 1) return reply(` 𝐎𝐧𝐝𝐞 𝐞𝐬𝐭𝐚 𝐨 𝐭𝐞𝐱𝐭𝐨?\n> 𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix}attp  _𝐁𝐨𝐬𝐨𝐧𝐚𝐫𝐨 𝐅𝐢𝐥𝐡𝐨 𝐝𝐚 𝐏𝐮𝐭𝐚_`)
						attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
						pato.sendMessage(from, attp2, MessageType.sticker, {quoted: mek})
						break
//MAKERIMAGE
//COMINGSOON
//CONVERTER
    case prefix+ 'toimg':
			if (!isQuotedSticker) return reply(' 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞𝐫 𝐮𝐦 𝐚𝐝𝐞𝐬𝐢𝐯𝐨!')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await pato.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply(' 𝐅𝐚𝐥𝐡𝐨𝐮, 𝐭𝐞𝐧𝐭𝐞 𝐧𝐨𝐯𝐚𝐦𝐞𝐧𝐭𝐞!')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
    case prefix+ 'tovid':
    case prefix+ 'tovideo':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await pato.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply(' 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞𝐫 𝐮𝐦 𝐚𝐝𝐞𝐬𝐢𝐯𝐨')
            }
            fs.unlinkSync(owgi)
            break
    case prefix+ 'tomp3':
            if (!isQuotedVideo) return fakegroup(' 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞𝐫 𝐮𝐦 𝐯𝐢𝐝𝐞𝐨!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await pato.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            pato.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'fast':
            if (!isQuotedVideo) return fakegroup(' 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞𝐫 𝐮𝐦 𝐯𝐢𝐝𝐞𝐨')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await pato.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            pato.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'slow':
            if (!isQuotedVideo) return fakegroup(' 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞𝐫 𝐮𝐦 𝐯𝐢𝐝𝐞𝐨!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await pato.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            pato.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'reverse':
            if (!isQuotedVideo) return fakegroup(' 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞𝐫 𝐮𝐦 𝐯𝐢𝐝𝐞𝐨!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await pato.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            pato.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await pato.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply(' 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐯𝐢𝐝𝐞𝐨 𝐨𝐮 𝐢𝐦𝐚𝐠𝐞𝐦.')
            }
            break
//Upload Story WeA
    case prefix+ 'upswteks':
            if (!q) return fakestatus('𝐎 𝐭𝐞𝐱𝐭𝐨? ._.')
            pato.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case prefix+ 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await pato.downloadMediaMessage(swsw)
            pato.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            pato.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Responder imagen!')
            }
            break
    case prefix+ 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await pato.downloadMediaMessage(swsw)
            pato.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            pato.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus(' 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞𝐫 𝐮𝐦 𝐯𝐢𝐝𝐞𝐨!')
            }
            break
			case prefix+ 'fitnah':
            if (args.length < 1) return reply(` 𝐔𝐬𝐨 :\n${prefix}𝐜𝐚𝐥𝐮𝐧𝐢𝐚 [@𝐭𝐚𝐠||𝐦𝐞𝐧𝐬𝐚𝐠𝐞𝐦||𝐫𝐞𝐩𝐥𝐲𝐛𝐨𝐭]]\n\nEx : \n${prefix}𝐜𝐚𝐥𝐮𝐧𝐢𝐚 @𝐭𝐚𝐠𝐦𝐞𝐦𝐛𝐞𝐫||𝐎𝐥𝐚|𝐎𝐥𝐚𝐭𝐚𝐦𝐛𝐞𝐦`)
            var gh = args.join(' ')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            pato.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
            case 'dono':
            memein = await kagApi.memeindo()
            buffer = await getBuffer(`https://i.ibb.co/FWJYx2v/HCBR-PRo.png`)
            client.sendMessage(from, buffer, image, {quoted: mek, caption: '\nㅤㅤ𝐂𝐫𝐢𝐚𝐝𝐨𝐫ㅤᵏᵃˡⁱˡⁱⁿᵘˣ\nㅤㅤ𝐘𝐨𝐮𝐓𝐮𝐛𝐞ㅤhttps://bit.ly/3v0brKy\nㅤㅤ𝐖𝐡𝐚𝐭𝐬ㅤwa.me/+5521981449242\nㅤㅤ𝐈𝐧𝐬𝐭𝐚ㅤ@kαliliиυxdiรтяσ\n\n\nㅤㅤㅤㅤㅤ↶»𝘉𝘰𝘛⇝☠⇜𝘏𝘊𝘉𝘙«↷ㅤ'})
            break
//MOBIL LEJEN
case prefix+ 'herolist':
await herolist().then((ress) => {
let listt = ` 𝐋𝐢𝐬𝐭𝐚 𝐝𝐞 𝐡𝐞𝐫𝐨𝐢𝐬 𝐩𝐚𝐫𝐚 𝐫𝐞𝐜𝐮𝐫𝐬𝐨𝐬 ${prefix}𝐝𝐞𝐭𝐚𝐥𝐡𝐞 𝐝𝐨 𝐡𝐞𝐫𝐨𝐢\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
faketokoforwaded(listt)
})
break
      case prefix+ 'herodetail':
        res = await herodetails(body.slice(12))
        her = `*Hero details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 

*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}
`
faketokoforwaded(her)
break
//Downloader
	case prefix+ 'play':
			if (args.length === 0) return reply(` 𝐄𝐧𝐯𝐢𝐞 𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨${prefix}play _𝐎 𝐭𝐢𝐭𝐮𝐥𝐨 𝐝𝐚 𝐦𝐮𝐬𝐢𝐜𝐚 𝐚 𝐬𝐞𝐫 𝐩𝐞𝐬𝐪𝐮𝐢𝐬𝐚𝐝𝐚_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `ㅤㅤㅤㅤ♬⇜ℙ𝕝𝕒𝕪↭𝕄𝕦𝕤𝕚𝕔𝕒⇝♫\n\nㅤㅤ𝕋𝕚𝕥𝕝𝕖⇝ ${title}\nㅤㅤ𝔽𝕠𝕣𝕞𝕒𝕥𝕠⇝ MP3\nㅤㅤ𝕋𝕒𝕞𝕒𝕟𝕙𝕠 𝕕𝕠 𝕒𝕣𝕢𝕦𝕚𝕧𝕠⇝ ${filesizeF}\nㅤㅤLink⇝ ${a.data}\n\nㅤㅤ_ᵖᵃʳᵃ ᵈᵘʳᵃᶜᵒᵉˢ ˢᵘᵖᵉʳⁱᵒʳᵉˢ ᵃᵒ ˡⁱᵐⁱᵗᵉ ˢᵃᵒ ᵃᵖʳᵉˢᵉⁿᵗᵃᵈᵃˢ ⁿᵒ ˡⁱⁿᵏ ᵐᵉᵏᵗᵘᵏ_`)
                        const captions = `ㅤㅤㅤㅤ♬⇜ℙ𝕝𝕒𝕪↭𝕄𝕦𝕤𝕚𝕔𝕒⇝♫\n\nㅤㅤ𝕋𝕚𝕥𝕝𝕖⇝ ${title}\nㅤㅤ𝔽𝕠𝕣𝕞𝕒𝕥𝕠⇝ MP3\nㅤㅤ𝕋𝕒𝕞𝕒𝕟𝕙𝕠 𝕕𝕠 𝕒𝕣𝕢𝕦𝕚𝕧𝕠⇝ ${filesizeF}\nㅤㅤLink⇝ ${a.data}\n\nㅤㅤ_ᵖᵒʳ ᶠᵃᵛᵒʳ, ᵃᵍᵘᵃʳᵈᵉ ᵒ ᵉⁿᵛⁱᵒ ᵈᵒ ᵃʳˤᵘⁱᵛᵒ ᵈᵉ ᵐⁱᵈⁱᵃ; ⁱˢˢᵒ ᵖᵒᵈᵉ ˡᵉᵛᵃʳ ᵃˡᵍᵘⁿˢ ᵐⁱⁿᵘᵗᵒˢ_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case prefix+ 'video':
            if (args.length === 0) return reply(` 𝐄𝐧𝐯𝐢𝐚𝐫 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ${prefix}video _𝐎 𝐭𝐢𝐭𝐮𝐥𝐨 𝐝𝐚 𝐦𝐮𝐬𝐢𝐜𝐚 𝐚 𝐬𝐞𝐫 𝐩𝐞𝐬𝐪𝐮𝐢𝐬𝐚𝐝𝐚_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `ㅤㅤㅤㅤ𝐏𝐋𝐀𝐘 𝐕𝐈𝐃𝐄𝐎 ▶\n\nㅤㅤ𝐓𝐢𝐭𝐮𝐥𝐨⇝ ${title}\nㅤㅤ𝔽𝕠𝕣𝕞𝕒𝕥𝕠⇝ MP3\nㅤㅤ𝕋𝕒𝕞𝕒𝕟𝕙𝕠 𝕕𝕠 𝕒𝕣𝕢𝕦𝕚𝕧𝕠⇝ ${filesizeF}\nㅤㅤLink⇝ ${a.data}\n\nㅤㅤ_ᵖᵃʳᵃ ᵈᵘʳᵃᶜᵒᵉˢ ˢᵘᵖᵉʳⁱᵒʳᵉˢ ᵃᵒ ˡⁱᵐⁱᵗᵉ ˢᵃᵒ ᵃᵖʳᵉˢᵉⁿᵗᵃᵈᵃˢ ⁿᵒ ˡⁱⁿᵏ ᵐᵉᵏᵗᵘᵏ_`)
                        const captions = `ㅤㅤㅤㅤ𝐏𝐋𝐀𝐘 𝐕𝐈𝐃𝐄𝐎 ▶\n\nㅤㅤ𝐓𝐢𝐭𝐮𝐥𝐨⇝ ${title}\nㅤㅤ𝔽𝕠𝕣𝕞𝕒𝕥𝕠⇝ MP4\nㅤㅤ𝕋𝕒𝕞𝕒𝕟𝕙𝕠 𝕕𝕠 𝕒𝕣𝕢𝕦𝕚𝕧𝕠⇝ ${filesizeF}\nㅤㅤLink⇝ ${a.data}\n\nㅤㅤ_ᵖᵒʳ ᶠᵃᵛᵒʳ, ᵃᵍᵘᵃʳᵈᵉ ᵒ ᵉⁿᵛⁱᵒ ᵈᵒ ᵃʳˤᵘⁱᵛᵒ ᵈᵉ ᵐⁱᵈⁱᵃ; ⁱˢˢᵒ ᵖᵒᵈᵉ ˡᵉᵛᵃʳ ᵃˡᵍᵘⁿˢ ᵐⁱⁿᵘᵗᵒˢ_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break
	case prefix+ 'ytmp3':
			if (args.length === 0) return reply(`𝐄𝐧𝐯𝐢𝐚𝐫 𝐩𝐞𝐝𝐢𝐝𝐨 ${prefix}ytmp3 [𝐥𝐢𝐧𝐤𝐘𝐓]`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `𝐃𝐚𝐝𝐨𝐬 𝐨𝐛𝐭𝐢𝐝𝐨𝐬 𝐜𝐨𝐦 𝐬𝐮𝐜𝐞𝐬𝐬𝐨!\n\nㅤㅤ𝐓𝐢𝐭𝐮𝐥𝐨⇝  ${title}\nㅤㅤ𝔽𝕠𝕣𝕞𝕒𝕥𝕠⇝ MP3\nㅤㅤ𝕋𝕒𝕞𝕒𝕟𝕙𝕠 𝕕𝕠 𝕒𝕣𝕢𝕦𝕚𝕧𝕠⇝ ${filesizeF}\nㅤㅤLink⇝ ${a.data}\n\nㅤㅤ_ᵖᵃʳᵃ ᵈᵘʳᵃᶜᵒᵉˢ ˢᵘᵖᵉʳⁱᵒʳᵉˢ ᵃᵒ ˡⁱᵐⁱᵗᵉ ˢᵃᵒ ᵃᵖʳᵉˢᵉⁿᵗᵃᵈᵃˢ ⁿᵒ ˡⁱⁿᵏ ᵐᵉᵏᵗᵘᵏ_`)
				const captions = `YTMP3\n\nㅤㅤ𝐓𝐢𝐭𝐮𝐥𝐨⇝  ${title}\nㅤㅤ𝔽𝕠𝕣𝕞𝕒𝕥𝕠⇝ MP3\nㅤㅤ𝕋𝕒𝕞𝕒𝕟𝕙𝕠 𝕕𝕠 𝕒𝕣𝕢𝕦𝕚𝕧𝕠⇝ ${filesizeF}\n\n 𝐒𝐞𝐣𝐚 𝐩𝐚𝐜𝐢𝐞𝐧𝐭𝐞, 𝐞𝐬𝐭𝐨𝐮 𝐞𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐨 𝐚𝐫𝐪𝐮𝐢𝐯𝐨!`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
 		case prefix+ 'ytmp4':
			if (args.length === 0) return reply(`𝐄𝐧𝐯𝐢𝐚𝐫 𝐩𝐞𝐝𝐢𝐝𝐨 ${prefix}ytmp4 [𝐥𝐢𝐧𝐤𝐘𝐓]`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `YTMP 4!\n\nㅤㅤ𝐓𝐢𝐭𝐮𝐥𝐨⇝  ${title}\nㅤㅤ𝔽𝕠𝕣𝕞𝕒𝕥𝕠⇝ MP3\nㅤㅤ𝕋𝕒𝕞𝕒𝕟𝕙𝕠 𝕕𝕠 𝕒𝕣𝕢𝕦𝕚𝕧𝕠⇝ ${filesizeF}\nㅤㅤLink⇝ ${a.data}\n\nㅤㅤ_ᵖᵃʳᵃ ᵈᵘʳᵃᶜᵒᵉˢ ˢᵘᵖᵉʳⁱᵒʳᵉˢ ᵃᵒ ˡⁱᵐⁱᵗᵉ ˢᵃᵒ ᵃᵖʳᵉˢᵉⁿᵗᵃᵈᵃˢ ⁿᵒ ˡⁱⁿᵏ ᵐᵉᵏᵗᵘᵏ_`)
				const captionsYtmp4 = `𝐀𝐫𝐪𝐮𝐢𝐯𝐨 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐝𝐨!\n\nㅤㅤ𝐓𝐢𝐭𝐮𝐥𝐨⇝  ${title}\nㅤㅤ𝔽𝕠𝕣𝕞𝕒𝕥𝕠⇝ MP4\nㅤㅤ𝕋𝕒𝕞𝕒𝕟𝕙𝕠 𝕕𝕠 𝕒𝕣𝕢𝕦𝕚𝕧𝕠⇝ ${filesizeF}\n\n 𝐒𝐞𝐣𝐚 𝐩𝐚𝐜𝐢𝐞𝐧𝐭𝐞, 𝐞𝐬𝐭𝐨𝐮 𝐞𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐨 𝐚𝐫𝐪𝐮𝐢𝐯𝐨!`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case prefix+ 'ytsearch':
			if (args.length < 1) return reply(' 𝐎 𝐪𝐮𝐞 𝐯𝐨𝐮 𝐩𝐫𝐨𝐜𝐮𝐫𝐚𝐫?')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await pato.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀 𝐍𝐎 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ 𝐃𝐮𝐫𝐚ç𝐚𝐨: ' + video.timestamp + '\n'
            ytresult += '❏ Subida: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '☙𝐊𝐚𝐋𝐢↭𝐋𝐢𝐍𝐮𝐗❧'
    		await fakethumb(tbuff,ytresult)
			break
    case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Link?')
        reply(mess.wait)
	    igdl(args[0])
	    .then(async(result) => {
            for (let ink of result.url_list)	{
            if (ink.includes('.mp4')){
            const igvdl = await getBuffer(ink)	
	    pato.sendMessage(from,igvdl,video,{mimetype:'video/mp4',quoted:mek,caption:'Etto.UvU'})
            } else if (ink.includes('.jpg')){
            const igpdl = await getBuffer(ink)
            pato.sendMessage(from,igpdl,image,{mimetype:'image/jpeg',quoted:mek,caption:'Etto UvU'})
	    }
            }
	    })
	    break
    case prefix+ 'igstalk':
            if (!q) return fakegroup('𝐍𝐨𝐦𝐞 𝐝𝐨 𝐮𝐬𝐮𝐚𝐫𝐢𝐨!')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case prefix+ 'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Link?')
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'DONE')
            })
            break
 	case prefix+ 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Link?')
 		reply(mess.wait)
		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		console.log(result)
    		const { videonowm, videonowm2, text } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
    		.then(async (a) => {
    		me = `*Title* : ${text}\n*Link* : ${a.data}`
		pato.sendMessage(from,{url:`${videonowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case prefix+ 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Link?')
 		reply(mess.wait)
 		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		const { music,text } = result
		pato.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:mek})
		})
     		.catch(e => console.log(e))
     		break
    case prefix+ 'fb':
            if (!q) return reply('Link?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            fakestatus(mess.wait)
            Fb.getInfo(`${te}`)
            .then(G => {
            ten = `${G.download.sd}`
            tek = `${G.title}`
            sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
           .catch((error) => {
            reply('lo siento hermano:('); 
            })
})
            break 
//Learn
case prefix+ 'brainly':
			if (args.length < 1) return reply('Que clase de pregunta es esa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pregunta:* ${Y.pertanyaan}\n\n*➸ Respuesta:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			pato.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
case prefix+ 'google':
      if(!q) return reply('Yang mau di cari afa?')
			.then(res => res.json())
			afanya = args.join(' ')
			gogel = await axios.get(`https://shot.screenshotapi.net/screenshot?token=D2TDY3F-G5YMM94-K9JEQT8-FYBDQBB&url=https://www.google.com/search?q=${afanya}&safe=strict&sxsrf=ALeKk03WtBNqunvK303Qm3aEToejzpQvag%3A1621384426733&source=hp&ei=6lykYJbUKtPmz7sP-MugmAU&oq=p&gs_lcp=ChFtb2JpbGUtZ3dzLXdpei1ocBADMgQIIxAnMgQIIxAnMgQIIxAnMggIABCxAxCDATIFCAAQsQMyBQguELEDMggIABCxAxCDATIICAAQsQMQgwE6BwgjEOoCECdQlg9Ylg9g9hJoAXAAeACAAVmIAVmSAQExmAEAoAEBsAEP&sclient=mobile-gws-wiz-hp&full_page=true&fresh=true&output=json&file_type=png&wait_for_event=load`)
			bupnyah = await getBuffer(gogel.data.screenshot)
			pato.sendMessage(from, bupnyah, image, {quoted: mek, sendEphemeral: true})
			.catch(err => {
				return('Mengulang lord ada yg mengerror...')
			})
			break
	//Group Feature
case prefix+ 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('A quien quieres agregar oni chan O~O?')
if (args[0].startsWith('08')) return reply('Utilice el código de país')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
pato.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('No se pudo agregar el objetivo, tal vez porque en privado')
}
break
case prefix+ 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag yg ingin angda tusbol!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '*Adios putito >:] :* '
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
pato.groupRemove(from, mentioned)
					} else {
mentions(`byee.. @${mentioned[0].split('@')[0]}`, mentioned, true)
pato.groupRemove(from, mentioned)
}
break
case prefix+ 'promote':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Promovido Mi niñ@ lind@ UwU\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
pato.groupRemove(from, mentioned)
} else {
mentions(`Ok @${mentioned[0].split('@')[0]} kamu jadi admin!`, mentioned, true)
pato.groupMakeAdmin(from, mentioned)
}
break
case prefix+ 'demote':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Degradar con éxito UnU\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
pato.groupRemove(from, mentioned)
} else {
mentions(`Oke @${mentioned[0].split('@')[0]} kamu gak admin lagi yaa!`, mentioned, true)
pato.groupDemoteAdmin(from, mentioned)
}
break//DONE
    case prefix+ 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await pato.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await pato.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case prefix+ 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            pato.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break
 	case prefix+ 'hidetag':
			if (!mek.key.fromMe) return fakestatus('SATANCITO ᵈᵃʳʸ⛥')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await pato.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			pato.sendMessage(from, optionshidetag, text)
			break
    case prefix+ 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pato.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pato.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            pato.sendMessage(from, ini_buffer, MessageType.sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
		    case prefix+ 'giftag':
		      //by Dehanjing
                if (!isQuotedVideo) return reply(`Reply Gif nya dengan caption ${prefix + command}`)
                quoted = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                download = await pato.downloadMediaMessage(quoted)
                await fs.writeFileSync(`giftag.gif`, download)
                var group = await pato.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                thumb = fs.readFileSync(`giftag.gif`)
                pato.sendMessage(from, thumb, video, { contextInfo: {mentionedJid: mem }, quoted: mek, mimetype: 'video/gif', thumbnail: thumb })
			    await fs.unlinkSync(`giftag.gif`)
			    break
			case prefix+ 'doctag':
			  //by Dehanjing
		        if (!isQuotedDocument) return amek.reply(from, `Reply Document dengan caption *${prefix + command}*`, mek)
                quoted = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                download = await pato.downloadMediaMessage(quoted)
                await fs.writeFileSync(`doc.txt`, download)
                var group = await pato.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                pato.sendMessage(from, fs.readFileSync(`doc.txt`), document, { contextInfo: {mentionedJid: mem }, quoted: mek, mimetype: 'text/plain' })
			    await fs.unlinkSync(`doc.txt`)
			    break
    case prefix+ 'kontag':
            if (!mek.key.fromMe) return reply('SATANCITO ᵈᵃʳʸ⛥')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            pato.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case prefix+ 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pato.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pato.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            pato.sendMessage(from, ini_buffer, MessageType.sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pato.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pato.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            pato.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pato.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pato.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            pato.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pato.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pato.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            pato.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`responde a un video imagen o sticker con : ${prefix}totag`)
        }
        break
//OTHER 
    case prefix+ 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Ingrese el enlace del grupo')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('asegúrese de que el enlace sea correcto T-T!')
            var response = await pato.acceptInvite(codeInvite)
            fakestatus('Lito')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case prefix+ 'runtime':
    case prefix+ 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case prefix+ 'speed':
	case prefix+ 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  

//Maker

case prefix+ 'bc':
					if (!isMe) return reply('No eres mi dueño UnU...')
					if (args.length < 1) return reply('.......')
					const more = String.fromCharCode(8206)
                    const readmore = more.repeat(4001)
					anu = await pato.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await pato.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							pato.sendMessage(_.jid, bc, image, {caption: `${body.slice(4)}\n> Izin Broadcast`, sendEphemeral: true})
						}
						reply('Lito')
					} else {
						for (let _ of anu) {
							sendMess(_.jid,`${body.slice(4)}` + readmore + `\n>Broadcast`)
						}
						reply('Lito UwU')
					}
					break
					case prefix+ 'level':
                if (!isGroup) return reply(mess.only
.group)
                const Level = getLevelingLevel(sender)
                const Xp = getLevelingXp(sender)
                if (Level === undefined && Xp === undefined) return reply('Etto O^O?')
                const requiredXp = 5000 * (Math.pow(2, Level) - 1)
                resul = `┌──⫶ *Nivel* ⫶──\n├ *Nombre* : ${pushname}\n├ Número : wa.me/${sender.split("@")[0]}\n├ XP :  ${Xp}/${requiredXp}\n└ Nivel : ${Level}`
                faketokoforwaded(resul, text, numbernye, per)
				break 
				case prefix+ 'narutod':
				oi = body.slice(8)
				oii = await getBuffer(`https://patoapi.herokuapp.com/api/photooxy/naruto?text=${oi}`)
				pato.sendMessage(from, oii, image, {quoted: mek, caption: 'Ok brother'})
				break
				
//END BANG RAKIT SENDIRI YAA DAN JGN LUPA KASIH NAMA SAYA YG SUDAH MENGBANGUN INI SC :(

default:

if (budy.startsWith('$')){
                        if (!isMe) return 
                            var konsol = budy.slice(2)
                        exec(konsol, (err, stdout) => {
                            if(err) return reply(`${err}`)
                                if (stdout) {
                                    reply(`${stdout}`)
                                    console.log('\x1b[1;37m>', '[', '\x1b[1;36mEVALL\x1b[1;37m', ']', time, color("$", "aqua"), 'from', color(senderme.split('@')[0]), 'args :', color(args.length))
                                }
                            })
                    } 
                    if (budy.startsWith('>')){
                        if (!isMe) return
                            var konsol = budy.slice(2)
                            function _return(sul) {
                            var sat = JSON.stringify(sul, null, 2)
                            var bang = util.format(sat)
                            return reply(bang)
                        }
                        try {
                            reply(util.format(eval(`;(async () => { ${konsol} })()`)))
                            console.log('\x1b[1;37m>', '[', '\x1b[1;36mEVALL\x1b[1;37m', ']', time, color(">", "aqua"), 'from', color(senderme.split('@')[0]), 'args :', color(args.length))
                        } catch (e) {
                              err = String(e)
                                reply(err)
                            }
                        } else {
                            if (budy != undefined) {
                                //console.log('>', '[',color('INGFO','red'),']',`Message : ${budy} From`, color(senderme.split('@')[0]))
                            } 
                        }
                        if (!budy.startsWith('$')) return
                            if (!budy.startsWith('>')) return
                        }

                
if (isGroup && budy != undefined) {
	} else {
	console.log(color('> [ JAPRI ]', 'red'), 'WEA', color(sender.split('@')[0]))
	}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Error : %s', color(e, 'red'))
	console.log(e)
        }
	}
})
}
starts()
