const MaxWidth = ({ children, className }) => {
  return (
    <div
      className={`${className} lg:container md:px-[7rem] sm:px-[2rem] px-10`}
    >
      {children}
    </div>
  )
}

export default MaxWidth
