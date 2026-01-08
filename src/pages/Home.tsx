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
      </section>

      {/* Services Cards Section */}
      <section className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Projekteerimine Card */}
          <a 
            href="/projekteerimine"
            className="group relative p-8 border-2 border-border hover:border-foreground transition-all duration-300 bg-background hover:shadow-lg"
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-foreground/40 group-hover:border-foreground transition-colors"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-foreground/40 group-hover:border-foreground transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-foreground/40 group-hover:border-foreground transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-foreground/40 group-hover:border-foreground transition-colors"></div>
            
            <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:translate-x-1 transition-transform uppercase">
              PROJEKTEERIMINE
            </h3>
            <p className="text-muted-foreground">
              Kujundame tellija soovid, ideed ning vajadused ilusasse ja funktsionaalsesse vormi.
            </p>
          </a>

          {/* Termoanalüüs Card */}
          <a 
            href="/termoanaluus"
            className="group relative p-8 border-2 border-border hover:border-foreground transition-all duration-300 bg-background hover:shadow-lg"
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-foreground/40 group-hover:border-foreground transition-colors"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-foreground/40 group-hover:border-foreground transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-foreground/40 group-hover:border-foreground transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-foreground/40 group-hover:border-foreground transition-colors"></div>
            
            <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:translate-x-1 transition-transform uppercase">
              TERMOANALÜÜS
            </h3>
            <p className="text-muted-foreground">
              Hoonete termograafia.
            </p>
          </a>
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
              Alfa Arhitektid OÜ on firma, kelle eesmärk on kujundada tellija soovid, ideed ning vajadused 
              ilusasse ja funktsionaalsesse vormi.
            </p>

            <p className="text-muted-foreground mb-4">Meie tegevusvaldkonnad on</p>

            <ul className="space-y-2 mb-12">
              <li className="text-muted-foreground flex items-start">
                <span className="relative w-3 h-3 mr-3 mt-2 flex-shrink-0">
                  <span className="absolute inset-0 border-2 border-foreground"></span>
                  <span className="absolute inset-0 border-t-2 border-l-2 border-foreground translate-x-[2px] translate-y-[2px]"></span>
                </span>
                <span>arhitektuurne/konstruktiivne projekteerimine</span>
              </li>
              <li className="text-muted-foreground flex items-start">
                <span className="relative w-3 h-3 mr-3 mt-2 flex-shrink-0">
                  <span className="absolute inset-0 border-2 border-foreground"></span>
                  <span className="absolute inset-0 border-t-2 border-l-2 border-foreground translate-x-[2px] translate-y-[2px]"></span>
                </span>
                <span>projekteerimistööde juhtimine</span>
              </li>
              <li className="text-muted-foreground flex items-start">
                <span className="relative w-3 h-3 mr-3 mt-2 flex-shrink-0">
                  <span className="absolute inset-0 border-2 border-foreground"></span>
                  <span className="absolute inset-0 border-t-2 border-l-2 border-foreground translate-x-[2px] translate-y-[2px]"></span>
                </span>
                <span>sisearhitektuuri projekteerimine</span>
              </li>
              <li className="text-muted-foreground flex items-start">
                <span className="relative w-3 h-3 mr-3 mt-2 flex-shrink-0">
                  <span className="absolute inset-0 border-2 border-foreground"></span>
                  <span className="absolute inset-0 border-t-2 border-l-2 border-foreground translate-x-[2px] translate-y-[2px]"></span>
                </span>
                <span>arhitektuur-, sisekujundus- ja projekteerimisalane konsultatsioon.</span>
              </li>
            </ul>

            {/* Contact Section */}
            <section id="kontakt" className="border-t border-border pt-12 scroll-mt-24">
              <h2 className="text-2xl font-light mb-8 text-foreground flex items-center gap-3">
                <span className="w-2 h-2 border border-foreground rotate-45"></span>
                Kontakt
              </h2>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2 text-muted-foreground">
                  <p className="font-medium text-foreground">Alfa Arhitektid OÜ</p>
                  <p><span className="text-foreground">Aadress:</span> Rähni 15, Pärnu 80019</p>
                  <p><span className="text-foreground">Mobiil:</span> +372 55 910 096</p>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2074.8!2d24.52!3d58.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ecfd1c0a0a0a0a%3A0x0a0a0a0a0a0a0a0a!2sR%C3%A4hni%2015%2C%20P%C3%A4rnu%2C%2080019%20P%C3%A4rnu%20maakond!5e0!3m2!1sen!2see!4v1234567890"
                  ></iframe>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-12">

            {/* Projects */}
            <section>
              <h2 className="text-xl font-light mb-6 text-foreground border-b border-border pb-2 flex items-center gap-3">
                <span className="w-2 h-2 border border-foreground rotate-45"></span>
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
