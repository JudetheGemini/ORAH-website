import Image from "next/image";

import ORAHInitiatives from "@/components/Initiatives";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center max-h-screen justify-center py-12 gap-6 mt-6">
      <div className="flex flex-col items-center gap-6 px-4">
        <span className="font-inter text-darkBlue text-2xl md:text-5xl font-black max-w-5xl text-center tracking-wide leading-8 md:leading-16">
          Leading the Future of Ethical and Responsible{" "}
          <span className="text-teal">AI in Ottawa</span>
        </span>
        <span className="font-inter text-darkBlue text-center">
          Creating a community dedicated to ethical AI governance, education,
          advocacy, and innovation.
        </span>
        <button className="p-4 rounded-lg text-sm sm:text-base bg-teal text-white hover:bg-darkBlue">
          Join our community
        </button>
      </div>
      <div>
        <Image className="rounded-lg" src="/landingnoBG1.png" alt="" width={700} height={600} />
      </div>
    </div>

    <ORAHInitiatives />
    <ContactForm />
    </>
  );
}
