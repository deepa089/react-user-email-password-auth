import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="mx-auto border">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;