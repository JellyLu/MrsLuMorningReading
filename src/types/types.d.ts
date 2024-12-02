type Word = {
  id: number;
  text: string;
  audio: string;
  imgUrl?: string;
  sentence?: string;
}

type Unit = {
  id: number;
  name: string;
  description?: string;
  imgUrl?: string;
  words: Word[];
}

type Section = {
  id: number;
  name: string;
  description?: string;
  imgUrl?: string;
  units: Unit[];
}

type Term = {
  id: number;
  name: string;
  description?: string;
  imgUrl?: string;
  sections: Section[];
}