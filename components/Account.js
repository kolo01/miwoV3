import { Box, Button, Image } from "@chakra-ui/react";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name });

  return (
    <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}>
      {ensAvatar && <Image alt="ENS Avatar" src={ensAvatar} />}
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}

      <Button colorScheme={"red"} onClick={() => disconnect()}>
        Disconnect
      </Button>
    </Box>
  );
}
