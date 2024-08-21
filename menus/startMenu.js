const { Menu } = require("@grammyjs/menu");
const { toMainMenuKeyboard } = require("../keyboards/toMainMenuKeyboard");

const startMenu = new Menu("startMenu")
	.text("Возникли трудности при получении заказа", async (ctx) =>
		ctx.reply("В разработке")
	)
	.row()
	.submenu("Оставить отзыв и получить промокод", "pollMenu");

const finishConversationMenu = new Menu("finishConversationMenu")
	.url("Перейти в магазин", "https://www.wildberries.ru/")
	.row()
	.back("Продолжить работу с ботом");

const pollMenu = new Menu("pollMenu")
	//TODO: Добавить обработчик хороших комментариев
	.text("Мне все понравилось!", async (ctx) => {
		await ctx.msg.delete();
		await ctx.conversation.enter("handlePositiveReview")
	})
	.row()
	.text("Есть над чем поработать..", async (ctx) => {
		await ctx.msg.delete();
		await ctx.conversation.enter("handleNegativeReview");
	})
	.row()
	.back("Назад в меню");

startMenu.register([pollMenu, finishConversationMenu]);

module.exports = { startMenu, finishConversationMenu };
