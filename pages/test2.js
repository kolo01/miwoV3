// import * as React from "react";
// import { Connector, useConnect } from "wagmi";

// export default function WalletOptions() {
//   const { connectors, connect } = useConnect();

//   return connectors.map((connector) => (
//     <button key={connector.uid} onClick={() => connect({ connector })}>
//       {connector.name}
//     </button>

//   ));
// }

import {
  useConnectModal,
  useAccountModal,
  useChainModal,
  ConnectButton,
} from "@rainbow-me/rainbowkit";
const YourApp = () => {
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();
  return (
    <>
      {openConnectModal && (
        <button onClick={openConnectModal} type="button">
          Open Connect Modal
        </button>
      )}
      {openAccountModal && (
        <button onClick={openAccountModal} type="button">
          Open Account Modal
        </button>
      )}
      {openChainModal && (
        <button onClick={openChainModal} type="button">
          Open Chain Modal
        </button>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 12,
        }}
      >
        <ConnectButton />
      </div>
    </>
  );
};

export default YourApp;

// import React, { useState } from "react";
