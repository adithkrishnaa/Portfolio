import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { smoothIn } from "@/animate";

const Home = () => {
  return (
    <div className="h-screen mt-20 py-2">
      <div className="w-full  h-full">
        <div className="text-center py-44 mb-20 h-full flex xl:pl-24 flex-col justify-center  xl:text-left container mx-auto">
          <motion.h1
            variants={smoothIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1">
            Hy! I am
            <br />
            <span className="text-accent">Web Developer</span>
          </motion.h1>
          <motion.p
            variants={smoothIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm text-black xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-8">
            Web Developer with 2+ years of experience in creating dynamic,
            user-friendly interfaces using HTML, CSS, JavaScript, and React.
            Dedicated to enhancing user engagement and delivering high-quality
            web applications.
          </motion.p>
          <div>
            <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-black hover:bg-slate-800 text-white">
              Contact
            </Link>
            <Link
              href="/Adithkrishna_Web_Developer.pdf"
              target="_blank" // Opens the link in a new tab/window
              rel="noopener noreferrer"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
            <div className="mt-5 mx-auto pb-20">
              <motion.div
                variants={smoothIn("left", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex mx-auto gap-2">
                <Link
                  href="https://www.linkedin.com/in/adithkrishna-shanmugam-9bb870167/"
                  target="_blank">
                  <Image
                    src="/Linkedin.png"
                    alt="hero image"
                    className=" z-30 rounded-full "
                    width={30}
                    height={40}
                  />
                </Link>
                <Link href="https://github.com/adithkrishnaa" target="_blank">
                  <Image
                    src="/github.png"
                    alt="hero image"
                    className=" z-30 rounded-full "
                    width={30}
                    height={40}
                  />
                </Link>
                <Link href="mailto:sak162000@gmail.com" target="_blank">
                  <Image
                    src="/email.png"
                    alt="hero image"
                    className=" z-30 "
                    width={30}
                    height={40}
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full hidden xl:flex  overflow-y-hidden">
        <motion.div
          variants={smoothIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full h-screen max-w-[670px] max-h-[700px] absolute top-8 lg:bottom-0 lg:-right-20 ">
          <Image
            src="/profile.png"
            alt="hero image"
            className=" z-30 rounded-full "
            width={400}
            height={500}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
