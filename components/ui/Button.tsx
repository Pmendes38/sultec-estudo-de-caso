import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2'

  const variants = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-glow-orange',
    secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
    ghost: 'text-orange-500 hover:bg-orange-500/10',
    outline: 'border border-white/20 text-white hover:bg-white/5',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
