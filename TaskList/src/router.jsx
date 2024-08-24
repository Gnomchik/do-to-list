import React from 'react'
import { Navigate, createBrowserRouter } from "react-router-dom";
import MainBody from './components/BodyComponents/MainBody'
import AddEdit from './components/BodyComponents/components/AddEdit'
import About from './components/BodyComponents/components/About'
import Search from './components/BodyComponents/components/Search'
import App from './App';
import Tasks from './components/BodyComponents/components/Tasks';
import CreateStorage from './components/BodyComponents/components/CreateStorage';
import TaskList from './components/BodyComponents/components/TaskList';
import Add from './components/BodyComponents/components/Add';

export const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <MainBody />,
        },
        {
            path: "/edit/:id",
            element: <AddEdit />
        },
        {
            path: "/add/:id",
            element: <Add />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/tasks",
            element:<Tasks />
        },
        {
            path: "/search",
            element:<Search />
        },
        {
            path: "/createStorage",
            element:<CreateStorage />
        },
        {
            path: "/tasks/:id",
            element:<TaskList />
        }
    ]
    }
])
