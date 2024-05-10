import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { FormPage, FormPageEdit, GroupPage, UserPage, FormRequestPage } from "./Pages";
import { SearchPage } from "./Pages/SearchPage";
// import { UserPage, GroupPage } from "./Pages";

export const Routes = [
    {
        path: "/",
        errorElement: <SearchPage />,
        element: <SearchPage />
    },
    {
        path: "/user/:id",
        element: <UserPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/form/view/:id",
        element: <FormPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/request/view/:id",
        element: <FormRequestPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/form/edit/:id",
        element: <FormPageEdit />,
        errorElement: <SearchPage />,
    },
    {
        path: "/group/:id",
        element: <GroupPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/search",
        element: <SearchPage />,
        errorElement: <SearchPage />,
    },
    {
      path: "/search/:phrase",
      element: <SearchPage />,
      errorElement: <SearchPage />,
    },    
]

const router = createBrowserRouter(Routes, {basename: "/forms"});
// const router = createBrowserRouter(Routes);

export const AppRouter = () => <RouterProvider router={router} />