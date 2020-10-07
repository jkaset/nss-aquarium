const locationCollection = [
  {
    place: "Tokyo, Japan"
  },
  {
    place: "San Francisco, CA USA"
  },
  {
    place: "Jimbaran, Bali"
  },
  {
    place: "Valparaiso, Chile"
  },
  {
    place: "Palermo, Italy"
  },
  {
    place: "New Orleans, LA USA"
  }
]

export const useLocation = () => {
  return locationCollection.slice()
}