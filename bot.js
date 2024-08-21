const { Bot, session } = require("grammy");
const { adminMenu } = require("./menus/adminMenu");
const {
	conversations,
	createConversation,
} = require("@grammyjs/conversations");
const { hydrate } = require("@grammyjs/hydrate");

const { startMenu } = require("./menus/startMenu");
const { ownerMenu } = require("./menus/ownerMenu");
const { setShopUrl } = require("./conversations/setShopUrl");
const { changeAdminPassword } = require("./conversations/changeAdminPassword");
const { changeOwnerPassword } = require("./conversations/changeOwnerPassword");
const { handleNegativeReview } = require("./conversations/handleNegativeReview");
const { notifyUsers } = require("./conversations/notifyUsers");
const { handlePositiveReview } = require("./conversations/handlePositiveComment");
require("dotenv").config();

const token = process.env.TOKEN;

const bot = new Bot(token);
bot.use(hydrate());
bot.use(
	session({
		initial() {
			return {};
		},
	})
);

bot.api.setMyCommands([
	{ command: "start", description: "Начать работу с ботом" },
	{ command: "help", description: "Помощь" },
]);

bot.use(conversations());
bot.use(createConversation(setShopUrl));
bot.use(createConversation(changeAdminPassword));
bot.use(createConversation(changeOwnerPassword));
bot.use(createConversation(handleNegativeReview));
bot.use(createConversation(handlePositiveReview));
bot.use(createConversation(notifyUsers));
bot.use(startMenu);
bot.use(adminMenu);
bot.use(ownerMenu);
module.exports = { bot };
