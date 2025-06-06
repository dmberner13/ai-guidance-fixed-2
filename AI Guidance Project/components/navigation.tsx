"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/vision-values", label: "Vision & Values" },
  { href: "/center-people", label: "Center People" },
  { href: "/advance-equity", label: "Advance Equity" },
  { href: "/ethics", label: "Ethics & Safety" },
  { href: "/continuous-improvement", label: "Continuous Improvement" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/resources", label: "Resources" },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-card border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-lg">
            AI Guidance Builder
          </Link>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
