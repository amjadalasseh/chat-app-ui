"use client";

import React from "react";
import Card from "@/components/Card/Card";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const Refund = () => {
  const description =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
  return (
    <div className="flex flex-col justify-left items-left ">
      <Breadcrumb />
      <Card
        title={"Our refund polices"}
        description={description}
        shadow
        rounded
      />
    </div>
  );
};

export default Refund;
