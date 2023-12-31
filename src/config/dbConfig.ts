export const DB_CONFIG = {
  user: process.env.POSTGRES_USER || "test_user",
  host: process.env.POSTGRES_HOST || "postgres",
  database: process.env.POSTGRES_DB || "test_db",
  password: process.env.POSTGRES_PASSWORD || "test_password",
  port: parseInt(process.env.POSTGRES_PORT || "5432", 10),
};

export const NOTES_TABLE_NAME = "notes_table";
