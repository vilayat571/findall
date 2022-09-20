function Siginp({ id, value, func }) {
    return (
        <input className='border-[1px] rounded-sm focus:bg-[#fff] mb-4 mt-1 h-12 w-full indent-3 py-2 text-sm outline-none bg-[#f7f7f7]'
            id={id} value={value} disabled={true}
            type="text" placeholder={''} onChange={func} />
    )
}

export default Siginp;