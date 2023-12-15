

const SignButton = ({ children }) => {
    return (
        <div className=" mb-[8px] hover:bg-[#1d9bf01a] rounded-[20px] cursor-pointer w-[300px]">


            <div className="
            w-[300px]
            h-[40px]
            
            px-[12px]
            border
            border-[#cfd9de]
            rounded-[20px]
            flex
            items-center
            justify-center
            text-[14px]
            ">

                {children}


            </div>
        </div>
    )
}

export default SignButton
