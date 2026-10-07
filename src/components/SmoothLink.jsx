import { motion } from 'motion/react'
import { onHashClick } from './smoothScroll.js'
import { useMotionPreset } from './motion'

function SmoothLink({ href = '#', className = '', children, onClick, whileHover, ...props }) {
  const { reduce, hoverScale } = useMotionPreset()

  return (
    <motion.a
      href={href}
      className={className}
      whileHover={reduce ? undefined : (whileHover ?? hoverScale(1.02))}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      onClick={(e) => {
        onHashClick(e, href)
        onClick?.(e)
      }}
      {...props}
    >
      {children}
    </motion.a>
  )
}

export default SmoothLink