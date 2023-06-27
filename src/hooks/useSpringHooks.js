import { useSpring } from "@react-spring/web";
import useIntersectionObserver from "./useIntersectionObserver";



// For subtitle below each section heading
export const useSubtitleSpring = (ref) => {

  const dataRef = useIntersectionObserver(ref, {
    freezeOnceVisible: true
  });

  return useSpring({
    from: {
      opacity: 0,
      letterSpacing: "5px",
    },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      letterSpacing: dataRef?.isIntersecting ? "2px" : "5px",
    },
    delay: 200,
    config: {
      mass: 1,
      tension: 120,
      friction: 12,
    }
  });
}

// h2 headings i.e. About / Projects / Skills / etc.
export const useHeadingSpring = (ref) => {
  
  const dataRef = useIntersectionObserver(ref, {
    freezeOnceVisible: true
  });

  return useSpring({
    from: {
      opacity: 0,
      fontSize: "1rem",
    },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      fontSize: dataRef?.isIntersecting ? "2rem" : "1rem",
    },
    delay: 50,
    config: {
      mass: 1,
      tension: 300,
      friction: 12,
    }
  });
}
  
// For sections i.e. about / projects / skills / etc.
export const useSectionSpring = (ref) => {

  const dataRef = useIntersectionObserver(ref, {
    freezeOnceVisible: true
  });

  return useSpring({
    from: {
      opacity: 0,
    },
    to: { 
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
    config: {
      duration: 500, 
      mass: 1, 
      tension: 300, 
      friction: 1000
    },
  });
}

// For about article
export const useArticleSpring = (ref) => {

  const dataRef = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: .25,
  });

  return useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
    delay: 100,
    config: {
      mass: 1,
      tension: 50,
      friction: 10,
    }
  });
}

// For sections i.e. about / projects / skills / etc.
export const useProjectSpring = (ref) => {

  const dataRef = useIntersectionObserver(ref, {
    freezeOnceVisible: true
  });

  return useSpring({
    from: {
      opacity: 0,
    },
    to: { 
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
    config: {
      duration: 500, 
      mass: 1, 
      tension: 300, 
      friction: 1000
    },
  });
}

// Nav bar list
export const useNavSpring = () => {
  return useSpring({
    from: {
      columnGap: "0",
      opacity: 0
    },
    to: { 
      opacity: 1,
      columnGap: "3rem",
    },
    delay: 1000,
    config: {
      mass: 0.25,
      tension: 200,
      friction: 30
    },
  });
}