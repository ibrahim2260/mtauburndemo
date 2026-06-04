import Link from 'next/link'

type ButtonVariant = 'primary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
  target?: string
  rel?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-evergreen text-cream border-2 border-evergreen hover:bg-deep-forest hover:border-deep-forest transition-colors duration-300',
  outline:
    'bg-transparent text-cream border-2 border-cream hover:bg-cream hover:text-evergreen transition-colors duration-300',
  ghost:
    'bg-transparent text-current border-0 link-underline hover:opacity-80 transition-opacity duration-300',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-body font-medium tracking-wide rounded-[3px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedStyles} target={target} rel={rel}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles} disabled={disabled}>
      {children}
    </button>
  )
}
