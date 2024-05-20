import Basket from "./Pages/Basket.jsx";
import Wishlist from "./Pages/Wishlist.jsx";
import MainRoot from "./Pages/MainRoot.jsx";
import Add from "./Pages/Add.jsx";


const ROUTES = [
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                index:true,
                path:"Add",
                element:<Add/>

            },
            {
                path:"Basket",
                element:<Basket/>

            },
            {
                path:"Wishlist",
                element:<Wishlist/>

            }
            
        ]

    }
]
export default ROUTES

