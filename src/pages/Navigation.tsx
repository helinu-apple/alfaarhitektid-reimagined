import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 lg:gap-12">
        <Link to="/" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
          Avaleht
        </Link>
        <Link to="/firmast" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
          Projektid
        </Link>
        <Link to="/termoanaluus" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
          Termoanalüüs
        </Link>
        <a href="/#kontakt" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
          Kontakt
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center z-50"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            <Link
              to="/"
              className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Avaleht
            </Link>
            <Link
              to="/firmast"
              className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projektid
            </Link>
            <Link
              to="/termoanaluus"
              className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Termoanalüüs
            </Link>
            <a
              href="/#kontakt"
              className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
