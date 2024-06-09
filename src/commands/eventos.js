// eventos.js

const { MessageEmbed } = require('discord.js');

// List upcoming events and associated rewards
module.exports = {
  name: 'eventos',
  description: 'Lista los próximos eventos y las recompensas asociadas a ellos.',
  execute(message, args) {
    // Fetch upcoming events from a database or API
    const upcomingEvents = [
      {
        name: 'Evento 1',
        date: '2022-01-01',
        reward: 'Ficha OWL',
      },
      {
        name: 'Evento 2',
        date: '2022-02-01',
        reward: 'Pase de batalla',
      },
      {
        name: 'Evento 3',
        date: '2022-03-01',
        reward: 'Ficha OWL',
      },
    ];

    // Create an embed to display the upcoming events
    const embed = new MessageEmbed()
      .setTitle('Próximos eventos')
      .setDescription('Estos son los próximos eventos y las recompensas asociadas a ellos:')
      .setColor('#0099ff');

    upcomingEvents.forEach((event) => {
      embed.addField(event.name, `Fecha: ${event.date}\nRecompensa: ${event.reward}`);
    });

    // Send the embed as a message
    message.channel.send(embed);
  },
};
