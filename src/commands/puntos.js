// /contribution-rewards-bot/src/commands/puntos.js

const { getUserPoints } = require('../utils/pointsSystem');

module.exports = {
  name: 'puntos',
  description: 'Muestra los puntos actuales del usuario que ejecuta el comando.',
  execute(message, args) {
    // Get the user's ID or mention
    const userId = args[0] || message.author.id;

    // Get the user's points
    const points = getUserPoints(userId);

    // Send the points as a reply
    message.reply(`Tienes ${points} puntos de contribución.`);
  },
};