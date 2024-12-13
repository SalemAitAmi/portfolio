import Image from "next/image";
import ContactSVG from "@/public/svg/contact.svg";

const Contact = () => {
    return (
        <section className="bg-gray-800 pb-8" id="contact">
      <div className="lg:container px-5 pt-14">
        <h2 className="title text-yellow-500" data-aos="fade-down">
          Hire Me
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          FOR YOUR PROJECTS
        </h4>
        <br />
        <div className="flex items-center flex-col space-y-4  lg:flex-row">
          <Image
            src={ContactSVG}
            alt="Contact SVG"
            data-aos="fade-right"
            className="max-w-sm mt-4 md:mt-0 md:max-w-xl md:block text-gray-950"
          />
          <div
            data-aos="fade-left"
            className="ml-24 border-2 border-yellow-700 max-w-md
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <div className="w-full max-w-md bg-gray-950 p-5">
              <h2 className="text-lg font-semibold text-gray-300 mb-2">
                Contact details
              </h2>
              <address className="relative bg-gray-700 dark:border-gray-600 p-4 rounded-lg border border-gray-200 not-italic flex space-x-2">
                <div className="space-y-2 text-gray-500 dark:text-gray-400 leading-loose hidden sm:block">
                  Name <br />
                  Email <br />
                  Phone
                </div>
                <div
                  id="contact-details"
                  className="space-y-2 text-yellow-600 font-medium leading-loose"
                >
                  Salem Ait Ami <br />
                  salemaitami@uvic.ca <br />+ 1 250 231 2523
                </div>
              </address>
            </div>

            <p className="leading-7 text-gray-300">
            I'd love to hear from you! If you're looking for a dedicated and skilled professional to join your team, let's connect. I’m excited to see how we can achieve great things together!
            </p>
            <br />
            <a
              href="mailto:salemaitami@uvic.ca"
              className="btn bg-yellow-700 hover:bg-yellow-500 text-white"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Contact;