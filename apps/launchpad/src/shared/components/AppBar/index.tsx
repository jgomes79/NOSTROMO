import React from "react";
import { Link } from "react-router-dom";

import { RiDiscordFill, RiMediumFill, RiTelegramFill, RiTwitterXFill } from "react-icons/ri";

import { Links } from "@/shared/components/Links";
import { Typography } from "@/shared/components/Typography";
import { WalletAccount } from "@/wallet/components/WalletAccount";

import styles from "./AppBar.module.scss";

export const AppBar: React.FC = () => {
  return (
    <header className={styles.header}>
      <Typography className={styles.logotype}>Nostromo</Typography>
      <nav className={styles.navigator}>
        <Link to={"/"}>IDO Launchpad</Link>
        <Link to={"/"}>Stake / Farm</Link>
      </nav>
      <div className={styles.row}>
        <Links
          data={[
            {
              path: "https://discord.com",
              icon: <RiDiscordFill />,
            },
            {
              path: "https://telegram.com",
              icon: <RiTelegramFill />,
            },
            {
              path: "https://medium.com",
              icon: <RiMediumFill />,
            },
            {
              path: "https://x.com",
              icon: <RiTwitterXFill />,
            },
          ]}
        />
        <WalletAccount />
      </div>
    </header>
  );
};
