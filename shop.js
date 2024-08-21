let shopUrl = "https://www.wildberries.ru/";

const setNewShopUrl = (newUrl) => {
	shopUrl = newUrl;
	console.log("New shop URL set:", shopUrl);
};

const getShopUrl = () => {
	console.log(shopUrl);
	return shopUrl;
};

module.exports = { getShopUrl, setNewShopUrl };
