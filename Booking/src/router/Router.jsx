import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Register from './../pages/Register';
import SignIn from './../pages/SignIn';
import Hotels from "../pages/Hotels";
import Hotel from "../pages/Hotel";
import Reservation from "../pages/Reservation";


function Router(props) {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/hotels" element={<Hotels/>}/>
            <Route path="/hotels/:id" element={<Hotel/>}/>
            <Route path="/reservation/:id" element={<Reservation/>}/>
        </Routes>
    );
}

export default Router;