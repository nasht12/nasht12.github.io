import React from "react";
import Layout from "../../components/Layout/Layout";
import HighwayBanner from "@/components/HighwayBanner/HighwayBanner";

const Misc: React.FC = () => {

  return (
    <Layout>
      <div>
        <h1 style={{ marginTop: "0.5rem", marginBottom:"3rem" }}><strong>Miscellaneous</strong></h1>
        <HighwayBanner />
      </div>
    </Layout>
  );
};

export default Misc;
