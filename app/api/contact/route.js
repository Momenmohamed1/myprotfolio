import { Resend } from "resend";

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Contact service is temporarily unavailable" },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "momenalberann6@gmail.com",
    replyTo: email,
    subject: `New message from ${name}`,
    html: `<p><strong>${esc(name)}</strong> (${esc(email)})</p>
           <p>Phone: ${esc(phone) || "-"}</p>
           <p>${esc(message)}</p>`,
  });

  if (error) return Response.json({ error }, { status: 500 });
  return Response.json({ ok: true });
}
