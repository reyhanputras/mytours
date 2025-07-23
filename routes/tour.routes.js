import { Router } from "express";
import {
  getAllTours,
  createTour,
  getTourbyId,
  updateTour,
  deleteTour,
  getTourStats,
  getMonthlyPlan,
} from "../controllers/tour.controller.js";

const tourRouter = Router();

tourRouter.route("/monthly-plan/:year").get(getMonthlyPlan);
tourRouter.route("/stats").get(getTourStats);
tourRouter.route("/").get(getAllTours).post(createTour);
tourRouter.route("/:id").get(getTourbyId).patch(updateTour).delete(deleteTour);

export default tourRouter;
