import { Link } from "react-scroll"
import { Button } from "../@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../@/components/ui/avatar";
import { Input } from "../@/components/ui/input";
import { Textarea } from "../@/components/ui/textarea";
import ScrollToTopButton from "./ScrollToTopButton";
import { useState } from "react";

export default function Component() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky z-50 top-0 bg-primary text-primary-foreground py-4 px-6 md:px-8 lg:px-12">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to="hero" smooth={true} duration={500} className="text-xl font-bold cursor-pointer">
                        Tax Advisor
                    </Link>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link to="about" smooth={true} duration={500} className="hover:underline cursor-pointer">
                            About
                        </Link>
                        <Link to="services" smooth={true} duration={500} className="hover:underline cursor-pointer">
                            Services
                        </Link>
                        <Link to="testimonials" smooth={true} duration={500} className="hover:underline cursor-pointer">
                            Testimonials
                        </Link>
                        <Link to="contact" smooth={true} duration={500} className="hover:underline cursor-pointer">
                            Contact Us
                        </Link>
                    </nav>
                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-xl" onClick={toggleMenu}>
                        ☰
                    </button>
                </div>
                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-primary text-primary-foreground z-40 flex flex-col space-y-4 p-4 md:hidden">
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="hover:underline cursor-pointer"
                            onClick={toggleMenu}
                        >
                            About
                        </Link>
                        <Link
                            to="services"
                            smooth={true}
                            duration={500}
                            className="hover:underline cursor-pointer"
                            onClick={toggleMenu}
                        >
                            Services
                        </Link>
                        <Link
                            to="testimonials"
                            smooth={true}
                            duration={500}
                            className="hover:underline cursor-pointer"
                            onClick={toggleMenu}
                        >
                            Testimonials
                        </Link>
                        <Link to="contact"
                            smooth={true}
                            duration={500}
                            className="hover:underline cursor-pointer"
                            onClick={toggleMenu}
                        >
                            Contact Us
                        </Link>
                    </div>
                )}
            </header>
            <main className="flex-1">
                <section id="hero" className="bg-primary py-16 md:py-24 lg:py-32">
                    <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center">
                        <h1 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold mb-4">
                            Expert Tax Advice for Your Financial Success
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-primary-foreground">
                            Get personalized tax planning and preparation services from a trusted advisor.
                        </p>
                        <Button className="bg-white text-black hover:bg-gray-200">Schedule Consultation</Button>
                    </div>
                </section>
                <section id="about" className="bg-background py-16 md:py-24 lg:py-32">
                    <div className="container mx-auto px-6 md:px-8 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">About Your Tax Advisor</h2>
                                <p className="text-muted-foreground mb-4">
                                    With over 15 years of experience in the tax industry, I have a deep understanding of the ever-changing
                                    tax landscape. I'm dedicated to providing personalized guidance and strategies to help my clients
                                    maximize their tax savings and achieve their financial goals.
                                </p>
                                <p className="text-muted-foreground mb-4">
                                    My approach is built on transparency, attention to detail, and a commitment to staying up-to-date with
                                    the latest tax laws and regulations. I work closely with each client to develop a customized plan that
                                    addresses their unique needs and concerns.
                                </p>
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    src="vite.svg"
                                    alt="Tax Advisor"
                                    className="rounded-lg"
                                    width="400"
                                    height="400"
                                    style={{ aspectRatio: "400/400", objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="services" className="bg-muted py-16 md:py-24 lg:py-32">
                    <div className="container mx-auto px-6 md:px-8 lg:px-12">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center">Our Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-background rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-bold mb-4">Tax Preparation</h3>
                                <p className="text-muted-foreground mb-4">
                                    Let me handle the complexities of tax preparation so you can focus on running your business. I'll
                                    ensure your returns are filed accurately and on time.
                                </p>
                                <Button variant="link">Learn More</Button>
                            </div>
                            <div className="bg-background rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-bold mb-4">Tax Planning</h3>
                                <p className="text-muted-foreground mb-4">
                                    Proactive tax planning can help you minimize your tax liability and maximize your savings. I'll work
                                    with you to develop a strategic plan tailored to your financial situation.
                                </p>
                                <Button variant="link">Learn More</Button>
                            </div>
                            <div className="bg-background rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-bold mb-4">Tax Consulting</h3>
                                <p className="text-muted-foreground mb-4">
                                    Whether you're navigating a complex tax issue or need guidance on a specific financial decision, I'm
                                    here to provide expert advice and support.
                                </p>
                                <Button variant="link">Learn More</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="testimonials" className="bg-background py-16 md:py-24 lg:py-32">
                    <div className="container mx-auto px-6 md:px-8 lg:px-12">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center">What Our Clients Say</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-muted rounded-lg shadow-md p-6">
                                <blockquote className="mb-4">
                                    "Working with [Tax Advisor] has been a game-changer for my\n business. Their expertise and attention
                                    to detail have\n saved me thousands in taxes and helped me plan for the\n future."
                                </blockquote>
                                <div className="flex items-center">
                                    <Avatar className="mr-4">
                                        <AvatarImage src="/placeholder-user.jpg" alt="Client Avatar" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-bold">John Doe</p>
                                        <p className="text-muted-foreground">Business Owner</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-muted rounded-lg shadow-md p-6">
                                <blockquote className="mb-4">
                                    "I've been working with [Tax Advisor] for years, and\n they've always provided exceptional service.
                                    Their\n guidance has helped me navigate the complex tax landscape\n and maximize my returns."
                                </blockquote>
                                <div className="flex items-center">
                                    <Avatar className="mr-4">
                                        <AvatarImage src="/placeholder-user.jpg" alt="Client Avatar" />
                                        <AvatarFallback>JA</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-bold">Jane Appleseed</p>
                                        <p className="text-muted-foreground">Freelancer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-muted rounded-lg shadow-md p-6">
                                <blockquote className="mb-4">
                                    "I highly recommend [Tax Advisor] to anyone looking for\n top-notch tax services. They're
                                    knowledgeable, responsive,\n and always go the extra mile to ensure my needs are met."
                                </blockquote>
                                <div className="flex items-center">
                                    <Avatar className="mr-4">
                                        <AvatarImage src="/placeholder-user.jpg" alt="Client Avatar" />
                                        <AvatarFallback>SM</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-bold">Sarah Michaels</p>
                                        <p className="text-muted-foreground">Small Business Owner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact" className="bg-muted py-16 md:py-24 lg:py-32">
                    <div className="container mx-auto px-6 md:px-8 lg:px-12">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center">Contact Us</h2>
                        <div className="max-w-lg mx-auto">
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">Name</label>
                                    <Input id="name" type="text" placeholder="Your Name" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">Email</label>
                                    <Input id="email" type="email" placeholder="Your Email" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">Message</label>
                                    <Textarea id="message" className="resize-none" placeholder="Your Message" />
                                </div>
                                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary-dark">Send Message</Button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="grid grid-cols-1 md:grid-cols-2 items-center bg-primary text-white py-8 px-4 text-center md:text-left">
                {/* Copyright section */}
                <p className="md:col-span-1 col-span-1 mb-4 md:mb-0">© 2024 Tax Advisor. All rights reserved.</p>

                {/* Contact information */}
                <div className="md:col-span-1 col-span-1 flex flex-col md:flex-row md:justify-end items-center space-y-2 md:space-y-0 md:space-x-4">
                    <span>your.email@example.com</span>
                    <span className="hidden md:inline">|</span>
                    <span>+123 456 7890</span>
                </div>
            </footer>

            <ScrollToTopButton />
        </div>
    );
}

