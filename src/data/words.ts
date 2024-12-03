import groundSrc from "@/assets/words/ground.png";
import iceCreamSrc from "@/assets/words/ice-cream.png";
import agoSrc from "@/assets/words/ice-cream.png";

export const words: Word[] = [
  {
    "id": "ground",
    "text": "ground",
    "pronunciations": {
      "uk": "\u0261ra\u028and",
      "us": "\u0261ra\u028and"
    },
    "audios": {
      "uk": "https://dictionary.cambridge.org/media/english/uk_pron/u/ukg/ukgro/ukgroov019.mp3",
      "us": "https://dictionary.cambridge.org/media/english/us_pron/g/gro/groun/ground.mp3"
    },
    "imgUrl": groundSrc
  },
  {
    "id": "ice cream",
    "text": "ice cream",
    "pronunciations": {
      "uk": "\u02cca\u026as \u02c8kri\u02d0m \u02cck\u0259\u028an",
      "us": "\u02c8a\u026as \u02cckri\u02d0m \u02ccko\u028an"
    },
    "audios": {
      "uk": "https://dictionary.cambridge.org/media/english/uk_pron/c/cdo/cdo02/cdo0216icecuk0976.mp3",
      "us": "https://dictionary.cambridge.org/media/english/us_pron/c/cdo/cdo03/cdo0318usicec2403.mp3"
    },
    "imgUrl": iceCreamSrc
  },
  {
    "id": "ago",
    "text": "ago",
    "pronunciations": {
      "uk": "\u0259\u02c8\u0261\u0259\u028a",
      "us": "\u0259\u02c8\u0261o\u028a"
    },
    "audios": {
      "uk": "https://dictionary.cambridge.org/media/english/uk_pron/u/uka/ukagi/ukagita012.mp3",
      "us": "https://dictionary.cambridge.org/media/english/us_pron/a/ago/ago__/ago.mp3"
    },
    "imgUrl": agoSrc
  }
];