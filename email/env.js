const nodemailer = require('nodemailer')
const fs = require('fs');
const path = require('path')
const ListaEmails = require('./functions')

//Criar um objeto de transporte
const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 587,
    secure: false, // usar SSL  
  auth: {
    user: '3d93523f4a631b',
    pass: 'f6813c3b72af8a',
  } 
});

//Caminho do arquivo HTML
const htmlFile = path.join(__dirname, 'structure.html')

//ler todo o html
fs.readFile(htmlFile, 'utf8', (err, htmlContent) => {
  if (err) {
    console.log("Erro ao ler o arquivo HTML:", err.message)
    return
  }

// Configurar o objeto mailOptions
const mailOptions = {
  from: 'lazarogalrao56@gmail.com',
  to: ListaEmails(),
  subject: 'Teste de envio',
  html: htmlContent
  
};

// Enviar o email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log("Não enviado" + error.message)
  } else {
    console.log('Email enviado: ' + info.response)
  }
})
})