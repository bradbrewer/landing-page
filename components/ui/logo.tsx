import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <img className="w-8 h-8" src="i_logo.jpg"></img>
      </Link>
  )
}
