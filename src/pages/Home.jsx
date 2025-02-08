
import Header from '../components/Header';
import MainFooter from '../components/MainFooter';
import Caresol from './Caresol';
import HotProducts from './HotProducts';

const Home = () => {
    return (
        <div>
            <Header/>
            <Caresol/>
            <HotProducts/>
            <MainFooter/>
        </div>
    );
};

export default Home;