import * as React from "react"

type Size = "sm" | "md" | "lg"
type Variant = "default" | "primary" | "info" | "success" | "warning" | "danger" | "dark"

interface Props {
  children: React.ReactNode
  onClick: () => void
  variant?: Variant
  size?: Size
  nav?: boolean
  disabled?: boolean
}

export default function Button({
  children,
  onClick,
  variant = "default",
  size = "md",
  nav,
  disabled,
  ...rest
}: Props) {
  return (
    <button
      className={`btn ${variant} ${size}` + (nav ? "nav" : "") + (disabled ? " disabled" : "")}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
