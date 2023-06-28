import { useSpring } from "@react-spring/web";
import useIntersectionObserver from "./useIntersectionObserver";

// Component slides up with high tension
export const useSlideUpLargeSpring = (ref) => {

  const dataRef = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: .25,
  });

  return useSpring({
    from: {
      marginTop: -25,
      opacity: 0,
    },
    to: {
      marginTop: dataRef?.isIntersecting ? 0 : -25,
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
    config: {
      mass: 1,
      tension: 200,
      friction: 20,
    }
  });
}

// Component slides up with low tension and friction
export const useSlideUpSmallSpring = (ref) => {

  const dataRef = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: .25,
  });

  return useSpring({
    from: {
      marginTop: 50,
      opacity: 0,
    },
    to: {
      marginTop: dataRef?.isIntersecting ? 0 : 50,
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
    config: {
      mass: 1,
      tension: 50,
      friction: 10,
    }
  });
}

// Component slides up with low tension and friction
export const useSlideUpTinySpring = (ref) => {

  const dataRef = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: .25,
  });

  return useSpring({
    from: {
      position: "relative",
      top: 50,
      left: 5,
      opacity: 0,
    },
    to: {
      position: "relative",
      top: dataRef?.isIntersecting ? 0 : 50,
      left: dataRef?.isIntersecting ? 0 : 5,
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
    config: {
      mass: 1,
      tension: 200,
      friction: 20,
    }
  });
}