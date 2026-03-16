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
      from: `Portfolio Contact <${process.env.RESEND_EMAIL}>`,
      to: [process.env.MY_EMAIL || ''],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', Arial, sans-serif; background-color: #F8FAFC;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F8FAFC; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #16332E; padding: 32px 40px; text-align: center;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center">
                            <div style="display: inline-block; background-color: #C6F145; border-radius: 12px; padding: 12px;">
                              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16332E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                              </svg>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-top: 16px;">
                            <h1 style="margin: 0; color: #FFFFFF; font-size: 24px; font-weight: 700;">Nuevo Mensaje de Contacto</h1>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <!-- Info Cards -->
                        <tr>
                          <td>
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F8FAFC; border-radius: 12px; border: 1px solid #E2E8F0;">
                              <tr>
                                <td style="padding: 20px;">
                                  <table width="100%" cellpadding="0" cellspacing="0">
                                    <tr>
                                      <td style="padding-bottom: 16px;">
                                        <span style="display: inline-block; background-color: #C6F145; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; color: #16332E; text-transform: uppercase; letter-spacing: 0.5px;">Nombre</span>
                                        <p style="margin: 8px 0 0 0; color: #0F172A; font-size: 16px; font-weight: 500;">${name}</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="padding-bottom: 16px;">
                                        <span style="display: inline-block; background-color: #C6F145; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; color: #16332E; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
                                        <p style="margin: 8px 0 0 0; color: #0F172A; font-size: 16px; font-weight: 500;">${email}</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span style="display: inline-block; background-color: #C6F145; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; color: #16332E; text-transform: uppercase; letter-spacing: 0.5px;">Asunto</span>
                                        <p style="margin: 8px 0 0 0; color: #0F172A; font-size: 16px; font-weight: 500;">${subject}</p>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>

                        <!-- Message Section -->
                        <tr>
                          <td style="padding-top: 32px;">
                            <span style="display: inline-block; background-color: #C6F145; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; color: #16332E; text-transform: uppercase; letter-spacing: 0.5px;">Mensaje</span>
                            <div style="margin-top: 16px; padding: 24px; background-color: #F8FAFC; border-radius: 12px; border-left: 4px solid #C6F145;">
                              <p style="margin: 0; color: #0F172A; font-size: 15px; line-height: 1.7;">${message.replace(/\n/g, '<br>')}</p>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #16332E; padding: 24px 40px; text-align: center;">
                      <p style="margin: 0; color: #FFFFFF; font-size: 14px; opacity: 0.8;">Enviado desde tu Portfolio</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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
