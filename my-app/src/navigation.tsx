import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './languageSwitcher';
import { LanguageProvider, useLanguage } from './languageContext';

const Navigation = () => {
    const { t, language } = useLanguage();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { href: '#about', label: t.nav.about },
        { href: '#experience', label: t.nav.experience },
        { href: '#skills', label: t.nav.skills },
        { href: '#projects', label: t.nav.projects },
        { href: '#contact', label: t.nav.contact },
    ];

    return (
        <nav className="sticky top-0 backdrop-blur-sm bg-gray-950/80 z-50">
            <div className="max-w-5xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-gray-200 hover:text-white"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex gap-3">
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href}>
                                <Button variant="ghost" size="sm">
                                    {item.label}
                                </Button>
                            </a>
                        ))}
                        <LanguageSwitcher />
                    </div>

                    {/* Mobile navigation */}
                    <div
                        className={`${isOpen ? 'flex' : 'hidden'
                            } md:hidden absolute top-full left-0 right-0 flex-col items-center bg-gray-950/95 backdrop-blur-sm py-4 gap-2`}
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="w-full text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                <Button variant="ghost" size="sm" className="w-full">
                                    {item.label}
                                </Button>
                            </a>
                        ))}
                        <div className="pt-2">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;