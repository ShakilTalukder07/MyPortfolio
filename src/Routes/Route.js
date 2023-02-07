import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Checkout from "../components/Checkout/Checkout";
import Home from "../components/Home/Home";
// import Portfolio from "../components/Portfolio/Portfolio";
import GenOx from "../components/Shared/GenOx/GenOx";
import QuizHub from "../components/Shared/QuizHub/QuizHub";
import Resala from "../components/Shared/Resala/Resala";
import Main from "../Layouts/Main";
import DoctorsHome from "../components/Shared/DoctorsHome/DoctorsHome";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/resala',
                element: <Resala></Resala>
            },
            {
                path: '/genox',
                element: <GenOx></GenOx>
            },
            {
                path: '/quizhub',
                element: <QuizHub></QuizHub>
            },
            {
                path: '/doctorsHome',
                element: <DoctorsHome></DoctorsHome>
            },
            // {
            //     path: '/portfolio',
            //     element: <Portfolio></Portfolio>
            // },
            {
                path: 'checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({params})=>fetch(`package.json/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;