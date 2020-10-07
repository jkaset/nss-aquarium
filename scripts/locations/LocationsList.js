import { useLocation } from './LocationsDataProvider'

export const LocationsList = () => {
  const contentElement = document.querySelector(".places__hotspots")
  const locations = useLocation()

  contentElement.innerHTML += `
  <ul class="places__hotspots">
  All the places go here!
</ul>
  `
}