import { useState, useEffect } from "react";
import { useForm } from "@formspree/react";

/**
 *
 * @returns {Element}
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmedState, setConfirmedState] = useState(false);

  const [state, handleSubmit] = useForm("xnqenyrj");

  useEffect(() => {
    if (state.succeeded) {
      setName("");
      setEmail("");
      setMessage("");
      setConfirmedState(true);
    }
  }, [state]);

  return (
    <>
      {!confirmedState ? (
        <form
          id="contact"
          className="bg-blue-50/50 shadow-lg w-full md:w-[600px] font-sans md:rounded-xl py-12 px-4 md:p-12 flex flex-col gap-6 text-slate-600"
          onSubmit={handleSubmit}
        >
          <div>
            <h3 className="text-2xl md:text-4xl text-brand-950 w-full mb-1">
              Get In Touch
            </h3>
            <p className="font-thin">
              Send me a message and I will get back to you as soon as I can!
            </p>
          </div>

          <fieldset className="flex flex-col gap-2">
            <label>Name:</label>
            <input
              className="border bg-slate-50 border-slate-300 shadow-sm rounded-md py-2 px-3 font-thin"
              placeholder="John Smith"
              onChange={(e) => setName(e.value)}
              name="name"
              value={name}
              type="text"
              required
            />
          </fieldset>

          <fieldset className="flex flex-col gap-2">
            <label>Email:</label>
            <input
              className="border bg-slate-50 border-slate-300 shadow-sm rounded-md py-2 px-3 font-thin"
              placeholder="johnsmith@email.com"
              onChange={(e) => setEmail(e.value)}
              name="email"
              value={email}
              type="email"
              required
            />
          </fieldset>

          <fieldset className="flex flex-col gap-2">
            <label>Message:</label>
            <textarea
              rows="5"
              placeholder="I am in need of..."
              className="border bg-slate-50 border-slate-300 shadow-sm rounded-md py-2 px-3 font-thin"
              onChange={(e) => setMessage(e.value)}
              name="message"
              value={message}
              type="text"
              required
            />
          </fieldset>

          <button
            type="submit"
            className="mt-4 py-4 px-3 bg-brand-950 hover:bg-brand-900 shadow-lg rounded-md text-xl text-brand-100 transition-all"
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      ) : (
        <div className="bg-blue-50/50 shadow-lg md:w-[600px] font-sans rounded-xl my-16 mx-8 md:m-auto p-8 flex flex-col gap-6 text-slate-600">
          <p>
            Thank you for reaching out! I will send a response to your email as
            soon as I can.
          </p>
        </div>
      )}
    </>
  );
}
