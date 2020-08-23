import React, { useRef, useEffect, useState } from "react";
import Loader from "./loader";
import gsap from "gsap";

const inputStyles = {
  width: "400px",
  height: "40px",
  padding: "2%",
};
const btnStyles = {
  height: "30px",
  width: "200px",
  backgroundColor: "red",
  color: "white",
  cursor: "pointer",
  border: "none",
  padding: "2%",
};

const tl = gsap.timeline();

const SampleForm = () => {
  const [showLoader, setShowLoader] = useState(false);
  const formRef = useRef(null);
  const loaderRef = useRef(null);

  function handleClick(e) {
    e.preventDefault();
    console.log("I am cicked");
    tl.from(formRef.current, { duration: 0.3, scale: 1 });
    tl.to(formRef.current, {
      duration: 0.3,
      scale: 0,
      onComplete() {
        setShowLoader(true);
      },
    });
  }

  const LoginForm = (
    <form action="" ref={formRef}>
      <input type="text" placeholder="Type email" style={inputStyles} value="n.k@gmail.com" />
      <br />
      <input type="text" placeholder="Type password" style={inputStyles} value="asdfsfd" />
      <br />
      <button style={btnStyles} onClick={(e) => handleClick(e)}>
        Submit
      </button>
    </form>
  );

  const MyLoader = <Loader changeLoader={setShowLoader} />;

  useEffect(() => {
    tl.from(formRef.current, { scale: 0 });
    tl.to(formRef.current, { duration: 2, scale: 1 });
  }, [formRef]);
  return <div>{showLoader ? MyLoader : LoginForm}</div>;
};

export default SampleForm;
