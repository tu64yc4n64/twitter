

import { useState } from "react";
import { NavLink, useParams } from 'react-router-dom'


const Tabs = () => {
    const { slug } = useParams();
    const [activeTab, setActiveTab] = useState("");


    const handlerClick = (i) => {
        setActiveTab(i + 1);
    }



    const tabs = [

        {
            id: 1,
            name: "Posts",
            to: ""
        },
        {
            id: 2,
            name: "Replices",
            to: `replices`

        },
        {
            id: 3,
            name: "Highlights",
            to: `highlights`

        },
        {
            id: 4,
            name: "Media",
            to: `media`

        },
        {
            id: 5,
            name: "Likes",
            to: `likes`

        }
    ]

    return (

        <div className="flex justify-between ">

            {tabs.map((item, i) => {
                return (
                    <div className="w-[20%] flex items-center justify-center flex-col relative hover:bg-[#0f14191a] cursor-pointer transition" key={i}>

                        <NavLink
                            onClick={() => handlerClick(i)}
                            to={`/${slug}/${item.to}`}
                            className={activeTab === item.id ? "py-[15px] text-[#0f1419] block text-center font-[600]" : "py-[15px] font-[600] text-[#536471] block text-center w-[100%]"}
                        >


                            {item.name}


                        </NavLink>
                        {
                            activeTab === item.id
                                ?
                                <div className="bg-[#1d9bf0] h-[4px] w-[56px] absolute bottom-0 rounded-full">

                                </div>
                                :

                                ""}
                    </div>
                )
            })}
        </div>

    )
}

export default Tabs

