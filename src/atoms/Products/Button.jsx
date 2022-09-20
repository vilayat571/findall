function Button({ func, count }) {
  return (
    <button onClick={func}
      disabled={count <= 25 ? false : true}
      className='text-center border-[1px] text-[#8f8f8f] outline-none mb-4 
           px-12 w-auto py-2'>
      {
        count <= 25 ? 'See all' : 'Product was not have '
      }
    </button>
  )
}

export default Button;