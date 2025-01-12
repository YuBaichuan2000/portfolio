// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST() {

    const { body } = await req.json();
    const { email, subject, message } = body;


    try {
        const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: [email],
        subject: subject,
        react: (<div>
                    <h1>{subject}</h1>
                    <p>Thank you for reaching out!</p>
                    <p>New message submitted:</p>
                    <p>{message}</p>
                </div>)
        });

        if (error) {
        return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
    }
