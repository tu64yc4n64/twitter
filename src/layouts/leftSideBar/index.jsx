import { pageMenu } from "../../utils/consts";
import More from "./more";
import Profile from "./profile";
import "./style.css"
import { NavLink } from "react-router-dom";


const LeftSideBar = () => {

    return (
        <div className="layouts-leftsidebar">
            <div className="px-[8px]">


                <NavLink to="/home">
                    <div className="layouts-leftsidebar-logo">
                        <svg className="logo" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                    </div>
                </NavLink>
                <div className="layouts-leftsidebar-menu">
                    {pageMenu.map((item, i) => {
                        return (
                            <NavLink key={i} to={typeof item.path === 'function' ? item.path() : item.path}>
                                <div className="layouts-leftsidebar-links">


                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path d={item.d.passive}>
                                        </path>
                                    </svg>
                                    <div className="layouts-leftsidebar-links-title">


                                        {item.title}
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })}
                    <More />
                </div>
                <div className="layouts-leftsidebar-profile">
                    <Profile />
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar
