import { PrismaClient } from "@prisma/client";
import { log } from "console";
import { Request, Response } from "express"

export class MainController {
    getAllStorages = async(req:Request, res:Response) =>{
        const prisma = new PrismaClient()
        try {
            const storages = await prisma.taskStorage.findMany(
                {
                    include: {
                      duration: {
                        select: {
                          name: true
                        }
                      }
                    }
                }
            )
            res.send(storages)
            res.end()
        } catch (error) {
            res.status(500).send(error)
            res.end()
        }
    }
    getLastTenStorages = async(req:Request, res:Response) =>{
        const prisma = new PrismaClient()
        try {
            const storages = await prisma.taskStorage.findMany(
                {
                    take: 10,
                    orderBy: {
                        createdAt: 'desc'
                    },
                    include: {
                      duration: {
                        select: {
                          name: true
                        }
                      }
                    }
                }
            )
            res.send(storages)
            res.end()
        } catch (error) {
            res.status(500).send(error)
            res.end()
        }
    }

    getTasksFromStorage = async(req:Request, res:Response) =>{
      const id = req.params.id;
      console.log(id);
      const prisma = new PrismaClient()

      const tasks = await prisma.task.findMany({
        where: {
          storageId: parseInt(id)
        }
      })
      console.log(JSON.stringify(tasks));
      res.send(tasks);
        
    }
    createTaskStorage = async(req:Request, res:Response) =>{
        const prisma = new PrismaClient()
        
        const { name, description, durationId } = req.body
        try {
        const taskStorage = await prisma.taskStorage.create({
            data: {
              name: name,
              description: description,
              durationId: durationId,
            },
        })
            res.send(taskStorage)
            res.end()
        } catch (error) {
            res.status(500).send(error)
            res.end()
        }
    }

    deleteTaskStorage = async(req:Request, res:Response) =>{
        res.send("Hello World");
    }
    addTask = async(req:Request, res:Response) =>{
      const { name, description, dueDate, priority, tags, storageId } = req.body
        const prisma = new PrismaClient()
        const task = await prisma.task.create({
            data: {
                name: name,
                description: description,
                DueTo: dueDate,
                tags: tags,
                priorityId: priority,
                storageId: storageId,
              },
          })
        console.log(task);
        
        return task;
    }
    editTask = async(req:Request, res:Response) =>{
        const prisma = new PrismaClient()
        const {id ,name, description, dueDate, priority, tags, storageId} = req.body
        const task = await prisma.task.update({
            where: {
                id: id,
              },
            data: {
              name: name,
              description: description,
              DueTo: dueDate,
              tags: tags,
              priorityId: priority,
              storageId: storageId,
            },
        })
        console.log(task);
        
        return task;
    }
    deleteTask = async(req:Request, res:Response) =>{
        console.log(req.body.id);
        
        const prisma = new PrismaClient()
        const task = await prisma.task.delete({
            where: {
                id : req.body.id
            }
        })
        return task;
    }
    SearchTask = async(req:Request, res:Response) =>{   
      const param = req.params.param
        const prisma = new PrismaClient()
        // const priority = await prisma.priority.findMany({
        //   where: {
        //     name: {
        //       startsWith: param,
        //     }
        //   }
        // })
        
        const task = await prisma.task.findMany({
          where: {
            OR: [
              {
                name: {
                  startsWith: param, // Поиск по имени, содержащему ключевое слово
                },
              },
              {
                tags: {
                  startsWith: param, // Поиск по тегам, содержащим ключевое слово
                },
              },
              {
                description: {
                  startsWith: param, // Поиск по описанию, содержащему ключевое слово
                },
              },
              // {
              //   priorityId: priority[0].id
              // }
            ],
          }
        })
        res.send(task);
    }
    SearchTaskbyId = async(req:Request, res:Response) =>{
        console.log(req.params.id);
      
        const prisma = new PrismaClient()
        const task = await prisma.task.findUnique({
            where: {
                id : parseInt(req.params.id)
            }
        })
        console.log(task);
        
        res.end(JSON.stringify( task));
    }

}