import { ImageIcon } from 'lucide-react'

/**
 * Frame placeholder untuk foto/thumbnail.
 * Kalau src kosong → tampil border putus-putus + label.
 * Kalau src diisi (URL string dari props) → tampil <img>.
 *
 * props:
 * - src       → URL gambar (opsional). Datanya dari parent, bukan di-hardcode di sini.
 * - alt       → teks alternatif
 * - label     → teks placeholder jika src kosong
 * - ratio     → 'square' | 'video' | 'portrait'
 * - className → class tambahan
 */
const RATIO = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
}

function ImageFrame({
  src,
  alt = '',
  label = 'Gambar',
  ratio = 'video',
  className = '',
}) {
  const aspect = RATIO[ratio] ?? ratio

  if (src) {
    return (
      <div className={`overflow-hidden ${aspect} ${className}`}>
        <img src={src} alt={alt} className="size-full object-cover" loading="lazy" />
      </div>
    )
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-base-300 bg-base-200/60 text-base-content/50 ${aspect} ${className}`}
      role="img"
      aria-label={label}
    >
      <ImageIcon className="size-8 opacity-60" strokeWidth={1.5} />
      <span className="px-4 text-center text-xs font-medium sm:text-sm">{label}</span>
    </div>
  )
}

export default ImageFrame