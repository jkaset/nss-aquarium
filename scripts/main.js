import { useFish } from './FishDataProvider.js'

const allTheFish = useFish()

for (cost fish of allTheFish) {
  console.log(fish)
}