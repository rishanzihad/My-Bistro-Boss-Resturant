
import { Outlet,useLocation } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import { Toaster } from 'react-hot-toast';


const MainLay = () => {
    const location =useLocation()
    const noHeaderFooter =location.pathname.includes('login')||location.pathname.includes('register')
    return (
        <div >
          {noHeaderFooter ||   <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
            <Toaster/>
        </div>
    );
};

export default MainLay;