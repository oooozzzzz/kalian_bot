const { cancelKeyboard } = require("../keyboards/cancelKeyboard");
const { toAdminMenuKeyboard } = require("../keyboards/toAdminMenuKeyboard");
const { setNewShopUrl } = require("../shop");

const setShopUrl = async (conversation, ctx) => {
	ctx.reply("Введите ссылку на ваш магазин", {
		reply_markup: cancelKeyboard,
	});
	const shopUrlCtx = await conversation.wait();
	const shopUrl = shopUrlCtx.message?.text;
	if (shopUrl) {
		setNewShopUrl(shopUrl);
		ctx.reply("Теперь в Ваш магазин будет вести ссылка " + shopUrl, {
			reply_markup: toAdminMenuKeyboard,
		});
	} else {
		ctx.reply("Отмена операции", { reply_markup: toAdminMenuKeyboard });
	}
};

module.exports = { setShopUrl };
