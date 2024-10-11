import { cn } from '@/lib/utils'

const NUM_OF_BARS = 6

const StockLevel = ({ level }: { level: number }) => {
  const { bgColorEmpty, bgColorFull } = getBgColorsFrom(level)
  const numberOfFilledBars = Math.ceil((level / 100) * NUM_OF_BARS)

  return (
    <div className="flex gap-1.5">
      <div
        className={cn(
          'stock-level flex justify-center items-center gap-1.5 *:inline-block *:rounded-[2px] *:w-2.5 *:h-5'
        )}
      >
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <span
              style={{
                backgroundColor:
                  index < numberOfFilledBars ? bgColorFull : bgColorEmpty,
              }}
              key={index}
            />
          ))}
      </div>
      <div
        style={{
          color: level === 0 ? '#E50000' : bgColorFull,
        }}
        className="font-medium text-sm"
      >
        {level}%
      </div>
    </div>
  )
}

export default StockLevel

function getBgColorsFrom(level: number) {
  let bgColorEmpty = '',
    bgColorFull = ''

  if (level === 0) {
    bgColorEmpty = '#FACCCC'
  } else if (level < 50) {
    bgColorEmpty = '#FFE6CC'
    bgColorFull = '#FF8000'
  } else if (level >= 50) {
    bgColorEmpty = '#F5F5F5'
    bgColorFull = '#009933'
  }
  return {
    bgColorEmpty,
    bgColorFull,
  }
}
