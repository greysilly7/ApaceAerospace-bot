/* eslint-disable max-len */
const {MessageEmbed} = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const member= message.mentions.members.first();
  const images = ['https://media0.giphy.com/media/3ZnBrkqoaI2hq/giphy.gif?cid=ecf05e47a04f6d3c6d7f959b6b190b1cda88ce59d34605ac&rid=giphy.gif', 'https://media2.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif?cid=ecf05e477106e2fc0d1ed0906595b65067262ab482a12b5d&rid=giphy.gif', 'https://media3.giphy.com/media/u9BxQbM5bxvwY/giphy.gif?cid=ecf05e4761cb7e6abcb1ce7cd71e633f635d55fb953813bb&rid=giphy.gif', 'https://media1.giphy.com/media/ZQN9jsRWp1M76/giphy.gif?cid=ecf05e476aa1056a2b1672677a82b9415bb06e0a8925f15a&rid=giphy.gif', 'https://media2.giphy.com/media/IRUb7GTCaPU8E/giphy.gif?cid=ecf05e4791de990a3943c06a4dd525151df03fc7667807a5&rid=giphy.gif', 'https://media0.giphy.com/media/BXrwTdoho6hkQ/giphy.gif?cid=ecf05e4783c7a876015ea9dd1be3b1cfeb7d9af9183e1f97&rid=giphy.gif'];
  const image = Math.floor(Math.random() * images.length);
  if (!member) return message.channel.send('you need to mention someone');
  if (member.id === message.author.id) {
    const HugEmbed = new MessageEmbed()
        .setTitle(`${message.author.username} you can't hug yourself but come here I'll hug you`)
        .setImage(String([images[image]]))
        .setColor(0xF000FF);
    message.channel.send(HugEmbed);
  } else {
    const HugEmbed = new MessageEmbed()
        .setTitle(`${message.author.username} hugs ${member.user.username}, how cute`)
        .setImage(String([images[image]]))
        .setColor(0xF000FF);
    message.channel.send(HugEmbed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 'User',
};

exports.help = {
  name: 'hug',
  category: 'Fun',
  description: 'It just hugs someone.',
  usage: 'hug <user>',
};
