export type Challenge = {
  id: number
  word: string
  tip: string
}

export const WORDS: Challenge[] = [
  { id: 1, word: "CSS", tip: "Styles language" },
  { id: 2, word: "REACT", tip: "Library to create WEB interface" },
  { id: 3, word: "HTML", tip: "Markdown language" },
  {
    id: 4,
    word: "Javascript",
    tip: "One of the most utilized programming languages in the world",
  },
  { id: 5, word: "Typescript", tip: "To add Types to JavaScript" },
]
