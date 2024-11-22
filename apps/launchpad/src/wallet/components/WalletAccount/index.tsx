import { WalletButton } from "@rainbow-me/rainbowkit";
import { useWalletClient } from "wagmi";

import { Button } from "@/shared/components/Button";
import { Typography } from "@/shared/components/Typography";
import { shortHex } from "@/wallet/wallet.helpers";

import styles from "./WalletAccount.module.scss";

export const WalletAccount: React.FC = () => {
  const { data } = useWalletClient();
  return (
    <div className={styles.layout}>
      <WalletButton.Custom wallet="metamask">
        {({ ready, connected, connect }) => (
          <>
            {connected && data ? (
              <Typography>{shortHex(data.account.address, 5)}</Typography>
            ) : (
              <Button variant={"solid"} color={"primary"} caption={"Connect Wallet"} onClick={connect} />
            )}
          </>
        )}
      </WalletButton.Custom>
    </div>
  );
};
