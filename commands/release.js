const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('release')
        .setDescription('When is the next update!?!?'),
    async execute(interaction) {
        await interaction.reply(`Hey there,\nThis particular mod will release when its ready for each time someone asks us when it releases we add one day\nHave a nice day though :P`);
    }
}