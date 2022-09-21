function Navinp({ val, func }) {
    return (
        <input value={val} type="text"
            onChange={func}
            className=' h-13 py-1 rounded-tl rounded-bl
     outline-none border-[1px] border-[#e5e5e5] w-full indent-3
     text-[#303030] text-sm '
            placeholder='Search Here...'
        />
    )
}

export default Navinp
