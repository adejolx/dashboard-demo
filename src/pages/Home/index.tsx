import Calendar from '@/assets/calendar.svg?react'
import FilterLines from '@/assets/filter-lines.svg?react'
import Button from '@/ui/Button'
import { ToggleGroup, ToggleGroupItem } from '@/ui/ToggleGroup'

import MiniCharts from './components/MiniCharts'
import TopSellingProductsList from './components/TopSellingProductsList'
import ProductAlertsList from './components/ProductAlertsList'

const Home = () => {
  return (
    <div className="py-20 space-y-8">
      <div className="flex wrap justify-between items-center">
        <ToggleGroup type="single">
          <ToggleGroupItem value="year">Year</ToggleGroupItem>
          <ToggleGroupItem value="30_days">30 days</ToggleGroupItem>
          <ToggleGroupItem value="7_days">7 days</ToggleGroupItem>
          <ToggleGroupItem value="today">Today</ToggleGroupItem>
        </ToggleGroup>
        <div className="flex wrap gap-2">
          <Button>
            <Calendar />
            <span>Select dates</span>
          </Button>
          <Button>
            <FilterLines />
            <span>Filters</span>
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        <MiniCharts />
        <div className="flex flex-wrap gap-3 *:grow *:basis-[calc((24rem_-100%)*_999)]">
          <TopSellingProductsList />
          <ProductAlertsList />
        </div>
      </div>
    </div>
  )
}

export default Home
