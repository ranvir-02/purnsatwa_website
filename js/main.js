// Recipe data — matches the categories/difficulty shown in the demo
const recipes = [
  {
    title: "Paneer Butter Masala",
    category: "Main Course",
    difficulty: "Medium",
    time: "40 min",
    servings: "4 servings",
    img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=700&q=80"
  },

  {
    title: "Buttermilk",
    category: "Beverag",
    difficulty: "Easy",
    time: "10 min",
    servings: "4  servings",
    img: "https://img.magnific.com/premium-photo/fresh-summer-buttermilk-drink-made-yogurt-chaas-wooden-table_926199-2888063.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    title: "Mango Lassi",
    category: "Beverage",
    difficulty: "Easy",
    time: "10 min",
    servings: "2 servings",
    img: "https://static.vecteezy.com/system/resources/thumbnails/041/899/954/small/ai-generated-ayran-refreshment-drink-generate-ai-photo.jpg"
  },
  {
    title: "shrikand",
    category: "Dessert ",
    difficulty: "Easy",
    time: "20 min",
    servings: "6 servings",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0iguxt12Wb3X1APnMbQL-GYP1Dvy3uyLiIEPl21GQpQ&s"
  },
 
];

function renderRecipes() {
  const grid = document.getElementById("recipeGrid");
  grid.innerHTML = recipes.map(r => `
    <article class="recipe-card">
      <div class="recipe-img">
        <span class="badge category">${r.category}</span>
        <span class="badge difficulty">${r.difficulty}</span>
        <img src="${r.img}" alt="${r.title}" loading="lazy">
      </div>
      <div class="recipe-body">
        <h3>${r.title}</h3>
        <div class="recipe-meta">
          <span>⏱ ${r.time}</span>
          <span>👥 ${r.servings}</span>
        </div>
      </div>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderRecipes);

// Simple newsletter form feedback
document.addEventListener("submit", (e) => {
  if (e.target.classList.contains("newsletter-form")) {
    e.preventDefault();
    const btn = e.target.querySelector("button");
    const original = btn.textContent;
    btn.textContent = "Subscribed!";
    setTimeout(() => (btn.textContent = original), 2000);
    e.target.reset();
  }
});
