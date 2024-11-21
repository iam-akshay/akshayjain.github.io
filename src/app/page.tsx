import About from './components/About';
import Header from './components/Header';
import { Projects } from './components/Projects';
import { Story } from './components/Story';

export default function Home() {
  return (
    <>
      <div className='w-full flex justify-center h-[100vh] text-black bg-white'>
        <div className='w-[1600px] flex flex-col'>
          <Header />
          <About />
        </div>
      </div>
      <div className='w-full flex justify-center bg-black text-white  h-[100vh]'>
        <div className='w-[1600px] flex flex-col'>
          <Story />
        </div>
      </div>
      <div className='w-full flex justify-center bg-white text-black  h-[100vh]'>
        <div className='w-[1600px] flex flex-col'>
          <Projects />
        </div>
      </div>
    </>
  );
}
