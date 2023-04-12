const { SlashCommandBuilder } = require('discord.js');
const { createInsult } = require('./createInsult');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('insult')
        .setDescription('Give me an insult'),
    async execute(interaction) {
        await interaction.reply(createInsult());
    }
}