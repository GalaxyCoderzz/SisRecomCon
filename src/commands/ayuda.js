// ayuda.js

// Import the necessary modules
const Discord = require('discord.js');

// Command handler for the !ayuda command
module.exports = {
  name: 'ayuda',
  description: 'Proporciona información sobre cómo usar los comandos del bot y detalles del sistema de recompensas.',
  execute(message, args) {
    // Create an embed message with the help information
    const ayudaEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Ayuda - Sistema de Recompensas por Contribución')
      .setDescription('¡Bienvenido al sistema de recompensas por contribución! Aquí tienes información sobre cómo usar los comandos del bot y detalles del sistema de recompensas.')
      .addField('Comandos Disponibles', 'Estos son los comandos disponibles:')
      .addField('!puntos', 'Muestra tus puntos actuales.')
      .addField('!top', 'Muestra una lista de los miembros con más puntos de contribución.')
      .addField('!recompensas', 'Lista todas las recompensas disponibles y los puntos necesarios para canjearlas.')
      .addField('!canjear [recompensa]', 'Permite canjear puntos por una recompensa específica.')
      .addField('!acciones', 'Muestra una lista de todas las acciones que otorgan puntos.')
      .addField('!eventos', 'Lista los próximos eventos y las recompensas asociadas a ellos.')
      .addField('!ayuda', 'Proporciona información sobre cómo usar los comandos del bot y detalles del sistema de recompensas.')
      .setFooter('¡Disfruta del sistema de recompensas por contribución!');

    // Send the embed message to the channel
    message.channel.send(ayudaEmbed);
  },
};