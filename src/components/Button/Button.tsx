import './Button.css'

type Size = 'sm' | 'md' | 'lg'
type Variant =
  | 'none'
  | 'default'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'dark'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  size?: Size
  variant?: Variant
  outlined?: boolean
  nav?: boolean
  icon?: boolean
  disabled?: boolean
  link?: string
}

/**
 * @property size
 * @returns
 */
export default function Button({
  children,
  className = '',
  onClick,
  size = 'md',
  variant = 'default',
  outlined,
  nav,
  icon,
  disabled,
  link,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      className={
        (nav ? 'nav ' : '') +
        `btn ${size}` +
        (variant === 'none' ? '' : ` ${variant}`) +
        (outlined ? ' outlined' : '') +
        (icon ? ' icon' : '') +
        (disabled ? ' disabled' : '') +
        ` ${className}`
      }
      onClick={link ? () => (window.location.href = link) : onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
