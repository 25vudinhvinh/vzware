const pool = require("../db/index");

const Account = {
    login: async (username, password) => {
        try {
            const query = `SELECT * FROM user_accounts WHERE username=$1 AND password=$2`;

            const values = [username, password];
            const result = await pool.query(query, values);

            if (result.rows.length > 0) {
                return result.rows[0];
            } else {
                throw new Error("Tên đăng nhập hoặc mật khẩu không đúng");
            }
        } catch (err) {
            throw new Error(`Error model login: ${err.message}`);
        }
    },

    register: async (username, password) => {
        try {
            // Kiểm tra xem username đã tồn tại chưa
            const checkQuery = `SELECT user_id FROM user_accounts WHERE username = $1`;
            const checkResult = await pool.query(checkQuery, [username]);

            if (checkResult.rows.length > 0) {
                throw new Error("Username đã tồn tại");
            }

            // Thực hiện đăng ký
            const insertQuery = `INSERT INTO user_accounts (username, password) VALUES ($1, $2) RETURNING user_id`;
            const values = [username, password];
            const result = await pool.query(insertQuery, values);

            if (result.rows.length > 0) {
                return result.rows[0];
            } else {
                throw new Error("Tạo tài khoản không thành công");
            }
        } catch (err) {
            throw new Error(`Error model register: ${err.message}`);
        }
    },
};

module.exports = Account;
