import React from 'react'

 const Button = ({title, className=''}) => {
  return (
    <button className={`hero-btn text-white border-[#ffc86b] border-[1px] rounded-md p-[12px] shadow-[0px_0px_10px_0px]  ${className}`}>{title}</button>
  )
}
export default Button