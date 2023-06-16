import React, { Suspense } from 'react';
import { useRouter } from 'next/router';
const ComposantDynamique = React.lazy(() => import('./index'));


const InterfaceChargement = () => {
  return <div>Chargement en cours...</div>;
};


export default function compos() {
  return (
    <div>
      <h1>Composant de Contenu</h1>
      <Suspense fallback={<InterfaceChargement />}>
        <ComposantDynamique />
      </Suspense>
    </div>
  );
};

