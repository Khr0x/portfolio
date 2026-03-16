import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Enviar correo usando Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Cambiar cuando tengas tu dominio
      to: ['cristian.mendezig@gmail.com'], // Tu email
      replyTo: email, // Email del usuario que envió el mensaje
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nuevo mensaje de contacto</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Asunto:</strong> ${subject}</p>
          </div>
          <div style="margin-top: 20px;">
            <h3 style="color: #333;">Mensaje:</h3>
            <p style="line-height: 1.6; color: #666;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Inténtalo de nuevo.' },
      { status: 500 }
    );
  }
}
