import { useState } from "react";
import { Header } from "../components";

/**
 *
 * @returns {Element}
 */
export function PartykitMessages() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // connect to our server
  const partySocket = new PartySocket({
    host: "localhost:1999",
    room: "my-room",
  });

  // send a message to the server
  // partySocket.send("Hello everyone");

  // print each incoming message from the server to console
  partySocket.addEventListener("message", (e) => {
    const newMessages = [...messages];
    if (messages[messages.length - 1] !== e.data) {
      newMessages.push(e.data);
      setMessages(newMessages);
    }
  });

  return (
    <div className="bg-slate-100 ">
      <Header />
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-24 w-full mt-8 md:mt-16 flex flex-col gap-16 justify-center">
        <h1 className=" text-6xl md:text-8xl leading-none text-brand-900 tracking-tight font-bold">
          Partykit 🎉 Chat Board
        </h1>
        <form
          className="mx-auto flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            partySocket.send(input);
            setInput("");
          }}
        >
          <input
            className="w-96 h-10 rounded-md border border-slate-300 font-thin px-2"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            // onSubmit={(e) => {
            //   e.preventDefault();
            //   partySocket.send(input);
            // }}
          />
          {/* TODO: Replace with  my button component */}
          <button
            className="text-lg bg-brand-900 text-white px-4 py-1 rounded-md"
            onClick={() => partySocket.send(input)}
          >
            Send
          </button>
        </form>
        <div>
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
