"use client";

import { AdsProvider, BoxAd } from "@kontextso/sdk";
import styles from "../page.module.css";
import { useState } from "react";

export default function Sources() {
  const [userId] = useState(() => Math.random().toString());
  const [conversationId] = useState(() => Math.random().toString());

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <AdsProvider
          publisherToken="liner-nns8egt11d"
          isLoading={false}
          messages={[
            {
              id: "1",
              role: "user",
              content: "Tell me about VPN",
              createdAt: new Date(),
            },
            {
              id: "2",
              role: "assistant",
              content:
                "VPN is a technology that allows you to create a secure connection to the internet. It is a virtual private network that encrypts your data and sends it through a secure server.",
              createdAt: new Date(),
            },
          ]}
          userId={userId}
          conversationId={conversationId}
          enabledPlacementCodes={["sourcesTop"]}
        >
          <BoxAd code="sourcesTop" messageId="2" />
        </AdsProvider>
      </main>
    </div>
  );
}
