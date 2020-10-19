//STEP 3 CREATE FILE FOR INDIVIDUAL AND RENDER EACH OBJECT AS HTML
export const Fish = (fish) => {
  return `
      <section class="fish card">
          <div><img  class="fish__image image--card" src="${fish.img}"></div>
          <div class="fish__name">${fish.name}</div>
          <div class="fish__species">${fish.species}</div>
          <div class="fish__length">${fish.length} inches</div>
          <div class="fish__location">${fish.location}</div>
          <div class="fish__diet">${fish.diet}</div>
      </section>
      `
}