import React from "react";
import { useParams } from "react-router-dom"; 

const ParamPage = () => {
  const param = useParams();
  return (
    <div>
      <h1>{param.name}</h1>
      <h2>Param Page</h2>
    </div>
  );
};

export default ParamPage;
