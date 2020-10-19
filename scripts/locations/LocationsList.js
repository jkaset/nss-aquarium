import { Location } from './Locations.js'
import { useLocation } from './LocationsDataProvider.js'


export const LocationsList = () => {
  const contentElement = document.querySelector(".places")
  const locations = useLocation()

  // let locationHTMLRepresentations = ""
  // for (const place of locations) {
  //   locationHTMLRepresentations += Location(place)
  //  }

  contentElement.innerHTML += `
  <article class="places">
    ${locations.map(place => Location(place)).join("")}
  <article>
  `
}
  

//   contentElement.innerHTML += `
//         <article class="places">
//         <ul>    
//         <li>${locationHTMLRepresentations}</li>
//         </ul>
//         </article>
//     `
// }