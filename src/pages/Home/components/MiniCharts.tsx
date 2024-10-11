import DownArrow from '@/assets/arrow-down.svg?react'
import GreenGraph from '@/assets/mini-chart.png'
import { arrayOfThreeItems } from '@/data'
import Card from '@/ui/Card'

const MiniCharts = () => {
  return (
    <div className="flex flex-wrap gap-3 *:grow *:basis-[calc((50rem_-_100%)_*_999)] *:animate-enter-top *:[animation-delay:calc(var(--enter-delay)_*_75ms)]">
      {arrayOfThreeItems.map((_, index) => (
        <Card
          style={{
            ['--enter-delay' as string]: index,
          }}
          title="Today's revenue"
        >
          <div className="space-y-3">
            <p className="font-semibold text-3xl">$1,280</p>
            <p className="text-sm font-medium flex gap-2 items-center">
              <DownArrow width={24} height={24} />
              <span className="text-[#E50000]">15%</span>{' '}
              <span className="text-gray-600">last mth</span>
            </p>
            <img src={GreenGraph} />
          </div>
        </Card>
      ))}
    </div>
  )
}

export default MiniCharts
