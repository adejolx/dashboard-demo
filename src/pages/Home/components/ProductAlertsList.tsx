import InfoCircle from '@/assets/info-circle.svg?react'
import Card from '@/ui/Card'
import StockLevel from '@/ui/StockLevel'
import AlertLevel from '@/ui/AlertLevel'
import { stockLevels } from '@/data'

const ProductAlertsList = () => {
  return (
    <Card
      title={
        <div className="flex items-center gap-2.5">
          <span>Product Alerts</span> <InfoCircle width={24} height={24} />{' '}
        </div>
      }
    >
      <div className="space-y-2.5 divide-y divide-[#CCC] px-2.5 py-1.5">
        <div className="flex flex-wrap items-center gap-3 *:grow *:basis-[calc((24rem_-100%)*_999)] text-base text-[#666]">
          <span>Product Name</span>
          <span className="text-center">Stock Level(%)</span>
          <span className="text-right">Restock Alert</span>
        </div>
        <div className="space-y-2.5 py-2.5 *:text-[#666]  *:animate-enter-top *:[animation-delay:calc(var(--enter-delay)_*_75ms)]">
          {stockLevels.map((level, index) => (
            <div
              style={{
                ['--enter-delay' as string]: index,
              }}
              className="flex flex-wrap items-center gap-3 *:grow *:basis-[calc((24rem_-100%)*_999)] text-base"
            >
              <div>White Dress Shirts</div>
              <StockLevel level={level} />
              <div className="text-right">
                <AlertLevel level={level} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default ProductAlertsList
