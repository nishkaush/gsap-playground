import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const tl = gsap.timeline();

const Loader = ({ changeLoader }) => {
  const loaderRef = useRef(null);

  useEffect(() => {
    tl.from(loaderRef.current, { duration: 1, scale: 0, delay: 0.3 });
    tl.to(loaderRef.current, { duration: 1, scale: 2 });
    tl.to(loaderRef.current, { duration: 1, scale: 1 });
  }, [loaderRef]);

  return (
    <div onClick={() => changeLoader(false)} ref={loaderRef}>
      <p>I am the loader</p>
    </div>
  );
};

export default Loader;
