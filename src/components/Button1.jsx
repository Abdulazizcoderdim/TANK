
const Button1 = ({children, className, onClick}) => {
  return (
    <div onClick={onClick} className={`${className} cursor-pointer hover:bg-[#FF9549]/80 transition-all duration-200 px-7 h-[42px] bg-[#FF9549] rounded-md`}>
        {children}
    </div>
  )
}

export default Button1