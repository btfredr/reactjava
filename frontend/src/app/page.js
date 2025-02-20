import EmployeeList from "./components/EmployeeList";
import Nav from "./components/Nav";

export const metadata = { title: "HHF Eiendomsutvikling" }

export default function Home() {
  
  return (
    <>
      <Nav />
      <html>
        <body>


    <section id="hero" class="hero">
      <div class="hero-content">
        <h1>Bygg drømmen – Vi realiserer visjoner</h1>
        <p>Med erfaring, innovasjon og engasjement skaper vi bærekraftige eiendomsløsninger som former morgendagens samfunn</p>
        <a href="/kontakt" class="cta-button">Få en gratis konsultasjon</a>
      </div>
    </section>


    <section id="omoss">
      <h2>Om Oss</h2>
      <p>
        Hos Hoff, Haugen & Fordelsen Eiendomsutvikling kombinerer vi tradisjon med innovasjon for å realisere dine visjoner. <br />
        Vi leverer prosjekter med kvalitet, bærekraft og dedikasjon.
      </p>
    </section>

    <section id="tjenester">
      <h2>Våre Tjenester</h2>
      <div class="services">
        <div class="service-item">
          <h3>Prosjektutvikling</h3>
          <p>Vi forvandler ideer til virkelighet fra start til slutt.</p>
        </div>
        <div class="service-item">
          <h3>Investering & Finansiering</h3>
          <p>Vi sikrer optimal finansiering for alle dine prosjekter.</p>
        </div>
        <div class="service-item">
          <h3>Bærekraftig Utvikling</h3>
          <p>Miljøvennlige løsninger for en grønn fremtid.</p>
        </div>
        <div class="service-item">
          <h3>Arkitektonisk Rådgivning</h3>
          <p>Kreativt design med fokus på funksjonalitet og estetikk.</p>
        </div>
      </div>
    </section>

    <section id="prosjekter">
      <h2>Vår Prosess</h2>
      <ol>
        <li><strong>Idé & Konsept:</strong> Vi lytter til dine behov og utvikler et unikt konsept.</li>
        <li><strong>Planlegging & Design:</strong> Vi samarbeider med eksperter for å utforme det perfekte prosjektet.</li>
        <li><strong>Implementering:</strong> Vi realiserer prosjektet med fokus på kvalitet og bærekraft.</li>
        <li><strong>Oppfølging:</strong> Vi sikrer at prosjektet gir varig verdi for alle involverte.</li>
      </ol>
    </section>

    <section id="referanser">
      <h2>Kundereferanser</h2>
      <blockquote>
        "Hoff, Haugen & Fordelsen forvandlet våre drømmer til virkelighet med enestående profesjonalitet."
        <cite>– En fornøyd kunde</cite>
      </blockquote>
    </section>

    <section id="kontakt">
      <h2>Kontakt Oss</h2>
      <p>Ønsker du å høre mer om hvordan vi kan realisere ditt prosjekt? Ta kontakt med oss for en uforpliktende prat!</p>
      <a href="mailto:kontakt@hhfeiendom.no" class="cta-button">Send e-post</a>
    </section>

    
    <footer>
      <p>&copy; 2025 Hoff, Haugen & Fordelsen Eiendomsutvikling. Alle rettigheter reservert.</p>
    </footer>
  </body>
  </html>
 
    </>
  );
}
