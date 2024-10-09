import { cn } from '@/lib/utils'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'dark' | 'primary'
  children: React.ReactNode
}
const Button = ({
  variant = 'primary',
  children,
  className = '',
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'bg-white rounded-lg font-semibold flex items-center justify-center py-2 px-3 gap-2 border border-gray-300 shadow-action-btn [ enabled:active:hover:animate-button-pop enabled:active:hover:scale-[0.97] enabled:active:focus:animate-button-pop enabled:active:focus:scale-[0.97] transition ] focus:outline-none [ focus-visible:outline focus-visible:outline-inherit focus-visible:outline-1 ]',
        className,
        variant
      )}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
