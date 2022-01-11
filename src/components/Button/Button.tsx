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
  target?: string
}

/**
 * @property size
 * @returns
 */
export default function Button({
  children,
  className = '',
  onClick = () => null,
  size = 'md',
  variant = 'default',
  outlined,
  nav,
  icon,
  disabled,
  link,
  target = '_self',
  ...rest
}: ButtonProps): JSX.Element {
  return !link ? (
    <button
      onClick={onClick}
      className={`${nav ? 'nav ' : ''}btn ${size}${
        variant === 'none' ? '' : ` ${variant}`
      }${outlined ? ' outlined' : ''}${icon ? ' icon' : ''}${
        disabled ? ' disabled' : ''
      } ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  ) : (
    <a
      href={link}
      target={link && target}
      onClick={
        disabled ? (e: React.MouseEvent) => e.preventDefault() : () => null
      }
      className={`${nav ? 'nav ' : ''}btn ${size}${
        variant === 'none' ? '' : ` ${variant}`
      }${outlined ? ' outlined' : ''}${icon ? ' icon' : ''}${
        disabled ? ' disabled' : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
