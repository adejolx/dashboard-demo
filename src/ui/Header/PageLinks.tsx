import { cn } from '@/lib/utils'
import Link from '../Link'

const PageLinks = ({ className }: { className?: string }) => {
  return (
    <ul
      className={cn(
        'flex items-center justify-center gap-0.5 *:text-base',
        className
      )}
    >
      <li>
        <Link to="#" selected>
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="#" className="flex items-center gap-2">
          <span>Orders</span>
          <span className="border border-gray-200 rounded-xl font-medium bg-gray-50 text-xs py-0.5 px-2">
            10
          </span>
        </Link>
      </li>
      <li>
        <Link to="#">Product Management</Link>
      </li>
      <li>
        <Link to="#">Wallet</Link>
      </li>
      <li>
        <Link to="#">Analytics</Link>
      </li>
    </ul>
  )
}

export default PageLinks
