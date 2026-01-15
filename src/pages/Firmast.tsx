import Header from "@/components/Header";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";
import project8 from "@/assets/project-8.jpg";
import project9 from "@/assets/project-9.jpg";

const Firmast = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-8 py-16">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-light mb-8 text-foreground flex items-center gap-3">
            <span className="w-2 h-2 border border-foreground rotate-45"></span>
            Firmast
          </h1>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Alfa Arhitektid OÜ on firma, kelle eesmärk on kujundada tellija soovid, ideed ning vajadused 
            ilusasse ja funktsionaalsesse vormi.
          </p>

          <p className="text-muted-foreground mb-4">Meie tegevusvaldkonnad on:</p>

          <ul className="space-y-2 mb-12">
            <li className="text-muted-foreground flex items-start">
              <span className="relative w-3 h-3 mr-3 mt-2 flex-shrink-0">
                <span className="absolute inset-0 border-2 border-foreground"></span>
                <span className="absolute inset-0 border-t-2 border-l-2 border-foreground translate-x-[2px] translate-y-[2px]"></span>
              </span>
              <span>arhitektuurne projekteerimine</span>
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
              <span>sisearhitektuurne projekteerimine</span>
            </li>
            <li className="text-muted-foreground flex items-start">
              <span className="relative w-3 h-3 mr-3 mt-2 flex-shrink-0">
                <span className="absolute inset-0 border-2 border-foreground"></span>
                <span className="absolute inset-0 border-t-2 border-l-2 border-foreground translate-x-[2px] translate-y-[2px]"></span>
              </span>
              <span>arhitektuuri-, sisekujundus- ja projekteerimisalane konsultatsioon.</span>
            </li>
          </ul>

          {/* Projects Section */}
          <section className="border-t border-border pt-12">
            <h2 className="text-2xl font-light mb-8 text-foreground flex items-center gap-3">
              <span className="w-2 h-2 border border-foreground rotate-45"></span>
              Mõned meie poolt teostatud projektid
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[project1, project2, project3, project4, project5, project6, project7, project8, project9].map((project, index) => (
                <div key={index} className="aspect-[4/3] bg-muted relative overflow-hidden group">
                  <img 
                    src={project} 
                    alt={`Architectural project ${index + 1}`} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 border-4 border-foreground/20 group-hover:border-foreground/40 transition-colors"></div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Firmast;
