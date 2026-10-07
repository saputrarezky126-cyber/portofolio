import { Code2, Link2, Camera, Mail, MessageCircle } from 'lucide-react'

const ICONS = {
  github: Code2,
  linkedin: Link2,
  instagram: Camera,
  email: Mail,
  whatsapp: MessageCircle,
}

/**
 * Daftar ikon sosmed.
 * items: [{
 *   type: 'github'|'linkedin'|...,  → ikon Lucide default
 *   src?: string,                   → opsional: ganti ikon dengan gambar
 *   href, label?
 * }]
 * Prioritas: src (gambar) > type (Lucide).
 */
function SocialLinks({ items = [], className = '', size = 'size-5' }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {items.map((item) => {
        const Icon = ICONS[item.type] ?? Code2
        return (
          <a
            key={item.href + (item.type ?? item.src ?? item.label)}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label ?? item.type}
            className="btn btn-ghost btn-circle btn-sm"
          >
            {item.src ? (
              <img
                src={item.src}
                alt=""
                aria-hidden
                className={`${size} object-contain`}
              />
            ) : (
              <Icon className={size} />
            )}
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks