const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('miata')
        .setDescription('Replies with a picture of a Miata.'),
    async execute(interaction) {
        await interaction.reply('Picture of Miata');
    },
};