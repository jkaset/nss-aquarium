
//FishList which renders individual fish objects as HTML

import { Fish } from "./Fish.js"
import { mostHolyFish, nonHolyFish, soldierFish } from './fish/FishDataProvider.js'
mostHolyFish()
soldierFish() 
nonHolyFish()


//NEW FUNCTION FOR INPORT
const buildFishContainerHTML = (arrayOfFish) => {
  let fishHTMLRepresentations = ""
  for (const fish of arrayOfFish) {
    fishHTMLRepresentations += Fish(fish)
  }
  return fishHTMLRepresentations
}


export const FishList = () => {
  const contentElement = document.querySelector(".fishList")

  const fishes = useFish()
  const holyFish = mostHolyFish()
  console.log(holyFish)

  const soldierFishes = soldierFish()
  const soldierFishHTML = buildFishContainerHTML(soldierFishes)

  const regularFishes = nonHolyFish()
  const regularFishHTML = buildFishContainerHTML(regularFishes)

    }

  // Add to the existing HTML in the content element
  //BUILDING STRING OF HTML
  contentElement.innerHTML += `
        <article class="fishList">
            
            ${holyFishHTML}
            ${soldierFishHTML}
            ${regularFishHTML}
            
        </article>
    `
  
