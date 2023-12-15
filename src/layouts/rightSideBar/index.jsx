
import Search from "./search"
import Subscribe from "./subscribe"
import Trends from "./trends/trends"


const RightSideBar = () => {
    return (
        <div className="flex flex-col w-[350px]">
            <Search />


            <Subscribe />
            <Trends />
            <div>
                Trends
            </div>
            <div>
                Who to follow
            </div>
        </div>

    )
}

export default RightSideBar
