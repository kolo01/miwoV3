import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, createConfig, WagmiProvider } from "wagmi";
import { mainnet, sepolia, base, polygon } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

// const { connectors } = getDefaultWallets({
//   appName: "Miwo",
//   projectId: "c95d630b6f0a39167408180df49e1b31",
//   chains: [mainnet, sepolia],
// });

//wallet connect id
const projectId = "c95d630b6f0a39167408180df49e1b31";

///rainbow kit config

const config = getDefaultConfig({
  appName: "Miwo",
  projectId: projectId,
  chains: [mainnet, sepolia, base],
  ssr: false, // If your dApp uses server side rendering (SSR)
});

//wagmi config
const wagmiConfi = createConfig({
  chains: [mainnet, base, sepolia],
  connectors: [injected(), walletConnect({ projectId }), metaMask(), safe()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [sepolia.id]: http(),
  },
});

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
