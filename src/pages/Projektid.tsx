import Header from "@/components/Header";

const Projektid = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-8 py-16">
        <h1 className="text-4xl font-light mb-8 text-foreground">
          Projekteerimine
        </h1>
        
        <div className="max-w-4xl">
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Kujundame tellija soovid, ideed ning vajadused ilusasse ja funktsionaalsesse vormi.
          </p>
          
          <section className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Alfa Arhitektid OÜ on firma, kelle eesmärk on kujundada tellija soovid, ideed ning vajadused 
              ilusasse ja funktsionaalsesse vormi.
            </p>
            
            <div className="border-l-2 border-border pl-6 py-4">
              <h2 className="text-xl font-light mb-4 text-foreground flex items-center gap-3">
                <span className="w-2 h-2 border border-foreground rotate-45"></span>
                Meie tegevusvaldkonnad
              </h2>
              <ul className="space-y-3">
                <li className="text-muted-foreground flex items-start">
                  <span className="relative w-3 h-3 mr-3 mt-2 flex-shrink-0">
                    <span className="absolute inset-0 border-2 border-foreground"></span>
                    <span className="absolute inset-0 border-t-2 border-l-2 border-foreground translate-x-[2px] translate-y-[2px]"></span>
                  </span>
                  <span>Arhitektuurne projekteerimine</span>
                </li>
                <li className="text-muted-foreground flex items-start">
                  <span className="relative w-3 h-3 mr-3 mt-2 flex-shrink-0">
                    <span className="absolute inset-0 border-2 border-foreground"></span>
                    <span className="absolute inset-0 border-t-2 border-l-2 border-foreground translate-x-[2px] translate-y-[2px]"></span>
                  </span>
                  <span>Projekteerimistööde juhtimine</span>
                </li>
                <li className="text-muted-foreground flex items-start">
                  <span className="relative w-3 h-3 mr-3 mt-2 flex-shrink-0">
                    <span className="absolute inset-0 border-2 border-foreground"></span>
                    <span className="absolute inset-0 border-t-2 border-l-2 border-foreground translate-x-[2px] translate-y-[2px]"></span>
                  </span>
                  <span>Sisearhitektuurne projekteerimine</span>
                </li>
                <li className="text-muted-foreground flex items-start">
                  <span className="relative w-3 h-3 mr-3 mt-2 flex-shrink-0">
                    <span className="absolute inset-0 border-2 border-foreground"></span>
                    <span className="absolute inset-0 border-t-2 border-l-2 border-foreground translate-x-[2px] translate-y-[2px]"></span>
                  </span>
                  <span>Detailplaneeringute koostamine</span>
                </li>
                <li className="text-muted-foreground flex items-start">
                  <span className="relative w-3 h-3 mr-3 mt-2 flex-shrink-0">
                    <span className="absolute inset-0 border-2 border-foreground"></span>
                    <span className="absolute inset-0 border-t-2 border-l-2 border-foreground translate-x-[2px] translate-y-[2px]"></span>
                  </span>
                  <span>Arhitektuuri-, sisekujundus- ja projekteerimisalane konsultatsioon</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Projektid;
