
const moonPath =
  "M13.5 25C13.5 38.8071 25 47.5 25 49C11.1929 49 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C25 0 13.5 11.1929 13.5 25Z";
const sunPath =
  "M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z";
const darkMode = document.querySelector("#darkMode");
let toggle = false;

//WE NEED TO CLICK ON THE SUN

darkMode.addEventListener("click", () => {
  //WE NEED TO USE ANIME.JS HERE

  //HERE WE SETUP THE TIMELINE
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo",
  });
  //ADD DIFFERENT ANIMATION TO THE TIMELINE
  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sunPath : moonPath }],
      fill : toggle ? "rgb(255, 239, 18)" : "rgb(255,255,255)"
    })
    .add(
      {
        targets: "#darkMode",
        rotate: toggle ? 0 : 320,
      },
      "-= 350"
    )
    .add(
      {
      targets: ".main",
      backgroundColor: toggle ? 'rgb(255,255,255)' : "rgb(22,22,22)",
      color: toggle ? 'rgb(22,22,22)' : "rgb(255,255,255)"
    },
    "-=700")
  
    .add(
      {
      targets: "#coloring",
      fill: toggle ? 'rgb(22,22,22)': "rgb(255,255,255)"
    },
    "-=700")
  
    .add(
      {
      targets: "a",
      color: toggle ? 'rgb(22,22,22)' : "rgb(255,255,255)"
    },
    "-=700")
    .add(
      {
      targets: ".main-2", 
      backgroundColor: toggle ? 'rgb(255,255,255)' : "rgb(22,22,22)",
      color: toggle ? 'rgb(22,22,22)' : "rgb(255,255,255)"
    },
    "-=700")
    .add(
      {
      targets: ".main-4", 
      backgroundColor: toggle ? 'rgb(255,255,255)' : "rgb(22,22,22)",
      color: toggle ? 'rgb(22,22,22)' : "rgb(255,255,255)"
    },
    "-=700")
    .add(
      {
      targets: ".main-3", 
      width:"100%",
      margin: 0,
      backgroundColor: toggle ? 'rgb(255,255,255)' : "rgb(22,22,22)",
      color: toggle ? 'rgb(22,22,22)' : "rgb(255,255,255)"
    },
    "-=700")
    .add(
      {
      targets: ".msg",
      
      color: "rgb(22,22,22)"
    },
    "-=700");
    //EVERY TIME WE CLICK ON THE SUN  THE SWICTH NEEDS TO BE CHANGED
    if (!toggle) {
      toggle = true;
    } else{
      toggle = false;
    }
});
