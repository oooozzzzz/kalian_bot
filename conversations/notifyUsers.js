const { cancelKeyboard } = require("../keyboards/cancelKeyboard");
const { toAdminMenuKeyboard } = require("../keyboards/toAdminMenuKeyboard");
const { sendMessageToUsers } = require("../services");

const notifyUsers = async (conversation, ctx) => {
	const req = await ctx.reply("Введите или перешлите сообщение, которое будет отправлено всем пользователям", {reply_markup: cancelKeyboard});
	const notificationCtx = await conversation.wait();
	if (!notificationCtx.message?.text && !notificationCtx.message?.caption) {
		console.log(notificationCtx)
    return ctx.reply("Операция была отменена", {reply_markup: toAdminMenuKeyboard});
  }
	await ctx.reply("Если Вы видите это сообщение, значит рассылка началась. Это займет некоторое время. После завершения рассылки Вы увидите сообщение с отчетом.");
	await sendMessageToUsers(notificationCtx);
};

module.exports = { notifyUsers };
