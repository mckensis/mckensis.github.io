import { useSpring } from "@react-spring/web";
import useIntersectionObserver from "./useIntersectionObserver";

// Component slides up with high tension
export const useScaleUpLargeSpring = (ref) => {

  const dataRef = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: 1,
  });

  return useSpring({
    from: {
      scale: 0,
      opacity: 0,
    },
    to: {
      scale: dataRef?.isIntersecting ? 1 : 0,
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
    config: {
      mass: 1,
      tension: 200,
      friction: 20,
    }
  });
}

// For subtitle below each section heading
export const useScaleUpSmallSpring = (ref) => {

  const dataRef = useIntersectionObserver(ref, {
    freezeOnceVisible: true
  });

  return useSpring({
    from: {
      scale: .5,
      opacity: 0,
    },
    to: {
      scale: dataRef?.isIntersecting ? 1 : .5,
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
    config: {
      mass: 1,
      tension: 100,
      friction: 10,
    }
  });
}

// For subtitle below each section heading
export const useScaleUpTinySpring = (ref) => {

  const dataRef = useIntersectionObserver(ref, {
    freezeOnceVisible: true
  });

  return useSpring({
    from: {
      scale: .5,
      opacity: 0,
    },
    to: {
      scale: dataRef?.isIntersecting ? 1 : .5,
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
    config: {
      mass: 1,
      tension: 500,
      friction: 70,
    }
  });
}