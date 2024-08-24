import { Router } from "express";
import { MainController } from "../controller/mainController";
export const mainRouter = Router();
const controller = new MainController();
mainRouter.get("/storages", controller.getAllStorages);
mainRouter.get("/storages/lastTen", controller.getLastTenStorages);
mainRouter.get("/storages/:id", controller.getTasksFromStorage);
mainRouter.put("/storages/add", controller.createTaskStorage);
mainRouter.put("/task/edit", controller.editTask);
mainRouter.get("/task/search/:id", controller.SearchTaskbyId);
mainRouter.delete("/task/delete", controller.deleteTask);
mainRouter.put("/task/add", controller.addTask);
mainRouter.get("/search/tasks/:param", controller.SearchTask);


