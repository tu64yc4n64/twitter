

const BlueButton = ({ children }) => {
    return (
        <div className=" cursor-pointer h-[100%] w-[100%]">


            <button className="
           
           
            bg-[#1d9bf0]
            text-[#fff]
            px-[12px]
            border
            border-[#dadce0]
            rounded-[20px]
            flex
            items-center
            justify-center
            text-[14px]
            ">

                {children}


            </button>
        </div>
    )
}

export default BlueButton
