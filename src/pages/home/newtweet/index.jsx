import { useDispatch, useSelector } from "react-redux"

import Footer from "./footer"
import Reply from "./reply"

import "./style.css"
import Input from "./input/input"

const NewTweet = () => {
    const activeUser = useSelector(item => item.users.activeUser)



    return (
        <div className="h-[149px] w-[100%] newtweet">

            <div className="px-[15px] pt-[14px] flex">
                <img className="w-[38px] h-[38px] rounded-full mr-[11px]" src={activeUser.profilPhoto} alt="" />
                <div className="flex flex-col w-[100%]">
                    <Input />
                    <Reply />
                    <div className="flex mt-[8px] justify-between">
                        <Footer />


                    </div>

                </div>
            </div>

        </div>
    )
}

export default NewTweet
