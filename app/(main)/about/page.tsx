"use client";
import { useSearchParams } from "next/navigation";

function About() {
  const searchParams = useSearchParams();
  const a = searchParams.get("a");

  console.log("inside about props", a);
  return (
    <div
      onClick={() => {
        console.log("salam");
      }}
    >
      This is the about page{" "}
    </div>
  );
}

export default About;
