import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/solid"
import Logo from "../logo.svg"

// Navigation info to map to elements
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Menu", href: "#menu", current: false },
  { name: "Specials", href: "#specials", current: false },
  { name: "Events", href: "#event", current: false },
  { name: "Gallery", href: "#gallery", current: false },
  { name: "Contact", href: "#contact", current: false }
]

// Filters out undefined values for class names
const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ")

export default function Nav() {
  return (
    <Popover>
      <div className="absolute min-w-full z-10 p-4 sm:px-6 lg:px-12">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-end">
          <div className="flex items-center flex-grow flex-shrink-0 lg:mr-auto lg:flex-grow-0">
            <div className="flex items-center justify-between w-full lg:w-auto">
              <a href="/" className="btn nav btn-icon">
                <span className="sr-only">Brand</span>
                <img className="h-8 w-auto sm:h-10" src={Logo} />
              </a>
              <div className="-mr-2 flex items-center lg:hidden">
                <Popover.Button className="btn nav btn-icon">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden lg:block md:ml-10 md:pr-4 md:space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(item.current ? "bg-gray-300/40" : "", "btn", "nav")}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {/* Mobile menu */}
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src={Logo} alt="Brand Logo" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="btn nav btn-icon text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-gray-900 bg-gray-300"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-200",
                    "nav-mobile"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
