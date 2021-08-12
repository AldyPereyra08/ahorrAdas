type Category = {
  id: number;
  title: string;
  slug: string;
};

const formAddCategory = document.getElementById("form-add-category");

formAddCategory.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("funciona");
});
