import Button from './Button'
import Link from './Link'
import Logo from '@/assets/logo.svg?react'
import Bell from '@/assets/bell.svg?react'
import DownChevron from '@/assets/chevron-down.svg?react'

const Header = () => {
  return (
    <header className="border border-[#D9D9D9] shadow-header">
      <div className="bounds flex items-center justify-between gap-[166px] p-4">
        <nav className="flex gap-[268px] justify-between">
          <Link to="#" className="p-0">
            <Logo />
          </Link>

          <ul className="flex items-center justify-center gap-0.5 *:text-base">
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
        </nav>

        <div className="flex gap-4">
          <Button className="bg-transparent p-2.5 border-none shadow-none">
            <Bell width={20} height={20} />
          </Button>
          <Button>
            <span>Account</span>
            <DownChevron width={20} height={20} />
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
