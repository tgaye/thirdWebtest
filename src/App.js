import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAddress, useMetamask, useSigner, ThirdwebProvider } from '@thirdweb-dev/react';

function WalletConnect() {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const signer = useSigner();

  const signMessage = async () => {
    if (signer) {
      try {
        const signature = await signer.signMessage("I'm a user signing this message");
        console.log("Signature:", signature);
        alert("Message signed! Check the console for the signature.");
      } catch (error) {
        console.error("Error signing message:", error);
        alert("Failed to sign message.");
      }
    }
  };

  return (
    <div>
      {!address ? (
        <button onClick={connectWithMetamask}>Connect Wallet</button>
      ) : (
        <>
          <p>Wallet Address: {address}</p>
          <button onClick={signMessage}>Sign Message</button>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <ThirdwebProvider activeChain="ethereum" clientId="8af0db99eff6adab64264f624e6f17f8">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <WalletConnect />
        </header>
      </div>
    </ThirdwebProvider>
  );
}

export default App;
