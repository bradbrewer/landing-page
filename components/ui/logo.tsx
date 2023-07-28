import Link from 'next/link'
 export default function Logo() {
   return (
     <Link href="/" className="block" aria-label="Cruip">
         <img className="w-8 h-8" src="/images/i_logo2.jpg"></img>
       </Link>
   )
 }
