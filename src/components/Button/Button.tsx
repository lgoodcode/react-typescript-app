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
  variant?: Variant
  outlined?: boolean
  size?: Size
  nav?: boolean
  icon?: boolean
  disabled?: boolean
}

/**
 * @property size
 * @returns
 */
export default function Button({
  children,
  className = '',
  onClick,
  variant = 'default',
  outlined = false,
  size = 'md',
  nav,
  icon = false,
  disabled,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      className={
        `btn ${size} ${className} ` +
        (variant !== 'none' && variant + ' ') +
        (nav && 'nav ') +
        (icon && 'icon ') +
        (outlined && 'outlined ') +
        (disabled && ' disabled ')
      }
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
