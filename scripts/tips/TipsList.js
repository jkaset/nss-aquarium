//import { Tips } from "./Tips.js"
import { useTips } from "./TipDataProvider.js"
import { Tips } from "./Tips.js"


export const TipsList = () => {

  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".tips__list")
  const tipses = useTips()

  contentElement.innerHTML += `
    <ul class="tips__list">
      <li>${tipses.map(tips => Tips(tips)).join("")}</li>
    </ul>
  `
} 

  // Add to the existing HTML in the content element
//   let tipsHTMLRepresentations = ""
//   for (const tips of tipses) {
//     tipsHTMLRepresentations += Tips(tips)
//   }
//   contentElement.innerHTML += `
//   <ul class="tips__list">
    
//     <li>${tipsHTMLRepresentations}<li>
//   </ul>

//   `
// }
/*<ul class="tips__list">
        <li>
          <h5>${tips.title}</h5>
          <p>${tips.tip}</p>
        </li>
        <li>
          <h5>Water-selenity:</h5>
          <p>All the prettiest fish like salt water. Make sure and give them salty water. Put salt in it. For basic fish, filtered tap water is best.</p></li>
        <li><h5>Temperature:</h5>
          <p>Match the temperature to the temperature the fish likes. Don't put 2 fish who like different temperatures in the same tank, or at least one of them will float to the top.</p></li>
      </ul>
      */