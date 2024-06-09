// File: /contribution-rewards-bot/src/bot.js

const Discord = require('discord.js');
const config = require('../config/config.json');
const rewards = require('./utils/rewards');
const pointsSystem = require('./utils/pointsSystem');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'puntos') {
    const userPoints = pointsSystem.getUserPoints(message.author.id);
    message.channel.send(`Tus puntos actuales son: ${userPoints}`);
  } else if (command === 'top') {
    const topMembers = pointsSystem.getTopMembers();
    message.channel.send(`Los miembros con más puntos de contribución son: ${topMembers.join(', ')}`);
  } else if (command === 'recompensas') {
    const availableRewards = rewards.getAvailableRewards();
    message.channel.send('Las recompensas disponibles son:');
    availableRewards.forEach((reward) => {
      message.channel.send(`${reward.name} - Puntos necesarios: ${reward.points}`);
    });
  } else if (command === 'canjear') {
    const rewardName = args.join(' ');
    const success = rewards.redeemReward(message.author.id, rewardName);
    if (success) {
      message.channel.send(`Has canjeado la recompensa "${rewardName}"`);
    } else {
      message.channel.send(`No tienes suficientes puntos para canjear la recompensa "${rewardName}"`);
    }
  } else if (command === 'acciones') {
    const actions = pointsSystem.getAllActions();
    message.channel.send('Las acciones que otorgan puntos son:');
    actions.forEach((action) => {
      message.channel.send(`${action}`);
    });
  } else if (command === 'eventos') {
    const upcomingEvents = rewards.getUpcomingEvents();
    message.channel.send('Los próximos eventos son:');
    upcomingEvents.forEach((event) => {
      message.channel.send(`${event.name} - Recompensa: ${event.reward}`);
    });
  } else if (command === 'ayuda') {
    message.channel.send('¡Bienvenido al sistema de recompensas por contribución!');
    message.channel.send('Aquí tienes una lista de comandos disponibles:');
    message.channel.send('!puntos - Muestra tus puntos actuales');
    message.channel.send('!top - Muestra los miembros con más puntos de contribución');
    message.channel.send('!recompensas - Lista todas las recompensas disponibles');
    message.channel.send('!canjear [recompensa] - Canjea puntos por una recompensa');
    message.channel.send('!acciones - Muestra las acciones que otorgan puntos');
    message.channel.send('!eventos - Lista los próximos eventos y sus recompensas');
    message.channel.send('!ayuda - Muestra información sobre cómo usar los comandos y el sistema de recompensas');
  }
});

client.login(config.token);
