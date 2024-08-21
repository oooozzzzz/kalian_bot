const { bot } = require("./bot");
const startHandler = require("./handlers/startHandler");
const adminHandler = require("./handlers/adminHandler");
const { toMainMenu, toAdminMenu, toOwnerMenu } = require("./routes");
const ownerHandler = require("./handlers/ownerHandler");

bot.command("start", (ctx) => startHandler(ctx));

bot.callbackQuery("toMenu", async (ctx) => {
	toMainMenu(ctx);
	ctx.answerCallbackQuery();
});
bot.callbackQuery("toAdminMenu", async (ctx) => {
	toAdminMenu(ctx);
	ctx.answerCallbackQuery();
});
bot.callbackQuery("toOwnerMenu", async (ctx) => {
	toOwnerMenu(ctx);
	ctx.answerCallbackQuery();
});
bot.callbackQuery("ok", async (ctx) => {
	ctx.answerCallbackQuery();
});
bot.callbackQuery("cancel", async (ctx) => {
	try {
		ctx.msg.delete();
	} catch (error) {}
	ctx.conversation.exit();
	ctx.answerCallbackQuery();
});

bot.on("message", async (ctx) => {
	await adminHandler(ctx);
	await ownerHandler(ctx);
});

bot.start();
