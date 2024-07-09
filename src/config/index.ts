import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const isDevMode = process.env.NODE_ENV === "development";
const config = {
	db_uri: isDevMode ? process.env.DB_URI_LOCAL : process.env.DB_URI_PROD,
	db_name: process.env.DB_NAME,
	port: process.env.PORT
};

export default config;
