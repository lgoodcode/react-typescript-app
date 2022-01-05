import { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'
import classNames from '../../util/classNames'
import Button from '../Button'
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
    const html = document.getElementsByTagName('html')[0]

    if (open) {
      html.classList.add('lock-scroll')
    } else {
      html.classList.remove('lock-scroll')
    }
    return (): void => {
      html.classList.remove('lock-scroll')
    }
  }, [open])

  return (
    <>
      <nav
        className={classNames(
          'navbar',
          scrolled ? 'bg-gray-800 shadow-[0_2px_10px] shadow-gray-900' : '',
          'fixed min-w-full z-30 px-4 sm:py-2 sm:px-8 md:px-12 transition-all duration-500'
        )}
      >
        <div className="relative flex items-center justify-between sm:h-10 md:justify-end">
          <div className="flex items-center flex-grow flex-shrink-0 lg:mr-auto lg:flex-grow-0">
            <div className="flex items-center justify-between w-full lg:w-auto">
              <Button data-testid="logo" className="logo lg:hidden" nav icon>
                <a href="/">
                  <span className="sr-only">Brand</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src={Logo}
                    alt="brand logo"
                  />
                </a>
              </Button>
              <div className="lg:hidden">
                <Button
                  data-testid="hamburger"
                  className="hamburger-btn p-0"
                  variant="none"
                  icon
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Menu</span>

                  <Hamburger size={24} toggled={open} />
                </Button>
              </div>
            </div>
          </div>
          <div className="navbarItems hidden lg:block md:ml-10 md:pr-4 md:space-x-2">
            {navigation.map((item) => (
              <Button
                key={item.name}
                className={item.current ? 'bg-gray-300/40' : ''}
                variant="none"
                link={item.href}
                nav
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <MobileMenu
        onOutsideClick={() => setOpen(false)}
        navigation={navigation}
        open={open}
      />
    </>
  )
}
