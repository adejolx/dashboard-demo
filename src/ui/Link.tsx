import { cn } from '@/lib/utils'

const Link = ({
  selected,
  children,
  className = '',
  to,
  ...restProps
}: {
  selected?: boolean
  children: React.ReactNode
  className?: string
  to: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      href={to}
      className={cn(
        'font-semibold min-w-fit flex items-center justify-center py-2 px-3 gap-2 hover:-translate-y-0.5 transition-transform',
        selected &&
          'text-white bg-gray-800 rounded-lg hover:translate-y-0 transition-none',
        className
      )}
      {...restProps}
    >
      {children}
    </a>
  )
}

export default Link
