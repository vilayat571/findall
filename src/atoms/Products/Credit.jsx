function Credit({ price }) {
    const creditPrice = (price / 6).toFixed(2);
    return (
        <span className='text-[#fff] bg-[#2418ff] text-xs py-1 px-2 rounded-sm'>
            {creditPrice} ₼ x 6 ay
        </span>
    )
}

export default Credit;
