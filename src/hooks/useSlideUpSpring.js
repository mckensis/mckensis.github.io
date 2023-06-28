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
export const useSlideUpTinySpring = (ref, threshold) => {

  const dataRef = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: threshold || .25,
  });

  return useSpring({
    from: {
      position: "relative",
      top: 50,
      scale: .9,
      opacity: 0,
    },
    to: {
      position: "relative",
      scale: dataRef?.isIntersecting ? 1 : .9,
      top: dataRef?.isIntersecting ? 0 : 50,
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
    config: {
      mass: 1,
      tension: 200,
      friction: 20,
    }
  });
}