import { createBrowserRouter } from "react-router-dom";
import Profile from "../pages/profil";
import Replices from "../pages/profil/tabs/replices";
import Posts from "../pages/profil/tabs/posts";
import Highlights from "../pages/profil/tabs/highlights";
import Media from "../pages/profil/tabs/media";
import Likes from "../pages/profil/tabs/likes";
import { PageLayout } from "../layouts";
import { HomePage, ListsPage, MainPage } from "../pages";




const routes = createBrowserRouter([
    {
        index: true,
        element: <MainPage />
    },

    {
        path: "/",
        element: <PageLayout />,
        children: [
            {
                path: "home",
                element: <HomePage />
            },

            {
                path: ":slug",
                element: <Profile />,
                children: [
                    {
                        path: "",
                        element: <Posts />
                    },
                    {
                        path: "replices",
                        element: <Replices />
                    },
                    {
                        path: "highlights",
                        element: <Highlights />
                    },

                    {
                        path: "media",
                        element: <Media />
                    },

                    {
                        path: "likes",
                        element: <Likes />
                    },


                ]
            },
            {
                path: ":slug/lists",
                element: <ListsPage />
            },



        ]
    },




])

export default routes