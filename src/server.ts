import { connect } from "mongoose";
import config from "./config";
import app from "./app";

const main = async () => {
	try {
		await connect(config.db_uri as string, { dbName: config.db_name });
		console.log("==== Connected to MongoDB ====");

		app.listen(config.port, () => {
			console.log(`Server is running on port ${config.port}`);
		});
	} catch (err) {
		console.error(err);
	}
};
main();
