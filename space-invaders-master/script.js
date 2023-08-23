let hero = {
  left: 575,
  top: 700,
};

document.onkeydown = function moveHero(event) {
  console.log(event.key);
};

//console.log(document.querySelector("#hero").style.position);

document.querySelector("#hero").style.left = hero.left + 10;
hero.left = hero.left + 10;
