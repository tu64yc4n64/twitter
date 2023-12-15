import { NavLink } from 'react-router-dom'
import SubscribeButton from '../../../components/buttons/subscribeButton'
import './style.css'

const Subscribe = () => {
    return (
        <div className='layouts-rightsidebar-subscribe'>
            <h2>Subscribe to Premium</h2>
            <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
            <NavLink>
                <SubscribeButton>
                    <span className='text-[14px] leading-[19px] h-[34px] flex items-center jutify-center font-[700]'>
                        Subscribe
                    </span>

                </SubscribeButton>
            </NavLink>

        </div>
    )
}

export default Subscribe
