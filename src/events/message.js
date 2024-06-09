// contribution-rewards-bot/src/events/message.js

const { prefix } = require('../config/config.json');
const { executeCommand } = require('../utils/commandHandler');

module.exports = {
  name: 'message',
  execute(message) {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    executeCommand(command, args, message);
  },
};

// This file is intentionally left blank. The 'message' event handler listens for messages and executes the corresponding command if it matches the bot's prefix. The command handling logic is implemented in the 'executeCommand' function from the 'commandHandler' utility module.