const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports.createUser = async (tg_id, name) => {
	const id = tg_id.toString();
	try {
		await prisma.user.create({
			data: {
				tg_id: id,
				first_name: name,
			},
		});
		return true;
	} catch (error) {
		return false;
	}
};

module.exports.makeAdmin = async (id) => {
	id = id.toString();
	await prisma.user.update({ where: { tg_id: id }, data: { isAdmin: true } });
};

module.exports.addComment = async ({ id, comment, isPositive }) => {
	id = id.toString();
	try {
		await prisma.user.update({
			where: { tg_id: id },
			data: {
				comments: {
					create: {
						content: comment,
						isPositive,
						tg_id: id,
					},
				},
			},
		});
	} catch (error) {}
};

module.exports.getUsers = async () => {
	try {
		const users = await prisma.user.findMany({ select: { tg_id: true } });
		return users;
	} catch (error) {
		return false
	}
};
