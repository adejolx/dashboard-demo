import Warning from '@/assets/warning.svg?react'
import { cn } from '@/lib/utils'

const AlertLevel = ({ level }: { level: number }) => {
  const labelAlert = getAlertLabelFrom(level)
  const { bgColor, borderColor } = getColorsFrom(level)

  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
      className="ml-auto w-fit border rounded-2xl flex items-center py-1 px-2 gap-2.5"
    >
      <Warning
        className={cn(
          level === 0 && '*:fill-[#E50000]',
          level > 0 && level < 50 && '*:fill-[#FF8000]'
        )}
        path={bgColor}
        height={24}
        width={24}
      />
      <span style={{ color: borderColor }}>{labelAlert}</span>
    </div>
  )
}
export default AlertLevel

function getAlertLabelFrom(level: number) {
  if (level === 0) {
    return 'Out of Stock'
  }
  if (level < 50) {
    return 'Needs Attention'
  }
  return 'Low Stock'
}

function getColorsFrom(level: number) {
  let bgColor = '',
    borderColor = ''

  if (level === 0) {
    bgColor = '#FACCCC'
    borderColor = '#E50000'
  } else if (level < 50) {
    bgColor = '#FFE6CC'
    borderColor = '#FF8000'
  } else if (level >= 50) {
    bgColor = '#CCEBD6'
    borderColor = '#009933'
  }
  return {
    bgColor,
    borderColor,
  }
}
