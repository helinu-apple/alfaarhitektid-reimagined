import Header from "@/components/Header";

const Termoanaluus = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 text-foreground">
          Termoanalüüs
        </h1>
        
        <div className="max-w-4xl">
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            Energia- ja soojuslahenduste analüüs.
          </p>
          
          <section className="space-y-4 sm:space-y-6">
            <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
              <p>
                Pakume professionaalseid termoanalüüsi teenuseid, mis aitavad optimeerida 
                teie hoone energiatõhusust ja soojuslahendusi.
              </p>
              <p>
                Enne kui otsustad osta korteri, maja või äripinna – kontrollime kui palju see sooja/tuult peab. Vajalike mõõteriistadega aitame hinnata soojapidavust ja õhulekkeid, et ennetada ootamatuid küttekulusid. See kergendab oluliselt otsustamist ja annab hoonest/hinnast adekvaatsema pildi valiku tegemiseks.
              </p>
              <ol className="list-decimal list-inside space-y-2 pl-2">
                <li>Teostame infrapunakaameraga termograafilisi mõõdistusi soojalekete leidmiseks.</li>
                <li>Koostame vajadusel termoraporti ja anname eksperthinnangu või nõustame suuliselt kohe objektil.</li>
              </ol>
              <p>
                Loodame, et oma kogemuste ning asjatundlikkusega saame olla teile abiks.
              </p>
              <p>
                Meie eksperdid omavad suuri kogemusi ehitusprotsessidest, mis aitavad kaardistada ja analüüsida sinu kodu/korteri kvaliteeti ja vajalikke renoveerimistöid.
              </p>
            </div>
            
            <div className="border-l-2 border-border pl-4 sm:pl-6 py-4">
              <h2 className="text-lg sm:text-xl font-light mb-4 text-foreground flex items-center gap-3">
                <span className="w-2 h-2 border border-foreground rotate-45"></span>
                Meie teenused
              </h2>
              <ul className="space-y-3">
                <li className="text-sm sm:text-base text-muted-foreground flex items-start">
                  <span className="relative w-3 h-3 mr-3 mt-2 flex-shrink-0">
                    <span className="absolute inset-0 border-2 border-foreground"></span>
                    <span className="absolute inset-0 border-t-2 border-l-2 border-foreground translate-x-[2px] translate-y-[2px]"></span>
                  </span>
                  <span>Hoone energiatõhususe analüüs</span>
                </li>
                <li className="text-sm sm:text-base text-muted-foreground flex items-start">
                  <span className="relative w-3 h-3 mr-3 mt-2 flex-shrink-0">
                    <span className="absolute inset-0 border-2 border-foreground"></span>
                    <span className="absolute inset-0 border-t-2 border-l-2 border-foreground translate-x-[2px] translate-y-[2px]"></span>
                  </span>
                  <span>Soojuskadude arvutused</span>
                </li>
                <li className="text-sm sm:text-base text-muted-foreground flex items-start">
                  <span className="relative w-3 h-3 mr-3 mt-2 flex-shrink-0">
                    <span className="absolute inset-0 border-2 border-foreground"></span>
                    <span className="absolute inset-0 border-t-2 border-l-2 border-foreground translate-x-[2px] translate-y-[2px]"></span>
                  </span>
                  <span>Kütte- ja ventilatsioonisüsteemide optimeerimine</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mt-8 sm:mt-12 space-y-4 sm:space-y-6">
            <div className="border-l-2 border-border pl-4 sm:pl-6 py-4">
              <h2 className="text-lg sm:text-xl font-light mb-4 text-foreground flex items-center gap-3">
                <span className="w-2 h-2 border border-foreground rotate-45"></span>
                Termoraport
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                Termoraport koosneb kahest osast, et analüüs oleks võimalikult täpne.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                Objektil viiakse vajaliku aparatuuriga läbi umbes 0,5h uuring. Hiljem töödeldakse infot 
                vastava tarkvaraga ning väljastatakse termopraport.
              </p>
              
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-medium text-foreground mb-2">Välismõõdistused</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Näitel on krohitud seina soojustus üsna ebaühtlase soojapidavusega, puitfassaadi 
                    ülemises ääres olevast tuulutussoonest väljub soojenenud õhk mis on veel normipiires.
                  </p>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-medium text-foreground mb-2">Ruumisisesed mõõdistused</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Näitel on õhuleke toanurgast ja soojalekked alumises seinaosas. Lisaks külmasild läbi 
                    seina karkassipostide kohal. Seetõttu ruumis väga erinevad temperatuurid – ruumi õhk 20°C, 
                    põranda nurk 7.5°C
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Termoanaluus;
