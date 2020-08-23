import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const TlBasic = () => {
  const tlBasicHeading = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {
    // tl.to(tlBasicHeading.current, { y: 200, ease: "bounce", duration: 1.5 });
    // tl.to(tlBasicHeading.current, { color: "red", fontSize: "1.5em" });
    tl.to("h2", { y: 200, ease: "bounce", duration: 1.5 });
    tl.to("h2", { color: "red", duration: 2 });
    tl.to(tlBasicHeading.current, { rotateZ: 135, ease: "elastic.out", duration: 2 });
  }, [tlBasicHeading]);

  return (
    <div>
      <h2 ref={tlBasicHeading}>I am simple basic timeline example</h2>
    </div>
  );
};

export default TlBasic;
