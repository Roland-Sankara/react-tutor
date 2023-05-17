import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Counter from "../components/Counter";

let router = createBrowserRouter([
    {path:'/', element: <App/>},
    {path:'/counter', element: <Counter/>}
])

export default router;