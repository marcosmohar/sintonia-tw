import nodemailer from "nodemailer";
export default async (req, res) => {
  const { name, email, empresa, mensaje } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.dreamhost.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: "contacto@sintonia.soy",
      subject: `Formulario de contacto de ${name}`,
      html: `<p>Tienes un nuevo mensaje de </p><br>
      <p><strong>Nombre: </strong> ${name} </p><br>
      <p><strong>Empresa: </strong> ${empresa} </p><br>
      <p><strong>Email: </strong> ${email} </p><br>
      <p><strong>Mensaje: </strong> ${mensaje} </p><br>

       `,
    });

    console.log("Message Sent");
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
