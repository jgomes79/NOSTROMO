import { WalletAccount } from "@/wallet/components/WalletAccount";

import styles from "./AppBar.module.scss";

export const AppBar: React.FC = () => {
  return (
    <header className={styles.header}>
      <WalletAccount />
    </header>
  );
};
