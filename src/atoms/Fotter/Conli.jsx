function Conli({ item }) {

    let icon;

    if (item.text === '1530') {
        icon = <i className="text-xs
        fa fa-phone text-[#fff]"
            aria-hidden="true">
        </i>
    }

    else if (item.text === 'hello@findall.com') {
        icon = <i className="text-xs fa fa-envelope
        text-[#fff]"
            aria-hidden="true">
        </i>
    }

    else if (item.text === 'Baku,Azerbaijan') {
        icon = <i className="text-xs
        fa fa-map-marker text-[#fff]"
            aria-hidden="true">
        </i>

    }


    return (
        <div className='mb-3 flex items-center md:justify-start sm:justify-center'>
            {icon}
            {
                item.text === 'Findall.' ? <li className="text-xl text-[#fff] tracking-[1px]" type="none">
                    {item.text}
                </li> : <li className="ml-2 text-sm text-[#999] tracking-[0.7px]" type="none">
                    {item.text}
                </li>
            }
        </div>
    )
}

export default Conli;