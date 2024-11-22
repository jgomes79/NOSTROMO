import React from "react";

import { SkyBox } from "@/home/components/SkyBox";
import { Button } from "@/shared/components/Button";
import { Typography } from "@/shared/components/Typography";

import styles from "./HomePage.module.scss";
import NostromoImage from "../../assets/images/nostromo.png";

export const HomePage: React.FC = () => {
  return (
    <SkyBox>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.field}>
            <Typography variant={"heading"} className={styles.title} size={"xlarge"} textAlign={"center"}>
              Enter the Gateway of Blockchange Innovation
            </Typography>
            <div className={styles.actions}>
              <Button variant={"solid"} color={"primary"} size={"large"} caption={"Buy $NFUND"} />
              <Button variant={"solid"} color={"secondary"} size={"large"} caption={"How to Start"} />
            </div>
          </div>
          <img alt={"starship"} src={NostromoImage} className={styles.starship} width={"100%"} />
        </div>
      </div>
    </SkyBox>
  );
};
