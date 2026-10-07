import { useState } from 'react'
import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { motion } from 'motion/react'
import Section from './Section'
import SocialLinks from './SocialLinks'
import { useMotionPreset } from './motion'

/**
 * Contact — form singkat + info.
 * contact: { whatsapp, whatsappLabel?, email, location }
 * socials: SocialLinks items
 * onSubmit?: (data) => void
 */
function Contact({ contact = {}, socials = [], onSubmit }) {
  const {fadeUp, stagger, inView, initial } = useMotionPreset()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return
    onSubmit?.(form)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Mari ngobrol"
      subtitle="Punya ide project? Kirim pesan singkat — saya balas secepatnya."
    >
      <motion.div
        variants={stagger}
        initial={initial}
        whileInView="show"
        viewport={inView}
        className="grid gap-10 lg:grid-cols-2"
      >
        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm"
        >
          <label className="form-control w-full">
            <span className="mb-1.5 text-sm font-medium text-base-content/70">Nama</span>
            <input
              name="name"
              type="text"
              placeholder="Nama kamu"
              value={form.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full">
            <span className="mb-1.5 text-sm font-medium text-base-content/70">Email</span>
            <input
              name="email"
              type="email"
              placeholder="email@contoh.com"
              value={form.email}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full">
            <span className="mb-1.5 text-sm font-medium text-base-content/70">Pesan</span>
            <textarea
              name="message"
              placeholder="Ceritakan project-nya singkat..."
              value={form.message}
              onChange={handleChange}
              className="textarea textarea-bordered min-h-28 w-full"
              required
            />
          </label>
          <button type="submit" className="btn btn-primary rounded-full">
            Kirim Pesan
          </button>
          {sent && (
            <p className="text-sm text-success">
              Pesan tercatat (demo). Hubungkan ke backend/email nanti.
            </p>
          )}
        </motion.form>

        <motion.div variants={fadeUp} className="flex flex-col gap-6">
          <ul className="space-y-4">
            {contact.whatsapp && (
              <li>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-base-300 bg-base-100 px-4 py-3 transition hover:border-primary/40"
                >
                  <MessageCircle className="size-5 text-primary" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-base-content/50">
                      WhatsApp
                    </p>
                    <p className="font-medium">{contact.whatsappLabel ?? 'Chat via WA'}</p>
                  </div>
                </a>
              </li>
            )}
            {contact.email && (
                <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 rounded-xl border border-base-300 bg-base-100 px-4 py-3 transition hover:border-primary/40"
                >
                  <Mail className="size-5 text-primary" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-base-content/50">
                      Email
                    </p>
                    <p className="font-medium">{contact.email}</p>
                  </div>
                </a>
              </li>
            )}
            {contact.location && (
              <li className="flex items-center gap-3 rounded-xl border border-base-300 bg-base-100 px-4 py-3">
                <MapPin className="size-5 text-primary" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-base-content/50">
                    Lokasi
                  </p>
                  <p className="font-medium">{contact.location}</p>
                </div>
              </li>
            )}
          </ul>

          {socials.length > 0 && (
            <div>
              <p className="mb-2 text-sm font-medium text-base-content/60">Sosial media</p>
              <SocialLinks items={socials} />
            </div>
          )}
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default Contact