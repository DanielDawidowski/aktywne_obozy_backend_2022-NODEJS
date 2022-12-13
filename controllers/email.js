const { sendEmailWithNodemailer } = require("../email");

exports.contactForm = (req, res) => {
  //   console.log(req.body);
  const { name, email, message } = req.body;

  const emailData = {
    from: email, // MAKE SURE THIS EMAIL IS YOUR GMAIL FOR WHICH YOU GENERATED APP PASSWORD
    to: process.env.GMAIL_USER, // WHO SHOULD BE RECEIVING THIS EMAIL? IT SHOULD BE YOUR GMAIL
    subject: `Nowe pytanie z serwisu Aktywne Obozy`,
    text: `Sender email: ${email} \n Sender message: ${message}`,
    html: `
        <h4><bold>Pytanie od:</bold>  ${name}</h4>
        <p><bold>Wiadomość:</bold> ${message}</p>
        <hr />
    `,
  };

  sendEmailWithNodemailer(req, res, emailData);
};

exports.contactClientForm = (req, res) => {
  const { phone, email, name, eventName } = req.body;
  // console.log(req.body);

  // let mailList = [authorEmail, process.env.EMAIL_TO]

  const emailData = {
    to: email,
    from: process.env.EMAIL_TO,
    subject: "Dziekujemy za zgłoszenie",
    text: `Email recieved from contact from \n Sender name: ${name} \n Sender email: ${email} \n Sender email: ${phone}`,
    html: `
            <h1>Dziekujemy za zgłoszenie</h1>
            <h3>Wkrótce wyślemy wiadomość potwierdzającą wyjazd na ${eventName}</h3>
            <br>
            <br>
            <br>
            <h2>CHCIELIŚMY ZAKOMUNIKOWAĆ, IŻ W PIERWSZEJ KOLEJNOŚCI ROZPATRYWANE BĘDĄ ZGŁOSZENIA OSÓB W RAMACH DOFINANSOWANIA Z KRUS.<h2>
            <br>
            <h3>Karta wypoczynku – <bold>wypełniamy tylko punkt nr II. Informacje dotyczące uczestnika wypoczynku</bold>, na karcie muszą być podpisy obojga rodziców.</h3>
            <br>
            <h3>Skan wypełnionej karty wypoczynku należy jak najszybciej przesłać na maila zwrotnego.</h3>
            <br>
            <h2>WARUNKI UCZESTNICTWA W WYPOCZYNKU</h2> 
            <br>
            <h3>podpisać przez rodziców i uczestnika wypoczynku(dziecko)</h3>
            <br>
            <br>
            <h1>CENA: od 800 zł za 8 dni wraz z atrakcjami lub 300 zł + BON TURYSTYCZNY (KRUS)</h1>
            <p>Z wypoczynku zimowego w ramach dofinansowania z KRUS mogą skorzystać dzieci i młodzież urodzone po 1 stycznia 2007 r., których co najmniej jedno z rodziców /prawnych opiekunów/ jest ubezpieczone w pełnym zakresie (jednocześnie na ubezpieczenie emerytalną – rentowe oraz wypadkowe, chorobowe i macierzyńskie) lub pobiera rentę bądź emeryturę z Kasy Rolniczego Ubezpieczenia Społecznego.</p>
            <br>
            <h2>Cena bez dofinansowania wynosi 1100 zł  + BON TURYSTYCZNY lub 1600 zł.</h2>
            <h2>Warunkiem uczestnictwa i zapisania jest uregulowanie składaki członkowskiej – (300 zł) na konto:</h2>
            <br>
            <h3>KONTO UKS JUNIOR</h3>
            <h3>66 2030 0045 1110 0000 0146 0610</h3>
            <h3>Z dopiskiem „składka członkowska imię i nazwisko dziecka”</h3>
            <br>
            <h1>Całość kwoty za kolonie jest pomniejszana o składkę członkowską</h1>
            <br>
            <h3>Pozostałą kwotę do zapłaty proszę uregulować do dnia wyjazdu na to samo konto z dopiskiem:</h3>
            <h3>„${eventName} 2023, imię i nazwisko dziecka”</h3>
        `,
  };

  sendEmailWithNodemailer(req, res, emailData);
};

exports.contactAdminForm = (req, res) => {
  const { name, email, phone, eventName, age } = req.body;
  // console.log(req.body);

  // let mailList = [authorEmail, process.env.EMAIL_TO]

  const emailData = {
    to: process.env.EMAIL_TO,
    from: email,
    subject: `Nowe zgłoszenie od ${name} na ${eventName}`,
    text: `Email recieved from contact from \n Sender name: ${name} \n Sender email: ${email} \n Sender phone: ${phone}`,
    html: `
            <h1>Dane zgłoszenia: </h1>
            <p>Imię: ${name} </p>
            <p>Email: ${email} </p>
            <p>Tel: ${phone} </p>
            <p>Wiek: ${age}</p>
            <p>Nazwa Wyjazdu: ${eventName}</p>
        `,
  };

  sendEmailWithNodemailer(req, res, emailData);
};

exports.contactClientSpecForm = (req, res) => {
  const { phone, email, name } = req.body;
  // console.log(req.body);

  // let mailList = [authorEmail, process.env.EMAIL_TO]

  const emailData = {
    to: email,
    from: process.env.EMAIL_TO,
    subject: "Dziekujemy za zgłoszenie",
    text: `Email recieved from contact from \n Sender name: ${name} \n Sender email: ${email} \n Sender email: ${phone}`,
    html: `
            <h1>Dziekujemy za zgłoszenie</h1>
            <h3>Wkrótce wyślemy wiadomość potwierdzającą</h3>
            <br>
            <br>
            <br>
           
        `,
  };

  sendEmailWithNodemailer(req, res, emailData);
};
