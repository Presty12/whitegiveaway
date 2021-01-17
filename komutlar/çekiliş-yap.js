const ms = require('ms')
const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = ayarlar.prefix 
 if(!message.member.permissions.has('ADMINISTRATOR')) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
    message.channel.send(embed);
    return;
  }
    let giveawayChannel = message.mentions.channels.first();
    if(!giveawayChannel){
        return message.channel.send(`:x: Lütfen bir **kanal süre**, **kazanan** ve **ödül** belirtin!\nÖrnek kullanım: \`${prefix}çekiliş #kanal 1h 1 Nitro Classic\``);
    }

    let giveawayDuration = args[1];
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(`:x: Lütfen bir **kanal süre**, **kazanan** ve **ödül** belirtin!\nÖrnek kullanım: \`${prefix}çekiliş #kanal 1h 1 Nitro Classic\``);
    }

    let giveawayNumberWinners = args[2];
    if(isNaN(giveawayNumberWinners)){
        return message.channel.send(`:x: Lütfen bir **kanal süre**, **kazanan** ve **ödül** belirtin!\nÖrnek kullanım: \`${prefix}çekiliş #kanal 1h 1 Nitro Classic\``);
    }

    let giveawayPrize = args.slice(3).join(' ');
    if(!giveawayPrize){
        return message.channel.send(`:x: Lütfen bir **kanal süre**, **kazanan** ve **ödül** belirtin!\nÖrnek kullanım: \`${prefix}çekiliş #kanal 1h 1 Nitro Classic\``);
    }

 client.giveawaysManager.start(giveawayChannel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayNumberWinners,
            hostedBy: message.author,
            messages: {
            giveaway: "🎉 **ÇEKİLİŞ** 🎉",
                giveawayEnded: "🎉 **ÇEKİLİŞ SONLANDI** 🎉",
                timeRemaining: "Kalan süre: **{duration}**!",
                inviteToParticipate: "🎉 emojisine basarak çekilişe katılabilirsin!",
                winMessage: "🎉 Tebrikler, {winners}! **{prize}** ödülünü kazandınız!",
                embedFooter: "Çekiliş",
                noWinner: "Kazanan kim ben bile bilmiyorum!",
                hostedBy: "Sponsor: {user}",
                winners: "Kazanan ",
                endedAt: "Bitiş tarihi",
units: {
                    seconds: "Saniye",
                    minutes: "Dakika",
                    hours: "Saat",
                    days: "Gün",
                    pluralS: false 
                }
            }
        });
    message.channel.send(`🎉 Bir çekiliş başladı 🎉 
 Başladığı kanal : ${giveawayChannel} 🎉🎉🎉`).then(a => a.delete({timeout: 10000}));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çekiliş'],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş',
  description: 'çekiliş',
  usage: 'çekiliş'
};
