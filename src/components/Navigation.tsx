import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex gap-12">
      <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
        Avaleht
      </Link>
      <Link to="/firmast" className="text-muted-foreground hover:text-foreground transition-colors">
        Firmast
      </Link>
      <Link to="/projektid" className="text-muted-foreground hover:text-foreground transition-colors">
        Projektid
      </Link>
      <Link to="/kontakt" className="text-muted-foreground hover:text-foreground transition-colors">
        Kontakt
      </Link>
    </nav>
  );
};

export default Navigation;
