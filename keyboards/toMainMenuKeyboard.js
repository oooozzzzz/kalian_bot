const { InlineKeyboard } = require("grammy");
const { getShopUrl } = require("../shop");

const toMainMenuKeyboard = () => {
	const shopUrl = getShopUrl();
	const menu = new InlineKeyboard()
		.url("Перейти в магазин", shopUrl)
		.row()
		.text("Продолжить работу с ботом", "toMenu");
	return menu;
};
module.exports = { toMainMenuKeyboard };
