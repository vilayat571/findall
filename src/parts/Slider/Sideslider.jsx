import Sidebar from '../../components/Sidebar/Sidebar';
import Slider from '../../components/Slider/Slider';

function Sideslider() {
  return (
    <div className=' flex md:flex-row sm:flex-col'>
      <Sidebar />
      <Slider />
    </div>
  )
}

export default Sideslider;