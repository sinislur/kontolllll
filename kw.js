const _0x4c070c=_0x125b;(function(_0x2778a3,_0x3438fc){const _0x347d3d=_0x125b,_0x46eae4=_0x2778a3();while(!![]){try{const _0x12cd56=parseInt(_0x347d3d(0xf7))/0x1+-parseInt(_0x347d3d(0x165))/0x2+-parseInt(_0x347d3d(0x128))/0x3*(-parseInt(_0x347d3d(0x13d))/0x4)+parseInt(_0x347d3d(0x166))/0x5*(-parseInt(_0x347d3d(0x16c))/0x6)+parseInt(_0x347d3d(0x17f))/0x7+-parseInt(_0x347d3d(0xfe))/0x8+-parseInt(_0x347d3d(0x158))/0x9*(parseInt(_0x347d3d(0x10b))/0xa);if(_0x12cd56===_0x3438fc)break;else _0x46eae4['push'](_0x46eae4['shift']());}catch(_0x243182){_0x46eae4['push'](_0x46eae4['shift']());}}}(_0xea6d,0xb19c1),require(_0x4c070c(0x11b)));const {baileys,proto,generateWAMessage,generateWAMessageFromContent,getContentType,prepareWAMessageMedia}=require('@adiwajshing/baileys'),{getGroupAdmins,fetchJson,reSize,generateProfilePicture,sleep}=require(_0x4c070c(0x191)),{jadibot,conns}=require(_0x4c070c(0x12e)),{exec,spawn,execSync}=require(_0x4c070c(0x172)),cheerio=require(_0x4c070c(0x111)),chalk=require('chalk'),util=require(_0x4c070c(0x11e)),axios=require(_0x4c070c(0x120)),fs=require('fs'),syntaxerror=require(_0x4c070c(0x105)),Jimp=require(_0x4c070c(0x146)),PhoneNumber=require(_0x4c070c(0x171)),speed=require('performance-now'),moment=require(_0x4c070c(0x129)),owner=JSON[_0x4c070c(0x195)](fs[_0x4c070c(0x162)](_0x4c070c(0xf8)));module[_0x4c070c(0x12a)]=client=async(_0x4c2817,_0x4f261f,_0x380809,_0xb655c5)=>{const _0x54b309=_0x4c070c;try{const _0x40d2da=getContentType(_0x4f261f[_0x54b309(0xf9)]),_0x115091=JSON[_0x54b309(0x184)](_0x4f261f[_0x54b309(0xf9)]),_0x3284e7=_0x4f261f['key'][_0x54b309(0x103)],_0x1080fc=_0x4f261f['quoted']?_0x4f261f[_0x54b309(0xfa)]:_0x4f261f,_0x3de203=(_0x1080fc[_0x54b309(0x183)]||_0x1080fc)['mimetype']||'',_0x11ac18=_0x40d2da===_0x54b309(0x147)&&_0x4f261f[_0x54b309(0xf9)][_0x54b309(0x147)]?_0x4f261f[_0x54b309(0xf9)][_0x54b309(0x147)]:_0x40d2da==_0x54b309(0x18e)&&_0x4f261f['message'][_0x54b309(0x18e)][_0x54b309(0x138)]?_0x4f261f[_0x54b309(0xf9)][_0x54b309(0x18e)][_0x54b309(0x138)]:_0x40d2da==_0x54b309(0x188)&&_0x4f261f[_0x54b309(0xf9)][_0x54b309(0x188)][_0x54b309(0x138)]?_0x4f261f[_0x54b309(0xf9)][_0x54b309(0x188)][_0x54b309(0x138)]:_0x40d2da==_0x54b309(0x196)&&_0x4f261f[_0x54b309(0xf9)][_0x54b309(0x196)][_0x54b309(0x138)]?_0x4f261f[_0x54b309(0xf9)][_0x54b309(0x196)]['caption']:_0x40d2da==_0x54b309(0x143)&&_0x4f261f[_0x54b309(0xf9)]['extendedTextMessage'][_0x54b309(0xfd)]?_0x4f261f[_0x54b309(0xf9)][_0x54b309(0x143)]['text']:_0x40d2da==_0x54b309(0x13b)&&_0x4f261f['message'][_0x54b309(0x13b)]['selectedButtonId']?_0x4f261f[_0x54b309(0xf9)][_0x54b309(0x13b)][_0x54b309(0x13a)]:_0x40d2da==_0x54b309(0x149)&&_0x4f261f['message'][_0x54b309(0x149)][_0x54b309(0x14b)]?_0x4f261f[_0x54b309(0xf9)][_0x54b309(0x149)]['selectedId']:'',_0x522608=typeof _0x4f261f['text']==_0x54b309(0x15c)?_0x4f261f[_0x54b309(0xfd)]:'',_0x2bacab=/^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/[_0x54b309(0x10d)](_0x11ac18)?_0x11ac18[_0x54b309(0x18a)](/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi):'.',_0x51f790=_0x11ac18['startsWith'](_0x2bacab),_0x2098f2=_0x51f790?_0x11ac18[_0x54b309(0x170)](_0x2bacab['length'])[_0x54b309(0x145)]()[_0x54b309(0x125)]('\x20')[_0x54b309(0x10c)]()[_0x54b309(0x148)]():'',_0x4d36be=_0x11ac18[_0x54b309(0x145)]()['split'](/ +/)['slice'](0x1),_0x5d7bd7=q=_0x4d36be['join']('\x20'),_0x1484ce=_0x3284e7['endsWith'](_0x54b309(0x126)),_0x5dc882=_0x1484ce?await _0x4c2817[_0x54b309(0x176)](_0x4f261f[_0x54b309(0x136)])[_0x54b309(0x180)](_0x352c9b=>{}):'',_0x18d66a=_0x1484ce?_0x5dc882[_0x54b309(0x177)]:'',_0x605160=_0x1484ce?await _0x5dc882[_0x54b309(0x17e)]:'',_0x291914=_0x1484ce?await _0x605160[_0x54b309(0x114)](_0x2a5735=>_0x2a5735['admin']!==null)['map'](_0x97a79a=>_0x97a79a['id']):'',_0x27f734=_0x1484ce?_0x5dc882[_0x54b309(0x17e)]:'',_0x3a928e=_0x1484ce?_0x291914[_0x54b309(0x110)](_0x4f261f[_0x54b309(0x159)]):![],_0x1f7824=await _0x4c2817['decodeJid'](_0x4c2817[_0x54b309(0x10a)]['id']),_0x289742=_0x1484ce?_0x291914[_0x54b309(0x110)](_0x1f7824):![],_0x5c4bd8=_0x1484ce?_0x291914[_0x54b309(0x110)](_0x1f7824):![],_0x317e86=_0x1484ce?_0x291914[_0x54b309(0x110)](_0x4f261f['sender']):![],_0x16e7e4=_0x4f261f[_0x54b309(0x164)][_0x54b309(0x161)]?_0x4c2817['user']['id'][_0x54b309(0x125)](':')[0x0]+'@s.whatsapp.net'||_0x4c2817[_0x54b309(0x10a)]['id']:_0x4f261f[_0x54b309(0x164)][_0x54b309(0x13c)]||_0x4f261f[_0x54b309(0x164)][_0x54b309(0x103)],_0x346f68=_0x16e7e4[_0x54b309(0x125)]('@')[0x0],_0x30e787=_0x4f261f[_0x54b309(0x15f)]||''+_0x346f68,_0xc5315f=_0x1f7824[_0x54b309(0x110)](_0x346f68),_0x1cd00d=owner['includes'](_0x346f68)||_0xc5315f,_0x363809=await moment['tz'](_0x54b309(0x193))[_0x54b309(0x115)]('HH'),_0x8b535c=await moment['tz'](_0x54b309(0x193))['format']('mm'),_0x45ad84=await moment['tz'](_0x54b309(0x193))[_0x54b309(0x115)]('ss'),_0x24f008=_0x54b309(0x156)+_0x363809+_0x54b309(0x135)+_0x8b535c+_0x54b309(0x190)+_0x45ad84,_0x37baf7=async(_0x3dfb14,_0x4adc29)=>{const _0x386163=_0x54b309;try{_0x4adc29?_0x4adc29:{};const _0x483e79=await axios({'method':'get','url':_0x3dfb14,'headers':{'DNT':0x1,'Upgrade-Insecure-Request':0x1},..._0x4adc29,'responseType':_0x386163(0x12c)});return _0x483e79[_0x386163(0x17c)];}catch(_0x4bb15c){return _0x4bb15c;}},_0x530222=(_0x5324c5='')=>{const _0xeda9d6=_0x54b309;return[..._0x5324c5['matchAll'](/@([0-9]{5,16}|0)/g)][_0xeda9d6(0x121)](_0x38ec36=>_0x38ec36[0x1]+_0xeda9d6(0x119));},_0x342e23=_0x477ac2=>{const _0x2686a6=_0x54b309;return _0x477ac2[_0x2686a6(0x18a)](new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,'gi'));},_0x490d18=(_0x3360a4,_0x31ba9a)=>{const _0x359a3d=_0x54b309;return!_0x31ba9a?chalk[_0x359a3d(0x153)](_0x3360a4):chalk[_0x359a3d(0x15b)](_0x31ba9a)(_0x3360a4);},_0x605af9=_0x3a7cde=>{const _0x8281de=_0x54b309;let _0x8472e8='';const _0x48a1c8=_0x8281de(0x157),_0x29e2b0=_0x48a1c8['length'];for(let _0x459d0b=0x0;_0x459d0b<_0x3a7cde;_0x459d0b++){_0x8472e8+=_0x48a1c8[_0x8281de(0x16f)](Math[_0x8281de(0x187)](Math['random']()*_0x29e2b0));}return _0x8472e8;},_0x1a2696=_0x4802fb=>{const _0x4cf766=_0x54b309;_0x4c2817[_0x4cf766(0xff)](_0x3284e7,{'text':_0x4802fb},{'quoted':_0x4f261f});};_0x51f790&&_0x4f261f[_0x54b309(0x11d)]&&console[_0x54b309(0x118)](chalk[_0x54b309(0x12f)][_0x54b309(0x10f)](0xff,0xb2,0x66)(_0x54b309(0x116)),chalk[_0x54b309(0x12f)][_0x54b309(0x10f)](0x99,0xff,0x99)(_0x2098f2),chalk['bold'][_0x54b309(0x10f)](0xcc,0xcc,0x0)('from'),chalk[_0x54b309(0x12f)][_0x54b309(0x10f)](0x99,0xff,0xcc)(_0x30e787),chalk[_0x54b309(0x12f)]['rgb'](0xcc,0xcc,0x0)('in'),chalk[_0x54b309(0x12f)][_0x54b309(0x10f)](0xff,0xb2,0x66)(_0x54b309(0x14c)),chalk['bold']('['+_0x4d36be[_0x54b309(0x181)]+']'));_0x51f790&&!_0x4f261f[_0x54b309(0x11d)]&&console[_0x54b309(0x118)](chalk[_0x54b309(0x12f)][_0x54b309(0x10f)](0xff,0xb2,0x66)(_0x54b309(0x116)),chalk['bold']['rgb'](0x99,0xff,0x99)(_0x2098f2),chalk[_0x54b309(0x12f)][_0x54b309(0x10f)](0xcc,0xcc,0x0)(_0x54b309(0xf6)),chalk['bold'][_0x54b309(0x10f)](0x99,0xff,0xcc)(_0x30e787),chalk[_0x54b309(0x12f)][_0x54b309(0x10f)](0xcc,0xcc,0x0)('in'),chalk[_0x54b309(0x12f)][_0x54b309(0x10f)](0xff,0xb2,0x66)(_0x54b309(0x173)),chalk[_0x54b309(0x12f)]('['+_0x4d36be[_0x54b309(0x181)]+']'));try{ppuser=await _0x4c2817['profilePictureUrl'](_0x16e7e4,'image');}catch(_0x698644){ppuser=_0x54b309(0x178);}let _0x28c225=[];for(let _0x59eaac of owner){_0x28c225[_0x54b309(0x194)]({'displayName':await _0x4c2817['getName'](_0x59eaac+_0x54b309(0x119)),'vcard':'BEGIN:VCARD\x0a\x0aVERSION:3.0\x0a\x0aN:'+await _0x4c2817[_0x54b309(0x13f)](_0x59eaac+'@s.whatsapp.net')+'\x0a\x0aFN:'+await _0x4c2817[_0x54b309(0x13f)](_0x59eaac+_0x54b309(0x119))+_0x54b309(0x14f)+_0x59eaac+':'+_0x59eaac+_0x54b309(0x18d)});}function _0x3ba0af(){const _0x12d51f=_0x54b309;let _0x3b43ca=_0x12d51f(0x122);_0x1a2696(_0x3b43ca);}function _0x3c9892(){_0x1a2696('Maaf\x20Fitur\x20Ini\x20Hanya\x20Bisa\x20Digunakan\x20Di\x20Group\x20Chat');}const _0x4c7dbd=await _0x37baf7(ppuser);switch(_0x2098f2){case'menu':{owned=nomerOwner+'@s.whatsapp.net',ngen='*BOT\x20WHATSAPP\x20BY\x20'+nameGEDE+_0x54b309(0x109)+_0x2bacab+_0x54b309(0x185)+_0x2bacab+_0x54b309(0x155)+_0x2bacab+_0x54b309(0x192)+_0x2bacab+_0x54b309(0x18f)+_0x2bacab+_0x54b309(0x134)+_0x2bacab+_0x54b309(0x11f)+_0x2bacab+_0x54b309(0x100)+_0x2bacab+_0x54b309(0x163)+_0x2bacab+_0x54b309(0x12b)+_0x2bacab+_0x54b309(0x132)+owned[_0x54b309(0x125)]('@')[0x0],_0x4c2817[_0x54b309(0xff)](_0x3284e7,{'image':thumb,'caption':ngen,'mentions':[owned]},{'quoted':_0x4f261f});}break;case _0x54b309(0x15e):case'sc':{notag=nomerOwner+_0x54b309(0x119),_0x4c2817[_0x54b309(0xff)](_0x3284e7,{'text':_0x54b309(0x141)+notag['split']('@')[0x0],'mentions':[notag]},{'quoted':_0x4f261f});}break;case _0x54b309(0x186):{if(!_0x1cd00d)return _0x3ba0af();if(_0x4f261f[_0x54b309(0x11d)])return _0x1a2696(_0x54b309(0x15a));await jadibot(_0x4c2817,_0x4f261f,_0x3284e7);}break;case'owner':{const _0x1ffbc2=await _0x4c2817['sendMessage'](_0x3284e7,{'contacts':{'displayName':_0x28c225[_0x54b309(0x181)]+_0x54b309(0x14d),'contacts':_0x28c225}},{'quoted':_0x4f261f});_0x4c2817['sendMessage'](_0x3284e7,{'text':'Hai\x20Kak\x20@'+_0x16e7e4['split']('@')[0x0]+_0x54b309(0x106),'mentions':[_0x16e7e4]},{'quoted':_0x1ffbc2});}break;case _0x54b309(0x154):{if(!_0x1cd00d)return _0x3ba0af();_0x1a2696(_0x54b309(0x140));let _0x1e09ac=await _0x4c2817['groupFetchAllParticipating'](),_0x5e16b=Object[_0x54b309(0x123)](_0x1e09ac)[_0x54b309(0x170)](0x0)[_0x54b309(0x121)](_0x4deaee=>_0x4deaee[0x1]),_0x2d95f9=_0x5e16b[_0x54b309(0x121)](_0x29ec68=>_0x29ec68['id']),_0x4e67ee=_0x54b309(0x113)+_0x2d95f9[_0x54b309(0x181)]+'\x20Group\x0a\x0a';for(let _0x55e25c of _0x2d95f9){_0x4e67ee+=_0x55e25c+'\x0a';}_0x1a2696(_0x4e67ee+(_0x54b309(0x11c)+_0x2bacab+_0x54b309(0x11a)));}break;case _0x54b309(0x12d):{if(!_0x1cd00d)return _0x3ba0af();if(!q)return _0x1a2696('Id\x20Nya\x20Mana\x20Kak?');let _0x4fdf23=await _0x4c2817['groupMetadata'](q),_0x5b3d4a=await _0x4c2817[_0x54b309(0xff)](_0x3284e7,{'text':_0x54b309(0x131)+_0x4fdf23[_0x54b309(0x16e)]+'\x0aMember\x20:\x20'+_0x4fdf23[_0x54b309(0x17e)][_0x54b309(0x181)]+_0x54b309(0x104)},{'quoted':_0x4f261f});await _0x4c2817['sendMessage'](_0x3284e7,{'text':_0x54b309(0x102)+_0x2bacab+_0x54b309(0x144)+q+_0x54b309(0x13e)},{'quoted':_0x5b3d4a});}break;case'pushkontak':if(!_0x1cd00d)return _0x3ba0af();if(!q)return _0x1a2696(_0x54b309(0x182)+(_0x2bacab+_0x2098f2)+_0x54b309(0x137));await _0x1a2696(_0x54b309(0x168));const _0x4d829e=q[_0x54b309(0x125)]('|')[0x1],_0xe86146=!_0x1484ce?await _0x4c2817[_0x54b309(0x176)](''+q[_0x54b309(0x125)]('|')[0x0])[_0x54b309(0x180)](_0x3f553d=>{}):'',_0x451a44=!_0x1484ce?await _0xe86146[_0x54b309(0x17e)]:'',_0xc60708=await _0x451a44[_0x54b309(0x114)](_0x18bf51=>_0x18bf51['id'][_0x54b309(0x142)](_0x54b309(0x18c)))[_0x54b309(0x121)](_0x36ed42=>_0x36ed42['id']);for(let _0x492c95 of _0xc60708){_0x4c2817[_0x54b309(0xff)](_0x492c95,{'text':_0x4d829e}),await sleep(0x7d0);}_0x1a2696(_0x54b309(0xfb));break;case _0x54b309(0x16b):if(!_0x1cd00d)return _0x3ba0af();if(!_0x4f261f[_0x54b309(0x11d)])return _0x1a2696(_0x54b309(0x15d)+(_0x2bacab+_0x2098f2)+_0x54b309(0x107));if(!_0x5d7bd7)return _0x1a2696(_0x54b309(0x182)+(_0x2bacab+_0x2098f2)+_0x54b309(0x112));await _0x1a2696('Otw\x20Boskuuu');const _0x2761cd=await _0x605160['filter'](_0x5ce6a9=>_0x5ce6a9['id'][_0x54b309(0x142)](_0x54b309(0x18c)))[_0x54b309(0x121)](_0xeed7ab=>_0xeed7ab['id']);for(let _0x38aa97 of _0x2761cd){_0x4c2817[_0x54b309(0xff)](_0x38aa97,{'text':_0x5d7bd7}),await sleep(0x7d0);}_0x1a2696('Succes\x20Boss!');break;case _0x54b309(0x10e):{if(!_0x4f261f[_0x54b309(0x11d)])return _0x1a2696('Maaf\x20Kak\x20Fitur\x20'+(_0x2bacab+_0x2098f2)+_0x54b309(0x107));if(!_0x317e86&&!_0x1cd00d)return _0x1a2696(_0x54b309(0x16a));if(!_0x5c4bd8)return _0x1a2696(_0x54b309(0x14e)+(_0x2bacab+_0x2098f2));if(!q)return _0x1a2696(_0x54b309(0x117));let _0x1ef983=(q?q:'')+_0x54b309(0x16d);for(let _0x58a65c of _0x605160){_0x1ef983+=_0x54b309(0x18b)+_0x58a65c['id'][_0x54b309(0x125)]('@')[0x0]+'\x0a';}_0x4c2817[_0x54b309(0xff)](_0x3284e7,{'text':_0x1ef983,'mentions':_0x605160[_0x54b309(0x121)](_0x3de34a=>_0x3de34a['id'])},{'quoted':_0x4f261f});}break;case _0x54b309(0x127):{if(!_0x1cd00d)return _0x3ba0af();if(!_0x5d7bd7)return _0x1a2696('Contoh\x20'+(_0x2bacab+_0x2098f2)+_0x54b309(0x124));if(!_0x342e23(_0x4d36be[0x0])&&!_0x4d36be[0x0][_0x54b309(0x110)](_0x54b309(0x151)))return _0x1a2696('Link\x20Invalid!');let _0x562589=_0x4d36be[0x0][_0x54b309(0x125)](_0x54b309(0xfc))[0x1];await _0x4c2817[_0x54b309(0x152)](_0x562589)[_0x54b309(0x14a)](_0x447b45=>_0x1a2696(util[_0x54b309(0x115)](_0x447b45)))[_0x54b309(0x180)](_0x176179=>_0x1a2696(util[_0x54b309(0x115)](_0x176179)));}break;case'qc':{if(!_0x1080fc){const _0x18bde0=await _0x4c2817[_0x54b309(0x13f)](mentionUser[0x0]),_0x4b9bf0={'type':'quote','format':_0x54b309(0x133),'backgroundColor':_0x54b309(0x17a),'width':0x200,'height':0x300,'scale':0x2,'messages':[{'entities':[],'avatar':!![],'from':{'id':0x1,'name':_0x18bde0,'photo':{'url':ppuser}},'text':quotedMsg['chats'],'replyMessage':{}}]},_0x2ac94=axios[_0x54b309(0x139)](_0x54b309(0x174),_0x4b9bf0,{'headers':{'Content-Type':_0x54b309(0x108)}})[_0x54b309(0x14a)](_0x22d88f=>{const _0x54ce59=_0x54b309,_0x3f3b7a=Buffer[_0x54ce59(0xf6)](_0x22d88f['data'][_0x54ce59(0x17d)]['image'],_0x54ce59(0x17b)),_0x503475={'packname':global[_0x54ce59(0x179)],'author':global[_0x54ce59(0x169)]};_0x4c2817[_0x54ce59(0x101)](_0x3284e7,_0x3f3b7a,m,_0x503475);});}else{if(q){const _0x3057b2={'type':'quote','format':_0x54b309(0x133),'backgroundColor':'#FFFFFF','width':0x200,'height':0x300,'scale':0x2,'messages':[{'entities':[],'avatar':!![],'from':{'id':0x1,'name':_0x30e787,'photo':{'url':ppuser}},'text':q,'replyMessage':{}}]},_0x4f7178=axios[_0x54b309(0x139)](_0x54b309(0x174),_0x3057b2,{'headers':{'Content-Type':_0x54b309(0x108)}})[_0x54b309(0x14a)](_0x50e82b=>{const _0x3bd304=_0x54b309,_0x52ecf8=Buffer[_0x3bd304(0xf6)](_0x50e82b[_0x3bd304(0x17c)][_0x3bd304(0x17d)][_0x3bd304(0x197)],'base64'),_0xb1edc7={'packname':global['packname'],'author':global[_0x3bd304(0x169)]};_0x4c2817[_0x3bd304(0x101)](_0x3284e7,_0x52ecf8,m,_0xb1edc7);});}else _0x1a2696(_0x54b309(0x130)+_0x2098f2+_0x54b309(0x189)+_0x2098f2);}}break;default:}if(_0x522608['startsWith']('>')){if(!_0x1cd00d)return _0x3ba0af();try{let _0x1ec072=await eval(_0x522608['slice'](0x2));if(typeof _0x1ec072!==_0x54b309(0x15c))_0x1ec072=require('util')[_0x54b309(0x160)](_0x1ec072);await _0x1a2696(_0x1ec072);}catch(_0x52667d){_0x1a2696(String(_0x52667d));}}}catch(_0x377429){console[_0x54b309(0x118)](util['format'](_0x377429));let _0x48f291=String(_0x377429);_0x4c2817[_0x54b309(0xff)]('6287705048235@s.whatsapp.net',{'text':_0x48f291});}};function _0x125b(_0x1057b6,_0x3a2088){const _0xea6d69=_0xea6d();return _0x125b=function(_0x125b7c,_0x2b3a2a){_0x125b7c=_0x125b7c-0xf6;let _0x2357d9=_0xea6d69[_0x125b7c];return _0x2357d9;},_0x125b(_0x1057b6,_0x3a2088);}function _0xea6d(){const _0x4f8f09=['Maaf\x20Kak\x20Fitur\x20Ini\x20Hanya\x20Bisa\x20Di\x20Gunakan\x20Di\x20Pribadi\x20Chat','keyword','string','Maaf\x20Kak\x20Fitur\x20','script','pushName','inspect','fromMe','readFileSync','cekmember\x20*idgroup*\x0a│⭔','key','105576COZPGQ','3475cfLyCZ','Update\x20','Otw\x20Boskuuu','author','Maaf\x20Fitur\x20Ini\x20Hanya\x20Bisa\x20Digunakan\x20Oleh\x20Admin\x20Group','pushkontakv2','2172FuWihF','\x0a‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\x0a══✪〘\x20*👥\x20Tag\x20All*\x20〙✪══\x0a','subject','charAt','slice','awesome-phonenumber','child_process','Private\x20Chat','https://bot.lyo.su/quote/generate','redBright','groupMetadata','owner','https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60','packname','#FFFFFF','base64','data','result','participants','5907027JttjfS','catch','length','Penggunaan\x20Salah\x20Silahkan\x20Gunakan\x20Command\x20Seperti\x20Ini\x0a','msg','stringify','owner\x0a│⭔','jadibot','floor','documentMessage','\x20text\x20atau\x20reply\x20pesan\x20dengan\x20perintah\x20','match','➲\x20@','.net','\x0a\x0aitem1.X-ABLabel:Ponsel\x0a\x0aitem2.EMAIL;type=INTERNET:tesheroku123@gmail.com\x0a\x0aitem2.X-ABLabel:Email\x0a\x0aitem3.URL:https://bit.ly/39Ivus6\x0a\x0aitem3.X-ABLabel:YouTube\x0a\x0aitem4.ADR:;;Indonesia;;;;\x0a\x0aitem4.X-ABLabel:Region\x0a\x0aEND:VCARD','imageMessage','jadibot\x0a│⭔','\x20Detik:\x20','./functions.js','idgroup\x0a│⭔','Asia/Jakarta','push','parse','videoMessage','image','from','1186614XBaRik','./owner.json','message','quoted','Succes\x20Boss!','https://chat.whatsapp.com/','text','988472cIyuEx','sendMessage','join\x20*linkgroup*\x0a│⭔','sendImageAsSticker','Jika\x20Mau\x20Push\x20Kontak\x20Gunakan\x20Command\x20Di\x20Bawah\x0a','remoteJid','\x20Orang','syntax-error',',\x20Itu\x20Owner\x20Ku\x20Dia\x20Lagi\x20Need\x20Kontak\x20Cewek\x20Save\x20Ya\x20Buat\x20Cewek,\x20Bytheway\x20Jangan\x20Galak-galak\x20Ya.','\x20Hanya\x20Bisa\x20Di\x20Gunakan\x20Di\x20Dalam\x20Group\x0aUntuk\x20Memasukan\x20Bot\x20Ke\x20Dalam\x20Group\x20Yang\x20Di\x20Ingin\x20Kan\x0aSilahkan\x20Ketik\x20Command\x20.join\x20linkgroup','application/json','*\x0a\x0a╭─▸\x20*LIST\x20FITUR*\x0a│⭔','user','13361450AiUVMY','shift','test','tagall','rgb','includes','cheerio','\x20teks','Total\x20Group\x20:\x20','filter','format','\x1b[1;31m~\x1b[1;37m>\x20[\x1b[1;32mCMD\x1b[1;37m]','Teks?','log','@s.whatsapp.net','cekmember\x20idgroup\x0aSalin\x20Id\x20Group\x20Salah\x20Satu\x20Di\x20Atas','./config.js','\x0aJika\x20Mau\x20Cek\x20Member\x20Gunakan\x20Command\x20','isGroup','util','tagall\x20*teks*\x0a│⭔','axios','map','Kamu\x20Siapa?\x20Owner\x20Ku\x20Bukan\x20Kalau\x20Bukan\x20Jangan\x20Gunain\x20Command\x20Ini\x20Ya','entries','\x20linkgc','split','@g.us','join','345822BglsvX','moment-timezone','exports','pushkontak\x20*idgroup|teks*\x0a│⭔','arraybuffer','cekmember','./jadibot','bold','Kirim\x20perintah\x20','Nama\x20Group\x20:\x20','pushkontakv2\x20*teks*\x0a╰────────────˧\x0a\x0aPowered\x20By\x20@','png','qc\x20*teks*\x0a│⭔','\x20Menit:\x20','chat','\x20idgroup|tekspushkontak\x0aUntuk\x20Liat\x20Id\x20Group\x20Silahkan\x20Ketik\x20.idgroup','caption','post','selectedButtonId','buttonsResponseMessage','participant','16WNZqhd','|Hallo\x20Save\x20KirBotz\x0a\x0aCommand\x20Di\x20Atas\x20Teks\x20Nya\x20Hanya\x20Contoh\x20Jadi\x20Ubah\x20Aja\x20Yaa','getName','Waitt\x20Bos\x20Lagi\x20Ambil\x20*IDGROUP*\x0aNote\x20:\x20Jika\x20Delay\x20Mohon\x20Maaf','Minta\x20Ke\x20@','endsWith','extendedTextMessage','pushkontak\x20','trim','jimp','conversation','toLowerCase','templateButtonReplyMessage','then','selectedId','Group\x20Chat','\x20Kontak','Maaf\x20Fitur\x20Tersebut\x20Hanya\x20Bisa\x20Digunakan\x20Di\x20Saat\x20Bot\x20Menjadi\x20Admin\x20Group\x0aNOTE\x20:\x20Jadikan\x20Bot\x20Sebagai\x20Admin\x20Jika\x20Ingin\x20Menggunakan\x20Fitur\x20','\x0a\x0aitem1.TEL;waid=','cache','whatsapp.com','groupAcceptInvite','green','idgroup','script\x0a│⭔','Jam:\x20','ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789','9wBAgxv','sender'];_0xea6d=function(){return _0x4f8f09;};return _0xea6d();}let file=require['resolve'](__filename);fs['watchFile'](file,()=>{const _0x953669=_0x4c070c;fs['unwatchFile'](file),console[_0x953669(0x118)](chalk[_0x953669(0x175)](_0x953669(0x167)+__filename)),delete require[_0x953669(0x150)][file],require(file);});