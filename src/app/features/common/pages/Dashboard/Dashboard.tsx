import { useEffect } from "react";

import { useMatch } from "react-router-dom";

import { Calculator } from "@app-features/common/components";

export const Dashboard = () => {
  const match = useMatch("/dashboard");

  useEffect(() => {
    console.log("match route::", match);
  }, [match]);

  return (
    <article className="dashboard-page-container">
      <Calculator />
    </article>
  );
};
