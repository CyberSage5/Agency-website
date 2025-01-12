import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Ityav Systems</Link>
          <ul className="flex space-x-4">
            <li><Button variant="ghost" asChild><Link href="/">Home</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="/about">About</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="/faq">FAQ</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="/contact">Contact</Link></Button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

