import Card from '@/ui/Card'
import { soldProductProps } from '@/data'

const TopSellingProductsList = () => {
  return (
    <Card title="Top Selling Products">
      <div className="gap-y-2.5 px-2.5 py-1.5 grid grid-cols-[minmax(300px,_1fr)_max-content] overflow-x-auto text-base text-[#666]">
        <span className="mb-1">Product Name</span>
        <span className="mb-1">Number Sold</span>

        {soldProductProps.map((prop, index) => (
          <>
            <div
              style={{
                ['--grow-delay' as string]: index,
                width: prop.width,
                backgroundColor: prop.bgColor,
                color: prop.color,
              }}
              className="px-3.5 py-1.5 rounded-lg bg-[#D6DDFF] !text-[#1A1A1A] whitespace-nowrap overflow-hidden text-ellipsis"
            >
              Big Boyz meal
            </div>
            <div className="text-right !text-[#1A1A1A]">1001 units</div>
          </>
        ))}
      </div>
    </Card>
  )
}

export default TopSellingProductsList
