const setBackground = (timeOfDay: string) => {
  const mainContainer = document.querySelector(".main-container");

  if (timeOfDay === "día") {
    mainContainer?.classList.add("day");
  } else if (timeOfDay === "atardecer") {
    mainContainer?.classList.add("sunset");
  } else {
    mainContainer?.classList.add("night");
  }
};

export default setBackground;
