import axios from "axios";
import { useState, useEffect } from "react";
import { LoadingScreen } from "@components";
import { KitaBisa } from "@models";
export const DonationCard = () => {
  const [kitabisa, setKitaBisa] = useState<KitaBisa>();
  const [kitaBisaLoading, setKitaBisaLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/kitabisa").then((response) => {
      setKitaBisa(response.data);
      setKitaBisaLoading(false);
    });
  }, []);

  if (kitaBisaLoading) {
    return <LoadingScreen className="w-screen h-screen" />;
  }

  return (
    <div>
      <div></div>
    </div>
  );
};
