function Percentage({ percentage }) {
    return (
        <span className='px-2 py-1 rounded-sm  border-[1px] text-[#575757] text-[10px]'>
            - {Math.trunc(percentage)} %
        </span>
    )
}

export default Percentage
