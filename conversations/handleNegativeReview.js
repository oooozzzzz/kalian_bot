const { addComment } = require("../db");
const { toMainMenuKeyboard } = require("../keyboards/toMainMenuKeyboard");

const handleNegativeReview = async (conversation, ctx) => {
	const isPositive = false;
	await ctx.reply("Что Вы хотели бы улучшить?");
	const reviewCtx = await conversation.wait();
	const comment = reviewCtx.message?.text;
	await addComment({ id: ctx.from.id, comment, isPositive });
	try {
		ctx.reply(
			`Спасибо за отзыв! Обратная связь помогает нам становиться лучше!
Твой промокод: #ПРОМОКОД`,
			{ reply_markup: toMainMenuKeyboard() }
		);
	} catch (error) {}
	return;
};

module.exports = { handleNegativeReview };