"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-blue-50 shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-semibold text-blue-600">
                        Lumina Lactis
                    </Link>
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-blue-800">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                    <nav
                        className={`lg:flex ${isMenuOpen ? "block" : "hidden"} absolute lg:relative top-16 lg:top-0 left-0 lg:left-auto w-full lg:w-auto bg-blue-50 lg:bg-transparent z-50`}
                    >
                        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 p-4 lg:p-0">
                            <li>
                                <Link href="/about" className="text-blue-800 hover:text-blue-600">
                                    About Donkey Milk
                                </Link>
                            </li>
                            <li>
                                <Link href="/benefits" className="text-blue-800 hover:text-blue-600">
                                    Health Benefits
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-blue-800 hover:text-blue-600">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/research" className="text-blue-800 hover:text-blue-600">
                                    Research
                                </Link>
                            </li>
                            <li>
                                <Link href="/farm" className="text-blue-800 hover:text-blue-600">
                                    Our Farm
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Button variant="default" className="hidden lg:block bg-green-600 hover:bg-green-700 text-white">
                        Shop Now
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header

