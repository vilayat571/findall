import Fottercontext from '../../components/Fotter/Fottercontext';
import Fotterend from '../../components/Fotter/Fotterend';
import Fotterfot from '../../components/Fotter/Fotterfot';

function Main() {
    return (
        <div className=" w-[90%] flex flex-col">
            <Fottercontext />
            <Fotterfot />
            <Fotterend />
        </div>
    )
}

export default Main
