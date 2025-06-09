import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-darkBlue font-inter">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <img src="/logo3.svg" className="h-12 me-3" alt="ORAH Logo" />
              
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6">
            <div>
              <h2 className="mb-6 font-semibold text-grey uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-grey">
                <li className="mb-4">
                  <a href="/about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/events" className="hover:underline">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="/initiatives" className="hover:underline">
                    Events
                  </a>
                </li>
              </ul>
            </div>

        
            <div>
              <h2 className="mb-6 font-semibold text-grey uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-grey">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm font-mada text-grey sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a
              href="https://responsibleaiottawa.org/"
              className="hover:underline"
            >
              ResponsibleAI™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://youtube.com/channel/OttawaResponsibleAIHub"
              className="text-white hover:text-gray-900 dark:hover:text-white"
            >
              <img src="/youtube.svg" className="w-5 h-5" alt="Youtube Logo" />
              <span className="sr-only">Youtube</span>
            </a>
            <a
              href="https://instagram.com/ottawaresaihub"
              className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <img
                src="/instagram.svg"
                className="w-5 h-5"
                alt="Instagram Logo"
              />
              <span className="sr-only">Instagram community</span>
            </a>
            <a
              href="https://x.com/AIOttawa"
              className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                <path
                  fill="#FFFFFF"
                  d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"
                ></path>
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://www.linkedin.com/company/ottawa-responsible-ai-hub/"
              className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <img
                src="/linkedin.svg"
                className="w-5 h-5 text-white"
                alt="Instagram Logo"
              />
              <span className="sr-only">LinkedIn community</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
