// File: /contribution-rewards-bot/src/commands/recompensas.js

const rewards = require('../utils/rewards');

module.exports = {
  name: 'recompensas',
  description: 'Lista todas las recompensas disponibles y los puntos necesarios para canjearlas.',
  execute(message, args) {
    const availableRewards = rewards.getAvailableRewards();
    
    if (availableRewards.length === 0) {
      message.channel.send('No hay recompensas disponibles en este momento.');
    } else {
      let response = 'Recompensas disponibles:\n\n';
      
      availableRewards.forEach((reward) => {
        response += `**${reward.name}**: ${reward.points} puntos\n`;
      });
      
      message.channel.send(response);
    }
  },
};