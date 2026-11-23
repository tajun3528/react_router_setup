import { useState } from "react";
import Button from "./Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail("");
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-center text-[10px] uppercase tracking-[0.3em] text-gray-500">
        Newsletter
      </p>
      <h2 className="mt-2 text-center text-3xl font-bold">
        Subscribe Our Newsletter
      </h2>

      <div className="mt-14 grid items-center gap-10 md:grid-cols-[1fr_1.6fr]">
        <img
          src="/newsletter.png"
          alt="Orange envelope with a letter"
          className="mx-auto w-48 md:w-56"
        />

        <div>
          <p className="text-xs leading-relaxed text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>

          <form onSubmit={handleSubmit} className="mt-5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your E-mail here..."
              className="w-full rounded-full bg-white px-8 py-4 text-sm shadow-[0_15px_30px_rgba(0,0,0,0.12)] outline-none focus:ring-2 focus:ring-orange-400"
            />
            <Button type="submit" size="sm" className="mt-6 w-full py-2.5">
              Subscribe Our Newsletter
            </Button>
          </form>

          {sent && (
            <p className="mt-3 text-xs text-green-600">
              Thanks for subscribing!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}