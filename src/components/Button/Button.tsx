import './Button.css'

type Size = 'sm' | 'md' | 'lg'
type Variant =
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
  disabled,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      className={
        `btn ${variant} ${outlined ? 'outlined' : ''} ${size} ${className}` +
        (nav ? 'nav' : '') +
        (disabled ? ' disabled' : '')
      }
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
