const input = document.querySelector(".input");
input.focus();
const gallery = document.querySelector(".gallery");
const errorText = document.querySelector(".errorText");
input.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.code !== "Enter") return;
  const value = e.target.value;
  getImg(value);
});
function getImg(params) {
  fetch(
    `https://api.unsplash.com/search/photos?query=${params}&per_page=15&client_id=MJY-EksM8K3YCYoTu6hc_a8tAKIk4wGki2mPcFBedYw`
  )
    .then((res) => res.json())
    .then((data) => createImg(data));
}

function createImg(data) {
  if (data.results.length === 0) {
    errorText.innerHTML = `Image not found`;
    return;
  }
  errorText.innerHTML = "";
  gallery.innerHTML = "";

  data.results.forEach((el) => {
    const img = document.createElement("img");
    img.src = el.urls.small;
    img.classList.add("image");
    gallery.appendChild(img);
  });
}
const search = [
  "dog",
  "cat",
  "bird",
  "water",
  "mountain",
  "snow",
  "sea",
  "sky",
  "building",
  "landscape",
  "beach",
  "sea",
  "forest",
  "river",
  "sea",
  "flower",
  "animal",
  "nature",
];

getImg(search[Math.floor(Math.random() * search.length)]);

const modal = document.querySelector(".modal");

gallery.addEventListener("click", (e) => {
  if (e.target.classList.contains("image")) {
    modal.classList.add("_active");
    modal.innerHTML = `
    <div class="modal__content">
    <img class="modal__img" src="${e.target.src}" alt="">
    </div>
    `;
  }
});
modal.addEventListener("click", () => {
  modal.classList.remove("_active");
});
