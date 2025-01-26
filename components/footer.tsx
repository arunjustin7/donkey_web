import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Footer = () => {
    return (
        <footer className="bg-blue-100 text-blue-800">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="hover:text-blue-600">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-blue-600">
                                    Our Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/research" className="hover:text-blue-600">
                                    Scientific Research
                                </Link>
                            </li>
                            <li>
                                <Link href="/farm" className="hover:text-blue-600">
                                    Our Farm
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/contact" className="hover:text-blue-600">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-blue-600">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="hover:text-blue-600">
                                    Shipping Information
                                </Link>
                            </li>
                            <li>
                                <Link href="/returns" className="hover:text-blue-600">
                                    Returns Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/terms" className="hover:text-blue-600">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-blue-600">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/disclaimer" className="hover:text-blue-600">
                                    Health Disclaimer
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="mb-4">Stay updated with our latest research and products.</p>
                        <form className="flex">
                            <Input type="email" placeholder="Your email" className="rounded-r-none" />
                            <Button type="submit" className="rounded-l-none bg-green-600 hover:bg-green-700 text-white">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-blue-200 text-center">
                    <p>&copy; 2023 Lumina Lactis. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

