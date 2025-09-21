import stiLogo from './assets/Systems_Technology_Institute.png'
import vita_educationem from './assets/STI-VITA-EDUCATIONEM.png'

const IDModel = () => {
    return ( <>
        <div className="flex flex-row h-screen items-center w-screen">
            <div className="w-3/12 h-full bg-gray-200 p-3 ">
            <p>Change ID details</p>
                <form className="flex flex-col gap-3">
                    <input type="text" name="branch" placeholder="Branch" className="bg-white p-2 w-full rounded-sm block shadow-sm"/>
                    <input type="text" name="name" placeholder="Last Name" className="bg-white p-2 w-full rounded-sm block shadow-sm"/>
                    <input type="text" name="name" placeholder="First Name" className="bg-white p-2 w-full rounded-sm block shadow-sm"/>
                    <input type="text" name="name" placeholder="Middle Initial" className="bg-white p-2 w-full rounded-sm block shadow-sm"/>
                    <input type='file' accept='img'/>
                </form>
            </div>
            <div className="w-9/12 h-full bg-gray-500 p-3 flex flex-row items-center justify-center gap-4">
                <div id="SHS_ID" className="flex flex-col rounded-xl overflow-hidden w-4/12 h-10/12">

                    <div className="bg-blue-600 p-2 flex justify-center">
                        <img src={stiLogo} className='bg-yellow-300 py-1 px-2 rounded-sm h-[2.5rem]'/>
                    </div>
                    <div className="bg-yellow-300 h-full relative flex flex-col items-center justify-center">
                    <p className=' absolute left-0 rotate-90 origin-center opacity-30'>Fake ID</p>

                        <p className='text-blue-600'>Cubao</p>
                        <p className='text-blue-600 text-2xl'>Senior High School</p>

                        <img src='https://miro.medium.com/v2/resize:fit:1100/format:webp/1*hXoDbQqNdbnH2zW4z9Ch5Q.jpeg' className='w-8/12 h-5/12 mt-5 z-10'/>
                        <p className='leading-none text-2xl mt-5 z-10'>Sirrrrrr</p>
                        <p className='leading-none text-sm z-10'>Tapos na P.</p>
                        <div className='bg-green-500 p-2 mt-10 rounded-md z-10'>
                            <p className='text-white font-bold'>SY2025-2026</p>
                        </div>
                        <img className='h-5/12 w-7/12 absolute bottom-[-1rem] right-[-3.5rem] invert opacity-30 z-0' src={vita_educationem}/>
                    </div>
                </div>
                <div id="SHS_ID" className="flex flex-col rounded-xl overflow-hidden w-4/12 h-10/12">

                    <div className="bg-yellow-300 p-2 flex justify-center">
                        <img src={stiLogo} className=' py-1 px-2 rounded-sm h-[2.5rem]'/>
                    </div>
                    <div className="bg-blue-600 h-full relative flex flex-col items-center justify-center">
                    <p className=' absolute left-0 rotate-90 text-white origin-center opacity-30'>Fake ID</p>

                        <p className='text-yellow-300 mb-12 mt-2'>Cubao</p>

                        <img src='https://miro.medium.com/v2/resize:fit:1100/format:webp/1*hXoDbQqNdbnH2zW4z9Ch5Q.jpeg' className='w-8/12 h-5/12 z-10'/>
                        <p className='leading-none text-2xl mt-5 z-10 text-white'>Sirrrrrr</p>
                        <p className='leading-none text-sm z-10 text-white'>Tapos na P.</p>
                        <div className='bg-green-500 p-2 mt-7 rounded-md z-10'>
                            <p className='text-white font-bold'>SY2025-2026</p>
                            <p className='text-white text-xs text-center font-bold'>1st Term</p>
                        </div>
                        <img className='h-5/12 w-7/12 absolute bottom-[-1rem] right-[-3.5rem] invert opacity-30 z-0' src={vita_educationem}/>
                    </div>
                </div>
            </div>
        </div>
    </> );
}
 
export default IDModel;