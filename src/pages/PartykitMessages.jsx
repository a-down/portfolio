import { useState } from "react";
import PartySocket from "partysocket";

export default function PartykitMessages() {
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
    <div className="bg-slate-100">
      <h1>Partykit</h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => partySocket.send(input)}>Send</button>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </div>
  );
}
