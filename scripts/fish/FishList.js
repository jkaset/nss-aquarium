
//FishList which renders individual fish objects as HTML

import { Fish } from "./Fish.js"
import { mostHolyFish, nonHolyFish, soldierFish } from './FishDataProvider.js'
// mostHolyFish()
// soldierFish() 
// nonHolyFish()


//NEW FUNCTION FOR INPORT

const buildFishContainerHTML = (array) => {
  let fishHTMLRepresentations = ""
  
  for (const fish of array) {
    fishHTMLRepresentations += Fish(fish)
  }
  return fishHTMLRepresentations
}


export const FishList = () => {
  const contentElement = document.querySelector(".fishList")
  
  const holyFishes = mostHolyFish()
  //const holyFishHTML = buildFishContainerHTML(holyFishes)

  const soldierFishes = soldierFish()
  //const soldierFishHTML = buildFishContainerHTML(soldierFishes)

  const regularFishes = nonHolyFish()
  //const regularFishHTML = buildFishContainerHTML(regularFishes)

  contentElement.innerHTML += `
    <article class="fishList">
      ${holyFishes.map(holyFish => Fish(holyFish)).join("")}
      ${soldierFishes.map(soldierFish => Fish(soldierFish)).join("")}
      ${regularFishes.map(regFish => Fish(regFish)).join("")}

      
    </article>`
  }

  // Add to the existing HTML in the content element
  //BUILDING STRING OF HTML
  
  // contentElement.innerHTML += `
  //       <article class="fishList">
  //           ${holyFishHTML}
  //           ${soldierFishHTML}
  //           ${regularFishHTML}
  //       </article>
  //   `
  // }
