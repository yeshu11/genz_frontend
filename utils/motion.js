export const textVariant = () => {
    return {
      hidden: { opacity: 0, y: -50 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 0.8,
          delay: 0.2,
        },
      },
    };
  };
  
  export const fadeIn = (direction = "", type = "spring", delay = 0, duration = 0.8) => {
    return {
      hidden: {
        x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type,
          duration,
          delay,
        },
      },
    };
  };
  