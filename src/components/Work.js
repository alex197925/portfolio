/** @format */
import BoraBora from "../assets/projects/borabora.jpg";
import Tesla from "../assets/projects/model-y.jpg";
import Food from "../assets/projects/food.avif";
import Suitcase from "../assets/projects/suitcase.jpg";
import Bill from "../assets/projects/bill.jpg";
import Cypress from "../assets/projects/cypress.jpeg";
import XHR from "../assets/xhr.png";
const Work = () => {
  return (
    <div
      name='work'
      className='w-full md:h-screen text-gray-300  bg-[#0a192f] '>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-3xl font-bold inline border-b-4 border-[#B9464C]'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* Work container */}

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}

          <div
            style={{ backgroundImage: `url(${Cypress})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wide'>
                Cypress
              </span>
              <p>Website test</p>
              <div className='pt-8 text-center'>
                <a
                  href='https://github.com/alex197925/cypress-test-website/tree/main'
                  target='blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    GitHub
                  </button>
                </a>
                {/* <a
                  href='https://github.com/alex197925/eat-n-split-react'
                  target='blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    GitHub
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${XHR})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wide'>
                Cypress
              </span>
              <p>Network Requests</p>
              <div className='pt-8 text-center'>
                <a
                  href='https://github.com/alex197925/network-requests'
                  target='blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    GitHub
                  </button>
                </a>
                {/* <a
                  href='https://github.com/alex197925/eat-n-split-react'
                  target='blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    GitHub
                  </button>
                </a> */}
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Bill})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wide'>
                Eat & Split
              </span>
              <p>React.js</p>
              <div className='pt-8 text-center'>
                <a
                  href='https://alex197925.github.io/eat-n-split-react/'
                  target='blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/alex197925/eat-n-split-react'
                  target='blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Suitcase})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wide'>
                Travel List
              </span>
              <p>React.js</p>
              <div className='pt-8 text-center'>
                <a href='https://faravawtravellist.netlify.app/' target='blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/alex197925/travel-list-react'
                  target='blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Food})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wide'>
                Best Eats
              </span>{" "}
              <p>React.js</p>
              <div className='pt-8 text-center'>
                <a
                  href='https://alex197925.github.io/food-app-react/'
                  target='blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/alex197925/food-app-react'
                  target='blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${BoraBora})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wide'>
                First Class Travel
              </span>
              <p>React.js</p>
              <div className='pt-8 text-center'>
                <a
                  href='https://travel-react-tailwind.netlify.app/'
                  target='blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/alex197925/react-tailwind/tree/main'
                  target='blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Tesla})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wide'>
                Tesla Clone
              </span>
              <p>React.js</p>
              <div className='pt-8 text-center'>
                <a href='https://tesla-clone-ea202.web.app/' target='blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/alex197925/tesla-clone'
                  target='blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
