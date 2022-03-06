const nodemailer = require('nodemailer')

const sendEmail = async(req,res) =>{
  let testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'matilda.feil86@ethereal.email',
        pass: '6F7Wy1SbW2t97816uS'
    }
});

  let info = await transporter.sendMail({
    from: '"Movic Tech" <movictech@gmail.com',
    to: 'bar@example.com',
    subject: 'Hello',
    html: '<h2>Hello Africa!</h2>'
  })
  res.json(info)
}

module.exports = sendEmail