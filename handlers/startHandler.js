const { createUser } = require("../db");
const { startMenu } = require("../menus/startMenu");

module.exports = async (ctx) => {
	await ctx.msg.delete()
	await createUser(ctx.from.id, ctx.from.first_name);
	await ctx.reply(`Привет, ${ctx.from.first_name}
Добро пожаловать в бот (название магазина)`, {reply_markup: startMenu});
};
