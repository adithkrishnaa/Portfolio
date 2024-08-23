
import { HiAcademicCap, HiHomeModern, HiMegaphone, HiMiniBriefcase, HiMiniCube, HiRocketLaunch } from 'react-icons/hi2';

export const navigationData = [
  { name: "home", path: "/", icon: <HiHomeModern /> },
  { name: "about", path: "/about", icon: <HiAcademicCap /> },
  { name: "project", path: "/project", icon: <HiMiniBriefcase /> },
  { name: "contact", path: "/contact", icon: <HiRocketLaunch /> },
];

import Link from 'next/link';

import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:left-4 z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className=" flex xl:flex-col w-full items-center justify-between xl:justify-center gap-y-16 gap-x-10 px-4 md:px-40 xl:px-2 h-20 bg-slate-300 xl:h-max py-8 text-3xl xl:text-xl xl:rounded-full backdrop-blur-sm"> 
        {
          navigationData.map((link, index) => {
            return (
              <Link 
              href={link.path}
              key={index}
              className = {
              `${link.path == pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`
              }
              >
               <div className='hidden absolute pl-12 left-0 xl:group-hover:flex'>
                <div className='bg-accent relative flex text-white items-center px-4 py-2 rounded-full'>
                  <div className="text-[14px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                </div>
               </div>

               {link.icon}
              </Link>
            ) 
          })
        }
      </div>
    </nav>
  )
}

export default Nav