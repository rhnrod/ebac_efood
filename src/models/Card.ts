class Card {
  image: string
  title: string
  note: number
  description: string
  infos: string[]
  id: number

  constructor(
    image: string,
    title: string,
    note: number,
    description: string,
    infos: string[],
    id: number
  ) {
    this.image = image
    this.title = title
    this.note = note
    this.description = description
    this.infos = infos
    this.id = id
  }
}

export default Card
