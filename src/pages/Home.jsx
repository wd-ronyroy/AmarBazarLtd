
import Header from '../components/Header';
import MainFooter from '../components/MainFooter';
import Caresol from './Caresol';
import HotLaptopHome from './HotLaptopHome';
import HotSmartPhoneFHome from './HotSmartPhoneFHome';

const Home = () => {
    return (
        <div>
            <Header/>
            <Caresol/>
            <HotSmartPhoneFHome/>
            <HotLaptopHome/>
            <MainFooter/>
        </div>
    );
};

export default Home;