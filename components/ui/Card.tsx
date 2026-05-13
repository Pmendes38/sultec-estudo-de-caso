import React from 'react'

interface CardProps {
  className?: string
  children: React.ReactNode
  variant?: 'default' | 'dark' | 'premium'
}

export const Card: React.FC<CardProps> = ({ 
  className = '', 
  children,
  variant = 'default'
}) => {
  const variantStyles = {
    default: 'bg-dark-400/50 border border-white/10 backdrop-blur-md',
    dark: 'bg-dark-500 border border-white/5 backdrop-blur-lg',
    premium: 'bg-gradient-to-br from-dark-400 to-dark-500 border border-orange-500/20 backdrop-blur-xl',
  }

  return (
    <div
      className={`${variantStyles[variant]} rounded-[28px] ${className}`}
    >
      {children}
    </div>
  )
}

interface CardContentProps {
  className?: string
  children: React.ReactNode
}

export const CardContent: React.FC<CardContentProps> = ({ 
  className = '', 
  children 
}) => {
  return <div className={`p-8 ${className}`}>{children}</div>
}
