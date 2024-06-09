// This file exports a command handler for the !top command.
// It retrieves and displays a list of members with the highest contribution points.

const { MessageEmbed } = require('discord.js');
const { getTopMembers } = require('../utils/pointsSystem');

module.exports = {
  name: 'top',
  description: 'Displays the top members with the highest contribution points.',
  execute(message) {
    const topMembers = getTopMembers(); // Retrieve the top members with the highest contribution points

    if (topMembers.length === 0) {
      // If there are no top members, display a message
      const embed = new MessageEmbed()
        .setColor('#ff0000')
        .setDescription('No members found.');

      message.channel.send(embed);
      return;
    }

    // Create an embed to display the top members
    const embed = new MessageEmbed()
      .setColor('#00ff00')
      .setTitle('Top Members')
      .setDescription('Here are the members with the highest contribution points:');

    // Add each top member to the embed
    topMembers.forEach((member, index) => {
      embed.addField(`${index + 1}. ${member.username}`, `Points: ${member.points}`);
    });

    message.channel.send(embed);
  },
};