import { useDispatch } from "react-redux"
import BlueButton from "../../../../../components/buttons/blueButtons"
import { postTweet } from "../../../../../stores/tweets"
import "./style.css"
import { useSelector } from 'react-redux';

const FooterButton = () => {
    const tweet = useSelector(item => item.tweets.tweet)
    const tweets = useSelector(item => item.tweets.tweets)
    const activeUser = useSelector(item => item.users.activeUser)


    const dispatch = useDispatch()
    const postTweetHandler = () => {
        dispatch(postTweet({ id: (tweets.length + 1), userId: activeUser.id, name: activeUser.name, userName: activeUser.userName, profilPhoto: activeUser.profilPhoto, tweet: tweet, likes: [], rt: [] }))
    }

    return (
        <div onClick={() => postTweetHandler({ id: activeUser.id, name: activeUser.name, userName: activeUser.userName, profilPhoto: activeUser.profilPhoto, tweet: tweet, likes: [], rt: [] })} className="h-[34px] w-[62.15px] footer-button">
            <BlueButton>
                Post
            </BlueButton>
        </div>
    )
}

export default FooterButton
