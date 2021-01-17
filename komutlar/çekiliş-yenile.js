const ms = require('ms');
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
 if(!message.member.permissions.has('ADMINISTRATOR')) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
    message.channel.send(embed);
    return;
  }

let messageID = args[0]
    if(!messageID){
        return message.channel.send(':x: Bir mesaj(çekiliş) IDsi belirtin');
    }
client.giveawaysManager.reroll(messageID, {
    messages: {
        congrat: ":tada: Yeni kazanan veya kazananlar: {winners}! Tebrikler!",
        error: "Yeterli katılım olmadığından bir kişi seçilemedi"
                    }   
}).catch((err) => {
    message.channel.send("`"+ messageID +"` için çekiliş bulamadım, lütfen kontrol edin ve tekrar deneyin");
})
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reroll'],
  permLevel: 0
};

exports.help = {
  name: 'reroll',
  description: 'reroll',
  usage: 'reroll'
};