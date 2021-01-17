const Discord = require('discord.js');
const db = require("quick.db")
const ms = require('ms');
exports.run = async (award, message, args) => {


   
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send("Bu komudu kullanamazsın");
            return;
          }
    
    let gweep = args[0];
    let kazanan = args[1];
    let odul = args[2];
    let zaman = args[3];
    if(!gweep) return message.channel.send("Lütfen doğru girin. Örnek ( mesajidsi kazanankişisayısı ödül zaman)")
    if(!kazanan) return message.channel.send("Lütfen doğru girin. Örnek ( mesajidsi kazanankişisayısı ödül zaman)")
    if(!odul) return message.channel.send("Lütfen doğru girin. Örnek ( mesajidsi kazanankişisayısı ödül zaman)")
    if(!ms(zaman) && zaman) return message.channel.send("Lütfen doğru girin. Örnek ( mesajidsi kazanankişisayısı ödül zaman)")
            award.giveawaysManager.edit(gweep, {
                newWinnerCount: kazanan,
                newPrize: odul,
                addTime: ms(zaman)
            }).then(() => {
                message.channel.send("Çekiliş başarıyla düzenlendi");
            }).catch((err) => {
                message.channel.send("Böyle bir çekiliş bulamadım");
            });
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['edit'],
  permLevel: 0,
};

exports.help = {
  name: 'edit',
  description: 'edit',
  usage: 'edit'
};