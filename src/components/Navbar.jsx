export default function Navbar({ menuOpen, toggleMenu, closeMenu }) {
    return (
        <header className="header">
            <div className="header-inner">
                <nav className="navbar" role="navigation" aria-label="Main navigation">
                    <a href="#home" className="brand" aria-label="Shortly Home" onClick={closeMenu}>
                        <img src="/images/logo.svg" alt="Shortly logo" className="logo"/>
                    </a>
                    <button className="nav-toggle" type="button" aria-controls="navMenu" aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={toggleMenu}>
                        {menuOpen ? "✕" : "☰"}
                    </button>
                    <div className={`nav-menu ${menuOpen ? "open" : ""}`} id="navMenu">
                        <div className="nav-links">
                            <a href="#features" onClick={closeMenu}>Features</a>
                            <a href="#pricing" onClick={closeMenu}>Pricing</a>
                            <a href="#resources" onClick={closeMenu}>Resources</a>
                        </div>
                        <div className="nav-auth">
                            <a href="#shorten" className="btn-link" onClick={closeMenu}>
                                Login
                            </a>
                            <a href="#shorten" className="primary" onClick={closeMenu}>
                                Sign Up
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}