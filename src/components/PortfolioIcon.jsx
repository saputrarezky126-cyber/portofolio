import {
  Atom,
  Box,
  Braces,
  Code2,
  FileCode2,
  GitBranch,
  Layout,
  Palette,
  Rocket,
  Server,
  Sparkles,
  Wind,
  Wrench,
} from 'lucide-react'

const ICONS = {
  atom: Atom,
  box: Box,
  braces: Braces,
  'code-2': Code2,
  'file-code-2': FileCode2,
  'git-branch': GitBranch,
  layout: Layout,
  palette: Palette,
  rocket: Rocket,
  server: Server,
  sparkles: Sparkles,
  wind: Wind,
  wrench: Wrench,
}

/**
 * Mengubah nama ikon dari data/API menjadi komponen Lucide.
 * `src` dapat dipakai jika API mengirim URL gambar ikon sendiri.
 */
function PortfolioIcon({ name, src, alt = '', className = 'size-4', fallback = null }) {
  if (src) {
    return <img src={src} alt={alt} className={`${className} object-contain`} />
  }

  const Icon = ICONS[name]
  return Icon ? <Icon className={className} /> : fallback
}

export default PortfolioIcon