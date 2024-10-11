import InfoCircle from '@/assets/info-circle.svg?react'
import Card from '@/ui/Card'
import StockLevel from '@/ui/StockLevel'
import AlertLevel from '@/ui/AlertLevel'
import { stockLevels } from '@/data'
import React from 'react'

const ProductAlertsList = () => {
  return (
    <Card
      title={
        <div className="flex items-center gap-2.5">
          <span>Product Alerts</span> <InfoCircle width={24} height={24} />{' '}
        </div>
      }
    >
      <div className="w-full gap-y-2.5 px-2.5 py-1.5 grid grid-cols-[minmax(200px,_1fr)_minmax(max-content,_0.5fr)_minmax(200px,_1fr)] overflow-x-auto items-center">
        <span className="text-base text-[#666]">Product Name</span>
        <span className="text-base text-[#666]">Stock Level(%)</span>
        <span className="text-right text-base text-[#666]">Restock Alert</span>

        <hr className="bg-[#CCC] my-1.5" />
        <hr className="bg-[#CCC] my-1.5" />
        <hr className="bg-[#CCC] my-1.5" />

        {stockLevels.map((level, index) => (
          <React.Fragment key={index}>
            <div className="text-base">White Dress Shirts</div>
            <div className="text-sm">
              <StockLevel level={level} />
            </div>
            <div className="text-right text-xs">
              <AlertLevel level={level} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </Card>
  )
}

export default ProductAlertsList
