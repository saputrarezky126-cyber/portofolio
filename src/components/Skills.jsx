import { motion } from 'motion/react'
import Section from './Section'
import PortfolioIcon from './PortfolioIcon'
import { useMotionPreset } from './motion'

/**
 * Skills / Tech Stack — 8–12 skill inti.
 * groups: [{ name: 'Frontend', items: [{ name, icon?, iconSrc? }] }]
 * icon memakai nama string supaya data kompatibel dengan JSON/API.
 */
function Skills({ groups = [] }) {
  const {fadeUp, stagger, inView, initial } = useMotionPreset()

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tech stack"
      subtitle="Yang saya pakai sehari-hari — fokus, bukan daftar panjang."
    >
      <motion.div
        variants={stagger}
        initial={initial}
        whileInView="show"
        viewport={inView}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {groups.map((group) => (
          <motion.div
            key={group.name}
            variants={fadeUp}
            className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
              {group.name}
            </h3>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li key={item.name} className="flex items-center gap-3 text-sm font-medium">
                  <span className="grid size-9 place-items-center rounded-lg bg-base-200 text-base-content/70">
                    <PortfolioIcon
                      name={item.icon}
                      src={item.iconSrc}
                      alt=""
                      className="size-4"
                      fallback={item.name.slice(0, 1)}
                    />
                  </span>
                  {item.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

export default Skills