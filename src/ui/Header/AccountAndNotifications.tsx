import Bell from '@/assets/bell.svg?react'
import DownChevron from '@/assets/chevron-down.svg?react'

import Button from '../Button'
import { cn } from '@/lib/utils'

const AccountAndNotifications = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex justify-center items-center gap-4', className)}>
      <Button className="bg-transparent p-2.5 border-none shadow-none">
        <Bell width={20} height={20} />
      </Button>
      <Button>
        <span>Account</span>
        <DownChevron width={20} height={20} />
      </Button>
    </div>
  )
}

export default AccountAndNotifications
