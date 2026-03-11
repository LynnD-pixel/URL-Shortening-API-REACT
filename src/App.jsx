import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShortenerForm from "./components/ShortenerForm";
import ResultsList from "./components/ResultsList";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

const STORAGE_KEY = "shortly.results";

export default function App() {
  const [links, setLinks] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // Load saved links from localStorage when app starts
  useEffect(() => {
    const storedLinks = localStorage.getItem(STORAGE_KEY);
    if (storedLinks) {
      setLinks(JSON.parse(storedLinks));
    }
  }, []);

  // Save links to localStorage whenever links change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
  }, [links]);

  // Add a new shortened link to state
  function addLink(newLink) {
    setLinks((prevLinks) => [newLink, ...prevLinks]);
  }

  // Toggle mobile navigation menu
  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  // Close mobile nav when needed
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />

      <main>
        <Hero />
        <ShortenerForm addLink={addLink} />
        <ResultsList links={links} />
        <Features />
        <Cta />
      </main>

      <Footer />
    </>
  );
}