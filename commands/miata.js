const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
data: new SlashCommandBuilder()
    .setName('miata')
    .setDescription('Replies with Miata picture!'),
async execute(interaction) {
    await interaction.client.reply('Miata picture!');
},
};