// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { useAddress, ConnectWallet, ThirdwebProvider } from '@thirdweb-dev/react';


// function WalletConnect() {
//   const address = useAddress();
//   console.log(address);

//   return (
//   <div>
//       <ConnectWallet />
//       {address && (
//         <>
//           {/* Show additional buttons or information when the user is connected */}
//         </>
//       )}
//     </div>
//   );
// }

// function App() {
//   return (
//     <ThirdwebProvider
//       activeChain="mumbai"
//       clientId="8af0db99eff6adab64264f624e6f17f8"
//     >
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <WalletConnect />
//         </header>
//       </div>
//     </ThirdwebProvider>
//   );
// }

// export default App;



///  MOBILE EMAIL SIGNUP ITS SO GLORIOUS DONT LOSE THIS CODE

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThirdwebProvider, smartWallet, embeddedWallet, useAddress, ConnectWallet } from '@thirdweb-dev/react';

function WalletConnect() {
  const address = useAddress();

  return (
    <div>
      <ConnectWallet />
      {address && (
        <>
          <p>Connected Address: {address}</p>
          {/* Add more logic or components here that depend on the wallet being connected */}
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId="8af0db99eff6adab64264f624e6f17f8"
      supportedWallets={[
        smartWallet(embeddedWallet(), {
          factoryAddress: "0xA4a0b37823a19541D0d2e049cC935E6398b5AB9F", // Replace with your actual factory address
          gasless: true,
        }),
      ]}
    >
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
