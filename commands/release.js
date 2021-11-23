const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('release')
        .setDescription('When is the next update!?!?'),
    async execute(interaction) {
        //const user = interaction.getUser('');
        await interaction.reply(`Hey there,\nThis particular mod will release when its ready for each time someone asks us when it releases we add one day\n
        Have a nice day though :P`);
    }
}