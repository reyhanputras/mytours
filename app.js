import express from "express";
import tourRouter from "./routes/tour.routes.js";

const app = express();
app.set("query parser", "extended");
app.use(express.json());
app.use("/api/v1/tours", tourRouter);
export default app;
