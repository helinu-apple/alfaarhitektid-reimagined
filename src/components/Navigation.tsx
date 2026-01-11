import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex gap-12">
      <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
        Avaleht
      </Link>
      <Link to="/firmast" className="text-muted-foreground hover:text-foreground transition-colors">
        Projektid
      </Link>
      <Link to="/termoanaluus" className="text-muted-foreground hover:text-foreground transition-colors">
        Termoanalüüs
      </Link>
      <a href="/#kontakt" className="text-muted-foreground hover:text-foreground transition-colors">
        Kontakt
      </a>
    </nav>
  );
};

export default Navigation;
