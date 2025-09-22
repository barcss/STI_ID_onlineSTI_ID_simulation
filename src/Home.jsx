import { Link } from 'react-router-dom';
import './App.css'

const Home = () => {
    return (<>
        <div className="w-screen h-screen items-center justify-center flex flex-row p-1 container ">
            <div className=' w-1/2'>
                <p className=' font-bold text-3xl'>ID Frame</p>
                <p className=''>Capture the best photo on your ID</p>
                
                <Link to="/ID" className='inline-block p-2 mt-5 bg-yellow-200 rounded-sm shadow-md hover:bg-blue-400 transition hover:text-white font-semibold'>LETS GO</Link>
            </div>
            <div className='md:w-1/2 hidden md:block'>
                <div className='bg-amber-600 p-10 rounded-full shadow-md'></div>
            </div>
        </div>
    </> );
}
 
export default Home