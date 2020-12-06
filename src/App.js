import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Alert from "react-bootstrap/Alert";
import DeviceDetector from "device-detector-js";

const CONGDON_URL = `${process.env.PUBLIC_URL}/img/congdon.jpg`

const defaultActiveKey = (() => {
  const deviceDetector = new DeviceDetector();
  const { device, os, client } = deviceDetector.parse(navigator.userAgent);

  if (os.name === "iOS" && ["smartphone", "tablet"].includes(device.type)) {
    return "iphone";
  } else if (os.name === "iOS") {
    return "mac";
  } else if (os.name === "Windows") {
    return "windows";
  } else if (os.name === "Android") {
    return "android";
  } else if (client.name === "Chrome") {
    return "chrome";
  } else {
    return "windows";
  }
})();

// `
// Topic: Catechesi con l'arte
// Time: May 9, 2020 04:00 PM Rome

// Join Zoom Meeting


// Meeting ID: 857 5787 4856
// `

const zoomMeetingUrl = "https://us02web.zoom.us/j/85757874856";

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Meditazioni con l'arte</h1>
      <h2>venerdì 18 dicembre, ore 21</h2>
      <p>Istruzioni per accedere</p>
    </Jumbotron>

    <a href={CONGDON_URL} className="d-flex flex-column mb-4">
      <p className="text-center">
        Clicca per scaricare l'immagine della natività di Congdon<br/>
      </p>
      <Image src={CONGDON_URL} fluid className="m-auto"></Image>
    </a>

    <Tabs variant="pills" defaultActiveKey={defaultActiveKey}>
      <Tab eventKey="chrome" title="Google Chrome">
        <NotUsing os="Google Chrome" />
        Per seguire l'incontro sull'arte usando Google Chrome, ti basta{" "}
        <a href={zoomMeetingUrl}>cliccare su questo link</a> che ti porterà
        direttamente al meeting su ZOOM.

        <MeetingId />
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
        <MeetingId />
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
        <MeetingId />
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
        <MeetingId />
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
        <MeetingId />
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

const MeetingId = () => <Alert variant="info" className="mt-3">
  Argomento: Catechesi con l'arte<br/>
  Data: Sabato 9 Maggio 2020, ore 16.00<br/>
  Meeting ID: <b>857 5787 4856</b>
</Alert>

export default App;
