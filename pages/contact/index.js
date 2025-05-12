import { motion } from "framer-motion";
import { smoothIn } from "@/animate";

const Contact = () => {
  return (
    <div className="h-full">
      <div className="container mx-auto  text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full mb-10 py-32 ">
          <h2 className="h2 text-center mt-28 text-accent mb-10">Contact Me</h2>
          {/*   <form action="" className="flex flex-1 flex-col gap-6 w-full mx-auto">
            <input type="text" placeholder="Name" className="input" />

            <div className="flex gap-x-6 w-full">
              <input type="email" placeholder="Email" className="input" />
              <input type="text" placeholder="Moblie No" className="input" />
            </div>

            <input type="text" placeholder="subject" className="input" />
            <textarea placeholder="Message" className="textarea" />

            <button
              type="submit"
              className="bg-accent hover:bg-accent/50 text-white font-medium py-2.5 px-5 rounded-lg w-full">
              Send Message
            </button>
          </form> */}

          <div className="text-black grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center">
            <div className="space-y-2">
              <h3 className="text-3xl text-center font-semibold">Email Id</h3>
              <p className="text-accent font-medium">
                <a href="mailto:sak162000@gmail.com">sak162000@gmail.com</a>
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl text-center font-semibold">WhatsApp</h3>
              <p className="text-accent font-medium">
                <a href="https://wa.me/918610924438" target="_blank">
                  +91 8610924438
                </a>
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl text-center font-semibold">Phone</h3>
              <p className="text-accent font-medium">
                <a href="tel:+918610924438">+91 8610924438</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
