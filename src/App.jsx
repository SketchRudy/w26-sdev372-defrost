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
      if (res.ok) {
        setStatus(`Saved as ${body.phoneNumber}`);
      } else {
        setStatus(body.error);
      }
    } catch (err) {
      console.error(err);
      setStatus("Network error");
    }
  };

  return (
    <>
      <h1><span>Defrost</span></h1>
      <div className="register">
        <div class="phone-input">
          <label htmlFor="phone-number">
            Enter a Phone Number:
            <input
              id="phone-number"
              value={phone}
              onChange={(e) => {
                const digits = e.target.value.replace(/\D/g, "");
                setPhone(digits.slice(0, 10));
              }}
              type="tel"
            />
          </label>
        </div>
        <button className="btn" onClick={handleSubmit}>
          Sign up
        </button>
        {status && <p>{status}</p>}
      </div>
    </>
  );
}

export default App
