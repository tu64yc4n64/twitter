import { useDispatch, useSelector } from "react-redux"
import { setTweet } from "../../../../stores/tweets"
const Input = () => {
    const dispatch = useDispatch()
    const tweet = useSelector(item => item.tweets.tweet)
    return (
        <div className="pb-[11px] pt-[8px] pl-[8px] ">


            <input className="border-none outline-none h-[27px] w-[100%]" value={tweet} onChange={(e) => dispatch(setTweet(e.target.value))} type="text" placeholder="What is happening?!" />
        </div>
    )
}

export default Input
