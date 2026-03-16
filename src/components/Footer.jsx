export default function Footer() {
    return (
        <footer className="footer" id="resources">
            <div className="footer-inner">
                <div className="footer-brand">Shortly</div>

                <div className="footer-columns">
                    <div className="footer-col">
                        <h3>Features</h3>
                        <a href="#">Link Shortening</a>
                        <a href="#">Branded Links</a>
                        <a href="#">Analytics</a>
                    </div>

                    <div className="footer-col">
                        <h3>Resources</h3>
                        <a href="#">Blog</a>
                        <a href="#">Developers</a>
                        <a href="#">Support</a>
                    </div>

                    <div className="footer-col">
                        <h3>Company</h3>
                        <a href="#">About</a>
                        <a href="#">Our Team</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact</a>
                    </div>

                    <div className="footer-social" aria-label="Social media links">
                        <a href="#" aria-label="Facebook">
                            <img src="/images/icon-facebook.svg" alt="" />
                        </a>

                        <a href="#" aria-label="Twitter">
                            <img src="/images/icon-twitter.svg" alt="" />
                        </a>

                        <a href="#" aria-label="Pinterest">
                            <img src="/images/icon-pinterest.svg" alt="" />
                        </a>

                        <a href="#" aria-label="Instagram">
                            <img src="/images/icon-instagram.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}