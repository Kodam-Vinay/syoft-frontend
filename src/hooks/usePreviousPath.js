import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const usePreviousPath = () => {
  const location = useLocation();
  const previousPathRef = useRef();

  useEffect(() => {
    if (previousPathRef?.current !== location?.pathname) {
      previousPathRef.current = location?.pathname;
    }
  }, [location?.pathname]);

  return previousPathRef.current;
};

export default usePreviousPath;
