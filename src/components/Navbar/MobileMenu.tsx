import type { IconType } from 'react-icons/lib'
import classNames from '../../util/classNames'

interface NavItem {
  icon: IconType
  name: string
  href: string
  current: boolean
}

interface MenuTypes {
  open: boolean
  navigation: NavItem[]
  onOutsideClick: () => void
}

export default function MobileMenu({
  open,
  navigation,
  onOutsideClick
}: MenuTypes): JSX.Element {
  return (
    <>
      <div
        className={classNames(
          'mobileMenu',
          open ? 'translate-x-0' : 'translate-x-full',
          'fixed h-full lg:hidden bg-gray-800 z-20 w-[60%] sm:w-[40%] top-0 right-0 px-8 duration-500'
        )}
      >
        <div className="flex flex-col mt-20 h-[80%] overflow-y-auto">
          {navigation.map((item: NavItem) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-100/30 hover:bg-gray-100/40'
                  : 'hover:bg-gray-100/30',
                'btn text-gray-100 hover:text-gray-200 flex'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              <div className="flex items-center text-white">
                <item.icon />
              </div>
              <span className="ml-2">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
      <div
        onClick={onOutsideClick}
        className={classNames(
          'overlay',
          open ? 'opacity-50 visible' : 'opacity-0 invisible',
          'fixed w-full h-full z-10 bg-midnight-900 transition-all duration-300'
        )}
      />
    </>
  )
}
