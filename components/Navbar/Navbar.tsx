import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React from "react";

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "About", href: "/about" },
];

function Navbar(props) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="relative bg-plantGreenLight py-8 drop-shadow-xl overflow-hidden pr-4">
      <div className=" bg-[url('../assets/recyclingBG.jpg')] lg:ml-[129px] mt-[-32px] lg:mt-[-30px] opacity-5 h-full w-full absolute "></div>

      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-10 md:mx-16">
              <div className="relative z-20 flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center  rounded-md text-gray-400 hover:text-white hover:bg-plantGreen focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>{" "}
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <a className="flex-shrink-0 flex">
                    {/*browser logo begin*/}
                    <img
                      src="https://www.svgrepo.com/show/146736/recycling.svg"
                      alt="RecycleLogo"
                      // height="16"
                      // width="16"
                      className="hidden lg:block h-16 w-auto hover:scale-105 transition duration-200 ease-in-out"
                    ></img>
                    {/*logo end*/}

                    {/*logo begin*/}
                    <img
                      src="https://www.svgrepo.com/show/146736/recycling.svg"
                      alt="RecycleLogo"
                      // height="16"
                      // width="16"
                      className="block lg:hidden h-12 w-auto hover:scale-105 transition duration-200 ease-in-out"
                    ></img>
                    {/*logo end*/}
                  </a>
                  <div className="hidden sm:block sm:ml-6 my-2">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.name === props.page
                              ? "hover:bg-plantGreenLighter text-plantGreenDarker border border-t-0 border-l-0 border-r-0 border-b-4 border-plantGreen "
                              : "text-plantGreenDarker text-opacity-70 hover:text-opacity-100 hover:bg-plantGreenLighter hover:text-plantGreenDarker rounded-b-md",
                            "px-3 py-2 text-lg font-medium rounded-t-md  hover:scale-105 transition duration-200 ease-in-out"
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden ">
              <div className="relative z-20 mx-7 px-2 pt-2 pb-3 space-y-1 ">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.name === props.page
                        ? "hover:bg-gray-300 text-gray-700  border border-t-0 border-l-0 border-r-0 border-b-4 border-plantGreen"
                        : "text-gray-400 hover:bg-gray-300 hover:text-gray-700",
                      "block px-3 py-2 text-base font-medium hover:scale-105 transition duration-200 ease-in-out"
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* <div className="mt-4 max-w-7xl mx-auto border border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 drop-shadow-md"></div> */}
    </div>
  );
}

export default Navbar;
