import { useState } from "react";
import "./index.css";

function App() {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async () => {
    if (!phone.trim()) return;
    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: phone }),
      });
      const body = await res.json();
      setStatus(res.ok ? `Saved as ${body.phoneNumber}` : body.error);
    } catch (err) {
      console.error(err);
      setStatus("Network error");
    }
  };

  return (
    <>
      <h1>Defrost</h1>
      <div className="register">
        <label htmlFor="phone-number">
          Your Phone Number:
          <input
            id="phone-number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
          />
        </label>
        <button className="btn" onClick={handleSubmit}>
          Sign up
        </button>
        {status && <p>{status}</p>}
      </div>
    </>
  );
}

export default App
