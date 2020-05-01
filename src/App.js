import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import DeviceDetector from "device-detector-js";

const deviceDetector = new DeviceDetector();
const device = deviceDetector.parse(navigator.userAgent);

console.log(device);

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Incontri con l'arte</h1>
    </Jumbotron>

    <Tabs variant='pills' defaultActiveKey="chrome">
      <Tab eventKey="chrome" title="Google Chrome">
        <NotUsing os="Google Chrome" />
        Per seguire l'incontro sull'arte usando Google Chrome, ti basta cliccare su questo link che ti porterà direttamente al meeting su ZOOM.
        .
      </Tab>

      <Tab eventKey="windows" title="Windows">
        <NotUsing os="Windows" />

        <Download os="Windows" />

        <p>
          Finito lo scaricamento, apri il file .exe che hai scaricato e clicca
          sul pulsante Sì.
        </p>

        <Join />
      </Tab>

      <Tab eventKey="mac" title="Mac">
        <NotUsing os="Mac" />

        <Download os="Mac" />

        <p>
          Finito lo scaricamento, apri il pacchetto .pkg, clicca sul pulsante
          Continua e concedi all’applicazione il permesso di accedere alla
          cartella Download cliccando sul bottone OK.
        </p>

        <Join />
      </Tab>

      <Tab eventKey="iphone" title="iPhone">
        <NotUsing os="iPhone o iPad" />
        <p>
          Per accedere a un meeting zoom da Iphone o iPad,{" "}
          <a href="https://apps.apple.com/it/app/zoom-cloud-meetings/id546505307">
            scarica l'applicazione di zoom tramite l'App Store facendo tap su
            questo link
          </a>
          .
        </p>

        <p>
          Poi premi sul pulsante Ottieni accanto all'app ZOOM Cloud Meetings, e
          se serve conferma tramite Face ID, Touch ID o con la password del tuo
          account Apple.
        </p>

        <Join />
      </Tab>

      <Tab eventKey="android" title="Android">
        <NotUsing os="un dispositivo Android" />

        <p>
          Per accedere a un meeting zoom dal tuo dispositivo Android,{" "}
          <a href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings&hl=it">
            scarica l'applicazione di zoom tramite Play Store facendo tap su
            questo link.
          </a>
        </p>

        <p>
          Poi premi sul pulsante verde Installa. Al termine della procedura, fai
          tap sul pulsante Apri per avviare Zoom.
        </p>

        <Join />
      </Tab>
    </Tabs>
  </Container>
);

const NotUsing = ({ os }) => (
  <p className="small text-muted">
    Non stai usando {os}? Scegli quello che stai usando cliccando sopra e segui le istruzioni corrette per te.
  </p>
);

const Download = ({ os }) => (
  <p>
    Se usi {os},{" "}
    <a href="https://zoom.us/download">
      vai a questa pagina per scaricare ZOOM sul tuo computer:
    </a> clicca sul pulsante blu DOWNLOAD posto in alto, nella sezione
    Zoom Client for Meetings, e attendi il download del pacchetto
    d’installazione del programma.
  </p>
);

const Join = () => (
  <p>
    Una volta scaricato ZOOM, puoi partecipare all'
    <a href="//google.com" disabled>
      incontro sull'arte cliccando su questo link.
    </a>
    .
  </p>
);

export default App;
