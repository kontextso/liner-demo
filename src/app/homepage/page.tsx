"use client"

import { AdsProvider, QueryStatic } from '@kontextso/sdk';
import styles from "../page.module.css";
import { useState } from 'react';

export default function Home() {
  const [userId] = useState(() => Math.random().toString());
  const [conversationId] = useState(() => Math.random().toString());

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <AdsProvider
          publisherToken='liner-nns8egt11d'
          isLoading={false}
          messages={[]} 
          userId={userId}
          conversationId={conversationId}
          enabledPlacementCodes={['queryStatic']}
        >
          <div>Homepage demo</div>

          <div>
            <QueryStatic
              code="queryStatic"
              onClick={(suggestion: any) => window.alert('Clicked on ad with suggestion: ' + suggestion)}
            />
          </div>
        </AdsProvider>
      </main>
    </div>
  );
}
