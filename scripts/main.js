// FISH
import { FishList } from './fish/FishList.js'

FishList()

// TIPS
import { useTips } from './tips/TipDataProvider.js'
const allTheTips = useTips()
for (const tip of allTheTips) {
  console.log(tip)
}

