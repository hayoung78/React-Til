import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main/mainPages";
import TodoPage from "../pages/todo/todoPage";
import RootLayout from "../layouts/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "/todo/:todoId",
        element: <TodoPage />,
      },
    ],
  },
]);
export default router;
