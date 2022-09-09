import Placatim from "./Placatim"


function Placatcart({ url,ateq }) {
  return (
    <div className=' h-[128px] w-full ml-2 mb-2'>
      <Placatim ateq={ateq} url={url} />
    </div>
  )
}

export default Placatcart
