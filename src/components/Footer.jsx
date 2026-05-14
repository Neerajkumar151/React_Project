import React from "react";

const Footer = ({ onNavigate }) => {
  const handleLinkClick = (e, pageId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  return (
    <footer className="border-t transition-colors duration-300 w-full" style={{ backgroundColor: 'var(--color-bg-surface)', borderColor: 'var(--color-border)' }}>
      <div className="mx-auto w-full max-w-[1600px] p-6 md:p-12 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <a href="/" onClick={(e) => handleLinkClick(e, 'dashboard')} className="flex items-center gap-2 md:gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary shrink-0">
                <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-black text-primary tracking-tight leading-none mb-1">Nexora</h1>
                <p className="text-[10px] md:text-sm font-medium text-on-surface-variant leading-none hidden sm:block">Where creators build influence</p>
              </div>
            </a>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            {/* Resources */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase" style={{ color: 'var(--color-text-primary)' }}>Resources</h2>
              <ul className="font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                <li className="mb-4">
                  <a href="#documentation" onClick={(e) => handleLinkClick(e, 'documentation')} className="hover-text-primary transition-colors">Documentation</a>
                </li>
                <li>
                  <a href="#creator-guide" onClick={(e) => handleLinkClick(e, 'creator guide')} className="hover-text-primary transition-colors">Creator Guide</a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase" style={{ color: 'var(--color-text-primary)' }}>Follow us</h2>
              <ul className="font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                <li className="mb-4">
                  <a href="#twitter" onClick={(e) => handleLinkClick(e, 'twitter')} className="hover-text-primary transition-colors">Twitter (X)</a>
                </li>
                <li>
                  <a href="#discord" onClick={(e) => handleLinkClick(e, 'discord')} className="hover-text-primary transition-colors">Discord</a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase" style={{ color: 'var(--color-text-primary)' }}>Legal</h2>
              <ul className="font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                <li className="mb-4">
                  <a href="#privacy-policy" onClick={(e) => handleLinkClick(e, 'privacy policy')} className="hover-text-primary transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#terms" onClick={(e) => handleLinkClick(e, 'terms & conditions')} className="hover-text-primary transition-colors">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 sm:mx-auto lg:my-8" style={{ borderColor: 'var(--color-border)' }} />

        {/* Bottom Section */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center" style={{ color: 'var(--color-text-secondary)' }}>
            © {new Date().getFullYear()} <a href="/" onClick={(e) => handleLinkClick(e, 'dashboard')} className="hover-text-primary transition-colors">Nexora™</a>. All Rights Reserved.
          </span>

          {/* Social Icons */}
          <div className="mt-4 flex sm:mt-0 sm:justify-center" style={{ color: 'var(--color-text-secondary)' }}>
            {socialLinks.map((item, index) => (
              <a key={index} href={item.href} onClick={(e) => handleLinkClick(e, item.label.toLowerCase())} className={`hover-text-primary transition-colors ${index !== 0 ? "ms-5" : ""}`}>
                {item.icon}
                <span className="sr-only">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const socialLinks = [
  {
    label: "Facebook page",
    href: "#",
    icon: (
      <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Discord community",
    href: "#",
    icon: (
      <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
      </svg>
    ),
  },
];

export default Footer;