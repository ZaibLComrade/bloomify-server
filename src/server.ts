import { connect } from "mongoose";
import config from "./config";
import app from "./app";
import {Server} from "http";

let server: Server;
const main = async () => {
	try {
		await connect(config.db_uri as string, { dbName: config.db_name });
		console.log("==== Connected to MongoDB ====");

		server = app.listen(config.port, () => {
			console.log(`Server is running on port ${config.port}`);
		});
	} catch (err) {
		console.error(err);
	}
};
main();


process.on("unhandledRejection", () => {
	console.log("Unhandled rejection detected. Shutting down...");
	if(server !== undefined) {
		server.close(() => {
			process.exit(1);
		})
	}
	process.exit(1)
})

process.on("uncaughtException", () => {
	console.log("Uncaught exception detected. Shutting down");
	process.exit(1);
})
