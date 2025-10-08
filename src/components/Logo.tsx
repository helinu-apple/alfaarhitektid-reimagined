const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-[2px]">
        <div className="w-6 h-6 bg-foreground"></div>
        <div className="w-6 h-6 bg-foreground"></div>
        <div className="w-6 h-6 bg-foreground"></div>
        <div className="w-4 h-6 bg-foreground"></div>
        <div className="w-4 h-6 bg-foreground"></div>
        <div className="w-3 h-6 bg-foreground"></div>
        <div className="w-2 h-6 bg-foreground"></div>
      </div>
      <span className="text-xl font-light tracking-[0.3em] ml-2">
        ALFA ARHITEKTID
      </span>
    </div>
  );
};

export default Logo;
