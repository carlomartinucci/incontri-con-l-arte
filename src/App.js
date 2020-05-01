import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Alert from "react-bootstrap/Alert";

import DeviceDetector from "device-detector-js";

const deviceDetector = new DeviceDetector();
const device = deviceDetector.parse(navigator.userAgent);

console.log(device);
const zoomMeetingUrl = "//google.com";

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Incontro con l'arte</h1>
      <h2>Sabato 9 maggio, ore 20.30</h2>
      <p>Istruzioni per accedere</p>
    </Jumbotron>

    <Tabs variant="pills" defaultActiveKey="chrome">
      <Tab eventKey="chrome" title="Google Chrome">
        <NotUsing os="Google Chrome" />
        Per seguire l'incontro sull'arte usando Google Chrome, ti basta{" "}
        <a href={zoomMeetingUrl}>cliccare su questo link</a> che ti porterà
        direttamente al meeting su ZOOM.
      </Tab>

      <Tab eventKey="windows" title="Windows">
        <NotUsing os="Windows" />
        <AlreadyInstalled />

        <Download os="Windows" />

        <p>
          Finito lo scaricamento, apri il file .exe che hai scaricato e clicca
          sul pulsante <em>Sì</em>.
        </p>

        <Join />
      </Tab>

      <Tab eventKey="mac" title="Mac">
        <NotUsing os="Mac" />
        <AlreadyInstalled />

        <Download os="Mac" />

        <p>
          Finito lo scaricamento, apri il pacchetto .pkg, clicca sul pulsante{" "}
          <em>Continua</em> e concedi all’applicazione il permesso di accedere
          alla cartella Download cliccando sul bottone <em>OK</em>.
        </p>

        <Join />
      </Tab>

      <Tab eventKey="iphone" title="iPhone/iPad">
        <NotUsing os="iPhone o iPad" />
        <AlreadyInstalled />

        <p>
          Per seguire l'incontro sull'arte da iPhone o iPad, scarica{" "}
          <a href="https://apps.apple.com/it/app/zoom-cloud-meetings/id546505307">
            l'applicazione di ZOOM tramite l'App Store
          </a>
          .
        </p>

        <p>
          Poi premi sul pulsante <em>Ottieni</em> accanto all'app{" "}
          <em>ZOOM Cloud Meetings</em> e, se necessario, conferma tramite Face
          ID, Touch ID o con la password del tuo account Apple.
        </p>

        <Join />
      </Tab>

      <Tab eventKey="android" title="Android">
        <NotUsing os="un dispositivo Android" />
        <AlreadyInstalled />

        <p>
          Per seguire l'incontro sull'arte dal tuo dispositivo Android, scarica{" "}
          <a href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings&hl=it">
            l'applicazione di ZOOM tramite Play Store
          </a>
          .
        </p>

        <p>
          Poi premi sul pulsante verde <em>Installa</em>. Al termine della
          procedura, clicca sul pulsante <em>Apri</em> per avviare ZOOM.
        </p>

        <Join />
      </Tab>
    </Tabs>
  </Container>
);

const NotUsing = ({ os }) => (
  <p className="small text-muted mt-3">
    Non stai usando {os}? Scegli quello che stai usando cliccando sopra e segui
    le istruzioni corrette per te.
  </p>
);

const Download = ({ os }) => (
  <p>
    Se usi {os},{" "}
    <a href="https://zoom.us/download">
      vai a questa pagina per scaricare ZOOM sul tuo computer:
    </a>{" "}
    clicca sul pulsante blu <em>Download</em> posto in alto, nella sezione{" "}
    <em>Zoom Client for Meetings</em>, e attendi il download del pacchetto
    d’installazione del programma.
  </p>
);

const Join = () => (
  <p>
    Una volta scaricato ZOOM, puoi partecipare all'
    <a href={zoomMeetingUrl}>incontro sull'arte cliccando su questo link</a>.
  </p>
);

const AlreadyInstalled = () => (
  <Alert variant="success">
    Hai già installato ZOOM?{" "}
    <a href={zoomMeetingUrl}>Clicca qui per partecipare all'incontro</a>.
    Altrimenti segui le istruzioni
  </Alert>
);

export default App;
