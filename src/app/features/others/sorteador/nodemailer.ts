import NodeMailer from "nodemailer";

var remetente = NodeMailer.createTransport({
  host: "smtp.gmail.com",
  service: "smtp.gmail.com",
  port: "587",
  secure: true,
  auth: {
    user: "msom.info@gmail.com",
    pass: "ggmsom1985"
  }
})

var emailASerEnviado = {
  from: "msom.info@gmail.com",
  to: "msom.info@gmail.com",
  subject: "Oi amor!",
  text: "Hi love!",
};

export default remetente.sendMail(emailASerEnviado, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email enviado com sucesso.");
  }
});

