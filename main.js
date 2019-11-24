// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

// 1st way
/* 
document.body.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  console.log(x, y);
  if (x % 2 === 0) {
    if (y % 2 === 0) {
      document.body.style.backgroundColor = "red";
    } else {
      document.body.style.backgroundColor = "green";
    }
  } else {
    if (y % 2 === 0) {
      document.body.style.backgroundColor = "green";
    } else {
      document.body.style.backgroundColor = "blue";
    }
  }
});
*/

// 2nd way better
document.body.addEventListener("click", (e) => {
  console.log(e.clientX, e.clientY);
  const color = getColor(e);
  document.body.style.backgroundColor = color;
});

const getColor = (event) => {
  if(event.clientX % 2 === 0) {
    if (event.clientY % 2 === 0) {
      return "red";
    } else {
      return "green";
    }
  } else {
    if (event.clientY % 2 === 0) {
      return "green";
    } else {
      return "blue";
    }
  }
}