// File: /contribution-rewards-bot/src/commands/canjear.js

const rewards = require('../utils/rewards');
const pointsSystem = require('../utils/pointsSystem');

module.exports = {
  name: 'canjear',
  description: 'Allows the user to redeem points for a specific reward.',
  usage: '!canjear [recompensa]',
  execute(message, args) {
    // Check if a reward is specified
    if (!args[0]) {
      return message.reply('Please specify a reward to redeem.');
    }

    const rewardName = args[0].toLowerCase();

    // Get the reward by name
    const reward = rewards.getRewardByName(rewardName);

    // Check if the reward exists
    if (!reward) {
      return message.reply('Invalid reward. Please check the available rewards using the `!recompensas` command.');
    }

    // Get the user's current points
    const userPoints = pointsSystem.getUserPoints(message.author.id);

    // Check if the user has enough points to redeem the reward
    if (userPoints < reward.points) {
      return message.reply('You do not have enough points to redeem this reward.');
    }

    // Deduct the points from the user's total
    pointsSystem.deductPoints(message.author.id, reward.points);

    // Grant the reward to the user
    rewards.grantReward(message.author.id, reward);

    return message.reply(`Congratulations! You have successfully redeemed the ${reward.name} reward.`);
  },
};

// End of file