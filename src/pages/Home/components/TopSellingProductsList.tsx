import Card from '@/ui/Card'
import { soldProductProps } from '@/data'

const TopSellingProductsList = () => {
  return (
    <Card title="Top Selling Products">
      <div className="space-y-2.5 px-2.5 py-1.5">
        <div className="flex justify-between text-base items-center text-[#666]">
          <span>Product Name</span>
          <span>Number Sold</span>
        </div>
        <div className="space-y-2.5 *:text-[#1A1A1A]">
          {soldProductProps.map((prop, index) => (
            <div className="flex text-xs font-medium items-center justify-between *:animate-grow-to-right *:[animation-delay:calc(var(--grow-delay)_*_75ms)]">
              <div
                style={{
                  ['--grow-delay' as string]: index,
                  width: prop.width,
                  backgroundColor: prop.bgColor,
                  color: prop.color,
                }}
                className="px-3.5 py-1.5 rounded-lg bg-[#D6DDFF]"
              >
                Big Boyz meal
              </div>
              <div className="text-right">1001 units</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default TopSellingProductsList
