import  React   from 'react';
import Navbar from './Navbar';
import GeneratorMain from './GeneratorMain';
export default function Generator()
{
    return (
        <>
        <div className='h-dvh'>
            <div className='flex flex-col m-auto bg-[rgba(255,255,255,0.69)] mt-[40px] w-[97%] min-h-[500] h-auto rounded-md sm:w-[70%] xl:w-[50%] xl:min-h-[80%]'>   
                <div><Navbar /></div>
                <div className=''><GeneratorMain /></div>
            </div>
        </div>
        </>
    );
}