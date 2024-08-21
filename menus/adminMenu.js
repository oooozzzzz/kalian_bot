const { Menu } = require("@grammyjs/menu");

const adminMenu = new Menu("adminMenu")
	.text("Оповестить пользователей", async (ctx) => {
		ctx.msg.delete();
		await ctx.conversation.enter("notifyUsers");
	})
	.row()
	// .text(
	// 	"Добавить опрос",
	// 	async (ctx) => await ctx.reply("Конструктор создания опроса")
	// )
	// .row()
	.text("Добавить ссылку на свой магазин", async (ctx) => {
		ctx.msg.delete();
		await ctx.conversation.enter("setShopUrl");
	});

module.exports = { adminMenu };
