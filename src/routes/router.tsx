import { createBrowserRouter } from "react-router";
import MainPage from "../Pages/MainPage";
import NotFound from "../Pages/PageNotFound";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainPage></MainPage>
        },
        {
            path: "*",
            element: <NotFound></NotFound>
        }
    ]
)

export default router