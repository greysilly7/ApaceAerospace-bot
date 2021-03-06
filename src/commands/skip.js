const {MessageEmbed} = require('discord.js');

exports.run = async (client, message, args) => {
  const embed = new MessageEmbed();

  const {channel} = message.member.voice;


  if (!channel) {
    // IF AUTHOR IS NOT IN VOICE CHANNEL
    embed.setAuthor('YOU NEED TO BE IN VOICE CHANNEL :/');
    return message.channel.send(embed);
  }
  const serverQueue = message.client.queue.get(message.guild.id);
  const vote = message.client.vote.get(message.guild.id);
  if (!serverQueue) {
    embed.setAuthor('There is nothing playing that i could skip');
    return message.channel.send(embed);
  }

  const vcvote = Math.floor(message.guild.me.voice.channel.members.size / 2);
  const okie = Math.floor(message.guild.me.voice.channel.members.size / 2 - 1);
  console.log(message.guild.me.voice.channel.members.size);
  if (!message.member.hasPermission('ADMINISTRATOR')) {
    if (vote.vote > okie) {
      serverQueue.connection.dispatcher.end();
      embed.setDescription('VOTE - SKIP | Skipping The Song');
      embed.setThumbnail(this.client.user.displayAvatarURL());
      return message.channel.send(embed);
    }

    if (vote.voters.includes(message.author.id)) {
      return message.channel.send('You already voted for this song');
    }

    if (vcvote === 2) {
      serverQueue.connection.dispatcher.end();
      embed.setDescription('✔ | Skipping The Song');
      embed.setThumbnail(this.client.user.displayAvatarURL());
      return message.channel.send(embed);
    }


    vote.vote++;
    vote.voters.push(message.author.id);
    // eslint-disable-next-line max-len
    return message.channel.send(`You Voted for the Song to Skip, btw we currently need ${Math.floor(vcvote - vote.vote)} votes`);
  }

  serverQueue.connection.dispatcher.end();
  embed.setDescription('✔ | Skipping The Song');
  embed.setThumbnail(this.client.user.displayAvatarURL());
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 'User',
};

exports.help = {
  name: 'skip',
  category: 'Music',
  description: 'It skips the current song.',
  usage: 'skip',
};
