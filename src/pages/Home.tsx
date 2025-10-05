import Header from "@/components/Header";
import heroBuilding from "@/assets/hero-building.jpg";
import projectBuilding from "@/assets/project-building.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[500px] bg-muted flex items-center justify-center overflow-hidden">
        <img 
          src={heroBuilding} 
          alt="Modern architectural building" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40"></div>
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 gap-px opacity-20">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="border border-foreground"></div>
          ))}
        </div>
        {/* Geometric wireframe overlay */}
        <div className="absolute top-10 left-10 w-24 h-24 border-2 border-foreground/30 rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-foreground/30">
          <div className="absolute inset-4 border-2 border-foreground/30"></div>
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
              
              <div className="grid grid-cols-2 gap-8">
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
                
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2074.8!2d24.5!3d58.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ecfd1b5f5d5d5d%3A0x5d5d5d5d5d5d5d5d!2sR%C3%BC%C3%BCtli%2041%2C%20P%C3%A4rnu%2C%2080010%20P%C3%A4rnu%20maakond!5e0!3m2!1sen!2see!4v1234567890"
                  ></iframe>
                </div>
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
              
              <div className="aspect-[4/3] bg-muted relative overflow-hidden group cursor-pointer">
                <img 
                  src={projectBuilding} 
                  alt="Architectural project" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 border-4 border-foreground/20 group-hover:border-foreground/40 transition-colors"></div>
                {/* Geometric corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-foreground/50"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-foreground/50"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-foreground/50"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-foreground/50"></div>
              </div>
            </section>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Home;
