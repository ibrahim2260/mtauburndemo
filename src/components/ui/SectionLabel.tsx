interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  light?: boolean
}

export function SectionLabel({ children, className = '', light = false }: SectionLabelProps) {
  return (
    <p
      className={`label ${light ? 'text-cream opacity-70' : 'text-brass'} ${className}`}
    >
      {children}
    </p>
  )
}
