import { useSpring } from "@react-spring/web";

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