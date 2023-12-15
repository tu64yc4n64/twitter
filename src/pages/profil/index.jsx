import { Outlet } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Tabs from './tabs';

const Profile = () => {


    const { slug } = useParams();


    return (
        <div>
            <Tabs />
            <Outlet />
        </div>
    )
}

export default Profile
