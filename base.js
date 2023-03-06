// BASE DE COMANDOS PARA O 'DISCORD.JS V14'
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('')
		.setDescription('')
            .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        /**
         * 
         * @param {ChatInputCommandInteraction} interaction 
         */

        .addUserOption(option => 
            option
                .setName()
                .setDescription()
                .setRequired(true)
            )
            .addStringOption(option =>
            option
                .setName()
                .setDescription()
                .setRequired()
            ),

	async execute(interaction) {

		await interaction.reply();
	},
};
