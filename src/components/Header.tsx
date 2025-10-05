import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
