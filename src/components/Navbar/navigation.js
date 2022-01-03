import { BiHome, BiUserCircle, BiFoodMenu, BiStar } from 'react-icons/bi'
import { BsCalendarEvent, BsTelephone, BsImages } from 'react-icons/bs'

// Navigation info to map to elements
const navigation = [
  { icon: BiHome, name: 'Home', href: '/', current: true },
  { icon: BiUserCircle, name: 'About', href: '#about', current: false },
  { icon: BiFoodMenu, name: 'Menu', href: '#menu', current: false },
  { icon: BiStar, name: 'Specials', href: '#specials', current: false },
  { icon: BsCalendarEvent, name: 'Events', href: '#event', current: false },
  { icon: BsImages, name: 'Gallery', href: '#gallery', current: false },
  { icon: BsTelephone, name: 'Contact', href: '#contact', current: false }
]

export default navigation
