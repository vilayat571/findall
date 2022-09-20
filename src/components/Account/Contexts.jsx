import React from 'react'
import Promocart from './Promocart'
import {
    ArrowCircleRightIcon,
    ClipboardCheckIcon,
    ClipboardListIcon,
    DocumentDownloadIcon,
    ShoppingCartIcon,
    UserCircleIcon
} from '@heroicons/react/solid';

function Contexts() {
    return (
        <div className='grid sm:grid-cols-4 lg:grid-cols-6 w-full gap-6 mt-1'>
            <Promocart url={"/soon"} text={"Current history"}
                icon={<ClipboardListIcon className=" w-[3.5rem] text-[#2318ff]" />} />

            <Promocart url={"/account/details"} text={"Personal data"}
                icon={<UserCircleIcon className=" w-[3.5rem] text-[#2318ff]" />} />

            <Promocart url={"/soon"} text={"Order history"}
                icon={<ClipboardCheckIcon className=" w-[3.5rem] text-[#2318ff]" />} />

            <Promocart url={"/mycart"} text={"My cart"}
                icon={<ShoppingCartIcon className=" w-[3.5rem] text-[#2318ff]" />} />

            <Promocart url={"/soon"} text={"Order profiles"}
                icon={<DocumentDownloadIcon className=" w-[3.5rem] text-[#2318ff]" />} />

            <Promocart url={""} text={"Logout"}
                icon={<ArrowCircleRightIcon className=" w-[3.5rem] text-[#2318ff]" />} />
        </div>
    )
}

export default React.memo(Contexts);
