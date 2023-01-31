export interface Genre {
  id: number
  name: string
}

export interface Movie {
  id: string
  rank: number
  title: string
  fullTitle: string
  year: number
  image: string
  crew: string[]
  imDbRating: number
  imDbRatingCount: number
  videoUrl:string
}

// export interface Element {
//   type:
//     | 'Bloopers'
//     | 'Featurette'
//     | 'Behind the Scenes'
//     | 'Clip'
//     | 'Trailer'
//     | 'Teaser'
// }