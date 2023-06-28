import { useSpring } from "@react-spring/web";
import useIntersectionObserver from "./useIntersectionObserver";

export const useHeroLinkSpring = (ref) => {

  const dataRef = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: .5,
  });

  return useSpring({
    from: {
      scale: 0.5,
      opacity: 0,
      marginTop: -25,
    },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      scale: dataRef?.isIntersecting ? 1 : 0.5,
      marginTop: dataRef?.isIntersecting ? 0 : -25,
    },
    config: {
      mass: 1,
      tension: 300,
      friction: 10
    },
  });
}
export const useHeroLinksSectionSpring = (ref) => {

  const dataRef = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: .75,
  });

  return useSpring({
    from: {
      columnGap: "0",
      opacity: 0,
      marginTop: 25,
    },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      columnGap: dataRef?.isIntersecting ? "2rem" : "0",
      marginTop: dataRef?.isIntersecting ? 0 : 25,
    },
    config: {
      mass: 1,
      tension: 300,
      friction: 10
    },
  });
}

// Hero section animations
export const useHeroSpring = (ref) => {

  const dataRef = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: .75,
  });

  return useSpring({
    from: {
      marginTop: -50,
      marginBottom: 200,
      opacity: 0,
      gap: "5rem",
    },
    to: { 
      opacity: dataRef?.isIntersecting ? 1 : 0,
      marginTop: dataRef?.isIntersecting ? 0 : -50,
      marginBottom: dataRef?.isIntersecting ? 0 : 200,
      gap: dataRef?.isIntersecting ? "2rem" : "5rem",
    },
    config: {
      mass: 1,
      tension: 200,
      friction: 15,
    },
  });
}