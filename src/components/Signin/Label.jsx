function Label({ placeholder }) {
    return (
        <label className='text-[#888888] font-thin text-sm tracking-[1px]'>
            {placeholder} <span className='text-red-500'>*</span>
        </label>
    )
}

export default Label;