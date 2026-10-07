import Container from './Container'

function Footer({brand, name="portofolio", builtWith, year = new Date().getFullYear() }) {
  return (
    <footer className="border-t border-base-300 bg-base-100">
      <Container className="flex flex-col items-center justify-between gap-3 py-8 text-center text-sm text-base-content/60 sm:flex-row sm:text-left">
        <p>
          © {brand} {year} {name}. All rights reserved.
        </p>
        {builtWith && <p>Dibuat dengan {builtWith}</p>}
      </Container>
    </footer>
  )
}

export default Footer