import Header from "@/components/Header";

const Termoanaluus = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-8 py-16">
        <h1 className="text-4xl font-light mb-8 text-foreground">
          Termoanalüüs
        </h1>
        
        <div className="max-w-4xl">
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Energia- ja soojuslahenduste analüüs.
          </p>
          
          <section className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Pakume professionaalseid termoanalüüsi teenuseid, mis aitavad optimeerida 
              teie hoone energiatõhusust ja soojuslahendusi.
            </p>
            
            <div className="border-l-2 border-border pl-6 py-4">
              <h2 className="text-xl font-light mb-4 text-foreground flex items-center gap-3">
                <span className="w-2 h-2 border border-foreground rotate-45"></span>
                Meie teenused
              </h2>
              <ul className="space-y-3">
                <li className="text-muted-foreground flex items-start">
                  <span className="relative w-3 h-3 mr-3 mt-2 flex-shrink-0">
                    <span className="absolute inset-0 border-2 border-foreground"></span>
                    <span className="absolute inset-0 border-t-2 border-l-2 border-foreground translate-x-[2px] translate-y-[2px]"></span>
                  </span>
                  <span>Hoone energiatõhususe analüüs</span>
                </li>
                <li className="text-muted-foreground flex items-start">
                  <span className="relative w-3 h-3 mr-3 mt-2 flex-shrink-0">
                    <span className="absolute inset-0 border-2 border-foreground"></span>
                    <span className="absolute inset-0 border-t-2 border-l-2 border-foreground translate-x-[2px] translate-y-[2px]"></span>
                  </span>
                  <span>Soojuskadude arvutused</span>
                </li>
                <li className="text-muted-foreground flex items-start">
                  <span className="relative w-3 h-3 mr-3 mt-2 flex-shrink-0">
                    <span className="absolute inset-0 border-2 border-foreground"></span>
                    <span className="absolute inset-0 border-t-2 border-l-2 border-foreground translate-x-[2px] translate-y-[2px]"></span>
                  </span>
                  <span>Kütte- ja ventilatsioonisüsteemide optimeerimine</span>
                </li>
                <li className="text-muted-foreground flex items-start">
                  <span className="relative w-3 h-3 mr-3 mt-2 flex-shrink-0">
                    <span className="absolute inset-0 border-2 border-foreground"></span>
                    <span className="absolute inset-0 border-t-2 border-l-2 border-foreground translate-x-[2px] translate-y-[2px]"></span>
                  </span>
                  <span>Energiamärgise koostamine</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Termoanaluus;
