import React, { useState } from "react";
import { ethers } from "ethers";

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState("");

  // Connect ke MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (err) {
        console.error("Wallet connection failed:", err);
      }
    } else {
      alert("MetaMask belum terpasang!");
    }
  };

  // Cek domain (dummy logic)
  const checkDomain = () => {
    if (domain.toLowerCase().includes("flip")) {
      setResult(`✅ Domain "${domain}" tersedia`);
    } else {
      setResult(`❌ Domain "${domain}" sudah dipakai`);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Doma dApp Demo</h1>

      <button onClick={connectWallet}>
        {walletAddress ? `Wallet: ${walletAddress}` : "Connect Wallet"}
      </button>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Masukkan nama domain..."
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
        <button onClick={checkDomain}>Check Domain</button>
      </div>

      {result && <p style={{ marginTop: "20px" }}>{result}</p>}
    </div>
  );
}

export default App;
