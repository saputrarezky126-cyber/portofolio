
function Container({ as: Tag = 'div', className = '', children, ...props }) {
  return (
    <Tag className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`} {...props}>
      {children}
    </Tag>
  )
}

export default Container