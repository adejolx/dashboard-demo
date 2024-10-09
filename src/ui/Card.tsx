import React from 'react'

const Card = ({
  title,
  children,
  style,
}: {
  title: React.ReactNode
  children: React.ReactNode
  style?: React.CSSProperties
}) => {
  return (
    <div
      className="rounded-2xl bg-[#F2F2F2] border border-[#B2B2B2] min-w-[20rem]"
      style={style}
    >
      <p className="p-2.5 font-medium text-lg -tracking-[0.9px]">{title}</p>
      <div className="p-2.5 bg-white rounded-2xl">{children}</div>
    </div>
  )
}

export default Card
