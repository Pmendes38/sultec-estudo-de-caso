import React from 'react'

interface BadgeProps {
  icon?: React.ReactNode
  label: string
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({ 
  icon, 
  label,
  className = ''
}) => {
  return (
    <span className={`inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 px-4 py-2 rounded-full text-sm backdrop-blur-md transition-all hover:border-orange-500/50 hover:bg-orange-500/15 ${className}`}>
      {icon}
      {label}
    </span>
  )
}
