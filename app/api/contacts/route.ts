import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	try {
		const { name, email, message } = await req.json();

		console.log(name, email, message);

		if (!name || !email || !message) {
			return Response.json(
				{ error: "All fields are required." },
				{ status: 400 },
			);
		}

		await resend.emails.send({
			from: "Portfolio Software <contact@diegotuesta.site>",
			to: "diegotuestav@gmail.com",
			replyTo: email,
			subject: `New message from ${name}`,
			html: `
        <h2>New contact from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
		});

		return Response.json({ success: true });
	} catch (error) {
		console.error("[contact] Failed to send email:", error);
		return Response.json(
			{ error: "Failed to send message. Please try again." },
			{ status: 500 },
		);
	}
}
