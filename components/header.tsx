"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, ShoppingCart, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link href="/products" onClick={() => setIsOpen(false)}>
                  Products
                </Link>
                <Link href="/subscriptions" onClick={() => setIsOpen(false)}>
                  Subscriptions
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  Our Farm
                </Link>
                <Link href="/blog" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">DonkeyMilk</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <div className="grid gap-1">
                      <h3 className="text-sm font-medium">Categories</h3>
                      <Link href="/products/raw-milk" className="text-sm">
                        Raw Milk
                      </Link>
                      <Link href="/products/skincare" className="text-sm">
                        Skincare
                      </Link>
                      <Link href="/products/powder" className="text-sm">
                        Powdered Milk
                      </Link>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-sm font-medium">Featured</h3>
                      <Link href="/products/featured" className="text-sm">
                        New Arrivals
                      </Link>
                      <Link href="/products/bestsellers" className="text-sm">
                        Bestsellers
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Subscriptions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                    <div className="grid gap-1">
                      <h3 className="text-sm font-medium">Plans</h3>
                      <Link href="/subscriptions/weekly" className="text-sm">
                        Weekly Delivery
                      </Link>
                      <Link href="/subscriptions/monthly" className="text-sm">
                        Monthly Box
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Our Farm
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

