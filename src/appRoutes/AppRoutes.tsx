import { Routes, Route } from "react-router-dom";
import { OrderTablePage } from "../orderInventory/OrderTablePage";
import { OrderDetailPage } from "../orderDetail/OrderDetailPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element = {<OrderTablePage/>}/> 
            <Route path='/details/:id/:country' element ={<OrderDetailPage/>} />
        </Routes>
    )
}