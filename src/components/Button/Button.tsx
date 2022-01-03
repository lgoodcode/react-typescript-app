import './Button.css'

type Size = 'sm' | 'md' | 'lg'
type Variant = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'dark'

interface ButtonProps {
  className?: string
  children: React.ReactNode
  onClick?: () => void
  variant?: Variant
  size?: Size
  nav?: boolean
  disabled?: boolean
}

export default function Button({
  className,
  children,
  onClick,
  variant = 'default',
  size = 'md',
  nav,
  disabled,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      className={
        `btn ${variant} ${size} ${className}` + (nav ? 'nav' : '') + (disabled ? ' disabled' : '')
      }
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
