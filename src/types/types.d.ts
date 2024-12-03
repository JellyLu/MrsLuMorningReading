type Word = {
  id: string;
  text: string;
  pronunciations: {
    uk?: string;
    us?: string;
  }
  audios?: {
    uk?: string;
    us?: string;
  },
  imgUrl?: string;
  sentences?: string[];
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