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
              Enne kui otsustad osta korteri, maja või äripinna – kontrollime kui palju see sooja/tuult peab. Vajalike mõõteriistadega aitame hinnata soojapidavust ja õhulekkeid, et ennetada ootamatuid küttekulusid. See kergendab oluliselt otsustamist ja annab hoonest/hinnast adekvaatsema pildi valiku tegemiseks. 
              1. Teostame infrapunakaameraga termograafilisi mõõdistusi soojalekete leidmiseks.
              2. Lisaks teeme ala- või ülerõhustamise kaudu kindlaks hoone õhuvahetuse ja analüüsime õhulekkeid. 
              3.Koostame vajadusel termoraporti ja anname eksperthinnangu või nõustame suuliselt kohe objektil. Loodame, et oma kogemuste ning asjatundlikkusega saame olla teile abiks.

Meie eksperdid  omavad suuri kogemusi ehitusprotsessidest, mis aitavad kaardistada ja analüüsida sinu tulevase kodu/korteri kvaliteeti enne ostu sooritamist
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

          <section className="mt-12 space-y-6">
            <div className="border-l-2 border-border pl-6 py-4">
              <h2 className="text-xl font-light mb-4 text-foreground flex items-center gap-3">
                <span className="w-2 h-2 border border-foreground rotate-45"></span>
                Termoraport
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Termoraport koosneb kahest osast, et analüüs oleks võimalikult täpne.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Objektil viiakse vajaliku aparatuuriga läbi umbes 0,5h uuring. Hiljem töödeldakse infot 
                vastava tarkvaraga ning väljastatakse termopraport.
              </p>
              
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">Välismõõdistused</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Näitel on krohitud seina soojustus üsna ebaühtlase soojapidavusega, puitfassaadi 
                    ülemises ääres olevast tuulutussoonest väljub soojenenud õhk mis on veel normipiires.
                  </p>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">Ruumisisesed mõõdistused</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
