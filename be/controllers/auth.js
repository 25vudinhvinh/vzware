const Account = require("../models/accountModel");

const authController = {
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                res.status(401).json({
                    success: false,
                    message: "Vui long cap username va password",
                });
            }

            const user = await Account.login(username, password);

            res.status(200).json({
                success: true,
                message: "Dang nhap thanh cong",
                data: user,
            });
        } catch (err) {
            res.status(401).json({
                success: false,
                message: err.message,
            });
        }
    },

    register: async (req, res) => {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                res.status(401).json({
                    success: false,
                    message: "Vui long cap username va password",
                });
            }
            const user = await Account.register(username, password);

            res.status(200).json({
                success: true,
                message: "Dang ky thanh cong",
                data: user,
            });
        } catch (err) {
            res.status(401).json({
                success: false,
                message: err.message,
            });
        }
    },
};

module.exports = authController;
