import { createBrowserRouter } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import Home from "../components/Home/Home";
import Portfolio from "../components/Portfolio/Portfolio";
import Main from "../Layouts/Main";

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
                path: '/',
                element: <Portfolio></Portfolio>
            },
            {
                path: 'checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({params})=> fetch(`http://localhost:5000/projects/${params.id}`)
            }
        ]
    }
])

export default router;