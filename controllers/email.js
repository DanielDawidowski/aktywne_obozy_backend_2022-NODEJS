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
            <h1>Dziekujemy za zgłoszenie ${name} </h1>
            <h3>Wkrótce wyślemy wiadomość potwierdzającą wyjazd na ${eventName}</h3>
        `,
  };

  sendEmailWithNodemailer(req, res, emailData);
};

exports.contactAdminForm = (req, res) => {
  const { phone, email, name, eventName } = req.body;
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
            <p>Nazwa Wyjazdu: ${eventName}</p>
        `,
  };

  sendEmailWithNodemailer(req, res, emailData);
};
