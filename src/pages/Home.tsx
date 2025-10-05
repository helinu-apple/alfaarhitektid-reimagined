import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] bg-muted flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-1 opacity-20">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-border"></div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-3 gap-16">
          {/* Left Column - Main Content */}
          <div className="col-span-2">
            <h1 className="text-3xl font-light mb-8 text-foreground">
              Tere tulemast Alfa Arhitektide koduleheküljele!
            </h1>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Alfa Arhitektid OÜ on firma, kelle ülesanne on kujundada tellija soovid, ideed ning vajadused 
              ilusasse ja funktsionaalsesse vormi.
            </p>

            <p className="text-muted-foreground mb-4">Meie tegevusvaldkonnad on</p>

            <ul className="space-y-2 mb-12">
              <li className="text-muted-foreground flex items-start">
                <span className="w-2 h-2 bg-foreground inline-block mr-3 mt-2 flex-shrink-0"></span>
                <span>arhitektuurne/konstruktiivne projekteerimine</span>
              </li>
              <li className="text-muted-foreground flex items-start">
                <span className="w-2 h-2 bg-foreground inline-block mr-3 mt-2 flex-shrink-0"></span>
                <span>projekteerimistööde juhtimine</span>
              </li>
              <li className="text-muted-foreground flex items-start">
                <span className="w-2 h-2 bg-foreground inline-block mr-3 mt-2 flex-shrink-0"></span>
                <span>sisearhitektuuri projekteerimine</span>
              </li>
              <li className="text-muted-foreground flex items-start">
                <span className="w-2 h-2 bg-foreground inline-block mr-3 mt-2 flex-shrink-0"></span>
                <span>detailplaneeringute koostamine</span>
              </li>
              <li className="text-muted-foreground flex items-start">
                <span className="w-2 h-2 bg-foreground inline-block mr-3 mt-2 flex-shrink-0"></span>
                <span>arhitektuur-, sisekujundus- ja projekteerimisalane konsultatsioon.</span>
              </li>
            </ul>

            {/* Contact Section */}
            <section className="border-t border-border pt-12">
              <h2 className="text-2xl font-light mb-8 text-foreground">Kontakt</h2>
              
              <div className="space-y-2 text-muted-foreground">
                <p className="font-medium text-foreground">Alfa Arhitektid OÜ</p>
                <p><span className="text-foreground">Aadress:</span> Rüütli 41, Pärnu 80010</p>
                <p><span className="text-foreground">Mobiil:</span> +372 55 910 096</p>
                <p><span className="text-foreground">Faks:</span> +372 44 42 984</p>
                <p><span className="text-foreground">E-mail:</span> toomas@alfaarhitektid.ee</p>
                <p className="mt-4 text-sm">
                  Saatke e-maile siit või helistage numbrile +372 55 910 096.
                </p>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-12">
            {/* Latest News */}
            <section>
              <h2 className="text-xl font-light mb-6 text-foreground border-b border-border pb-2">
                Viimased uudised
              </h2>
              
              <div className="space-y-6">
                <article>
                  <p className="text-sm text-muted-foreground mb-2">15. 12. 2010</p>
                  <h3 className="font-medium text-foreground mb-2">Reis Iisraeli</h3>
                  <p className="text-sm text-muted-foreground">
                    Juudid oskavad väga muljataväldavaid hooneid ehitada. Siin üks uus õppehonne 
                    Haifa Ülikooli üle mäe veera...
                  </p>
                  <a href="#" className="text-sm text-accent-foreground hover:text-foreground transition-colors">
                    edasi »
                  </a>
                </article>

                <article>
                  <p className="text-sm text-muted-foreground mb-2">09. 12. 2010</p>
                  <h3 className="font-medium text-foreground mb-2">Valmis meie uus kodulehekülg!</h3>
                  <p className="text-sm text-muted-foreground">
                    Koostöös Meedia Disain OÜ meeskonnaga valmis meie uus kodulehekülg!...
                  </p>
                  <a href="#" className="text-sm text-accent-foreground hover:text-foreground transition-colors">
                    edasi »
                  </a>
                </article>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-xl font-light mb-6 text-foreground border-b border-border pb-2">
                Projektid
              </h2>
              
              <div className="aspect-[4/3] bg-muted relative overflow-hidden group">
                <div className="absolute inset-0 border-4 border-foreground/10 group-hover:border-foreground/30 transition-colors"></div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Map Section */}
      <section className="border-t border-border bg-secondary py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-2xl font-light mb-8 text-foreground">Asukoht</h2>
          <div className="aspect-video bg-muted relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="font-medium mb-2">Rüütli tänav 41</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-foreground transition-colors"
                >
                  View larger map
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
