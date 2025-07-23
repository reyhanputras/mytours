import app from "./app.js";
import { PORT } from "./config/env.js";
import connectDB from "./database/mongodb.js";

app.listen(PORT, async () => {
  console.log("server is running");
  connectDB();
});
