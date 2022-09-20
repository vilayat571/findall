function Span({ text }) {

    let icon;

    if (text === 'facebook') {
        icon = <i className="fa-brands fa-facebook-f"></i>
    }

    else if (text === 'instagram') {
        icon = <i className="fa-brands fa-instagram"></i>
    }

    else if (text === 'linkedin') {
        icon = <i className="fa-brands fa-linkedin"></i>
    }

    else if (text === 'google') {
        icon = <i className="fa-brands fa-google"></i>
    }

    return (
        <span className='text-[#c2c2c2] w-11 h-11
         rounded-[70%] flex justify-center items-center border-[1px] border-[#494949] mx-2' >
            {icon}
        </span>
    )
}

export default Span;
