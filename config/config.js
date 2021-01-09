require("dotenv").config();
const { DB_DEV_PASSWORD } = process.env;

module.exports = {
  development: {
    username: "postgres",
    password: DB_DEV_PASSWORD,
    database: "misgastosdev",
    host: "localhost",
    dialect: "postgres",
  },
  production: {
    use_env_variable: "DB_URI",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
