import React, { useContext, useEffect } from "react";
import UserContext from "../components/UserContext";
import Index from "./Home";

export default function Home() {
  const { scrollRef } = useContext(UserContext);
  useEffect(() => {
    window.scrollTo(0, scrollRef.current.scrollPos);
    const handleScrollPos = () => {
      scrollRef.current.scrollPos = window.scrollY;
    };
    window.addEventListener("scroll", handleScrollPos);
    return () => {
      window.removeEventListener("scroll", handleScrollPos);
    };
  });

  return (
    <div>
      <Index />
    </div>
  );
}
