import Logo from '@/assets/logo.svg?react'
import MenuIcon from '@/assets/menu.svg?react'

import Link from '../Link'

import PageLinks from './PageLinks'
import AccountAndNotifications from './AccountAndNotifications'

const Header = () => {
  return (
    <header className="bg-white border border-[#D9D9D9] shadow-header">
      <div className="relative bounds flex items-center justify-between gap-[166px] p-4">
        <nav className="flex gap-[268px] items-center justify-between">
          <Link to="#" className="p-0 -ml-[22px]">
            <Logo />
          </Link>

          <PageLinks className="hidden xl:flex" />
        </nav>

        <AccountAndNotifications className="hidden md:flex" />

        <input id="menu-toggle" type="checkbox" className="hidden peer" />

        <div className="peer-checked:*:opacity-100 peer-checked:*:delay-75 *:delay-0 *:duration-200 *:opacity-0 peer-checked:scale-y-100 origin-top scale-y-0 transition-transform absolute z-10 p-8 flex flex-wrap *:grow gap-8 rounded-b-sm bg-white bounds top-[100%] inset-x-0 shadow-header xl:hidden">
          <PageLinks className="flex-col items-start [&_a]:hover:translate-y-0 xl:hidden" />
          <AccountAndNotifications className="px-2 flex-col items-start ml-auto mb-auto md:hidden" />
        </div>

        <label
          htmlFor="menu-toggle"
          className="cursor-pointer bg-white rounded-lg font-semibold p-2 border-none xl:hidden"
        >
          <MenuIcon height={28} width={28} />
        </label>
      </div>
    </header>
  )
}

export default Header
