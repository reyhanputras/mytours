import { config } from "dotenv";

config({ path: ".env" });

export const { PORT, DATABASE } = process.env;
