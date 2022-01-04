import { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'
import classNames from '../../util/classNames'
import MobileMenu from './MobileMenu'
import Logo from '../../logo.svg'
import navigation from './navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /**
   * Changes navbar background when scrolled
   */
  const navbarScrolled = (): void => setScrolled(window.scrollY >= 90)

  /**
   * Check if the page is already scrolled on load
   */
  useEffect(() => navbarScrolled, [])

  window.addEventListener('scroll', navbarScrolled)

  /**
   * Sets the overflow property on the body to "hidden" to prevent the screen from
   * scrolling while the mobile menu is open. The cleanup will ensure that if the
   * mobile menu isn't there, that the user can still scroll and use the page.
   */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  return (
    <>
      <div
        className={classNames(
          'navbar',
          scrolled ? 'md:bg-gray-800' : '',
          'fixed min-w-full z-30 p-4 sm:px-8 md:px-12 transition-colors duration-500 lg:shadow-md'
        )}
      >
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-end">
          <div className="flex items-center flex-grow flex-shrink-0 lg:mr-auto lg:flex-grow-0">
            <div className="flex items-center justify-between w-full lg:w-auto">
              <a href="/" className="logo btn btn-nav btn-icon hidden md:block">
                <span className="sr-only">Brand</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src={Logo}
                  alt="brand logo"
                />
              </a>
            </div>
          </div>
          <div className="navbarItems hidden lg:block md:ml-10 md:pr-4 md:space-x-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-300/40' : '',
                  'btn',
                  'btn-nav'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div className="hamburgerBtn z-30 flex items-center lg:hidden fixed right-4 top-4 sm:right-8">
        <button
          className="btn btn-nav btn-icon p-0"
          onClick={() => setOpen(!open)}
        >
          <Hamburger size={24} toggled={open} />
        </button>
      </div>

      <MobileMenu
        onOutsideClick={() => setOpen(false)}
        navigation={navigation}
        open={open}
      />
    </>
  )
}
