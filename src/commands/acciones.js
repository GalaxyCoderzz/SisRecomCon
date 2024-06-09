// This file exports a command handler for the !acciones command.
// It displays a list of all actions that grant points.

const actions = [
  {
    name: "Participate in an event",
    points: 50
  },
  {
    name: "Help a teammate",
    points: 20
  },
  {
    name: "Complete a special task",
    points: 30
  },
  {
    name: "Provide valuable feedback",
    points: 10
  },
  {
    name: "Contribute code",
    points: 15
  }
];

module.exports = {
  name: 'acciones',
  description: 'Displays a list of all actions that grant points.',
  execute(message, args) {
    let response = 'Actions that grant points:\n\n';
    actions.forEach(action => {
      response += `${action.name} - ${action.points} points\n`;
    });
    message.channel.send(response);
  }
};