import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";

const LeftSideBar = lazy(() => import("../leftSideBar"));
const RightSideBar = lazy(() => import("../rightSideBar"));

export const PageLayout = () => {
    return (
        <div className="w-[1265px] mx-auto flex">
            <Suspense>
                <LeftSideBar />
            </Suspense>
            <div className="flex-1 flex gap-[30px]">
                <main className="flex-1 max-w-[600px] border-x border-[#eff3f4]">
                    <Outlet />
                </main>
                <Suspense>
                    <RightSideBar />
                </Suspense>
            </div>

        </div>
    )
}

export default PageLayout