import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

import ProfilModla from "./ProfilModla";

export default function Home() {
  const [showProfilModal, setShowProfilModal] = useState(false);

  return (
    <div className="h-100">
      <Navbar setShowProfilModal={setShowProfilModal} />
      {showProfilModal && (
        <ProfilModla setShowProfilModal={setShowProfilModal} />
      )}
      <Dashboard setShowProfilModal={setShowProfilModal}/>
    </div>
  );
}
