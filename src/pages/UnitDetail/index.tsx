import { useEffect, useRef, useState } from "react";
import useTerms from "@/hooks/useTerms";
import Speaker from "@/components/Speaker";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

interface WordCardProps {
  word: Word;
  size?: "small" | "large";
  className?: string;
  onClick?: () => void;
  onClickAudio?: (type: "uk" | "us") => void;
  isActive?: boolean;
  playingType?: "uk" | "us";
}
const WordCard = ({ className, word, onClick, onClickAudio, isActive = false, playingType = "uk", size = "small" }: WordCardProps) => {
  const { id, imgUrl, text } = word;
  const ukAudioRef = useRef<HTMLAudioElement>(null);
  const usAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isActive && ukAudioRef.current && playingType === "uk") {
      ukAudioRef.current.play();
    } else if (isActive && usAudioRef.current && playingType === "us") {
      usAudioRef.current.play();
    }
  }, [isActive, playingType]);

  const renderDetails = () => {
    if (size !== "large") {
      return null;
    }
    return (
      <div className={classNames("flex items-center gap-2")}>
        <div className="flex items-center">
          <span className="text-sm text-purple-1">
          uk /{word.pronunciations.uk}/
          </span>
          {word.audios?.uk &&
            <>
              <audio src={word.audios.uk} ref={ukAudioRef}/>
              <Speaker
                isPlaying={playingType === "uk" && !ukAudioRef.current?.paused}
                className="w-8 h-8 text-pri-2 ml-1"
                onClick={() => onClickAudio?.("uk")}
              />
            </>
          }
        </div>
        <div className="flex items-center">
          <span className="text-sm text-blue-1">
            us /{word.pronunciations.us}/
          </span>
          {word.audios?.uk &&
            <>
              <audio src={word.audios.us} ref={usAudioRef}/>
              <Speaker
                isPlaying={playingType === "us" &&!usAudioRef.current?.paused}
                className="w-8 h-8 text-pri-2 ml-1"
                onClick={() => onClickAudio?.("us")}
              />
            </>
          }
        </div>
      </div>
    );
  };

  return (
    <div
      key={id}
      className={twMerge(classNames(
        "bg-white-1 border-2 rounded-lg flex flex-col p-6 shrink-0",
        className,
      ))}
      onClick={onClick}
    >
      <img
        src={imgUrl}
        alt=""
        className={classNames(
          "self-center shrink-0",
          {
            "w-[160px] h-[160px]": size === "small",
            "w-[260px] h-[260px]": size === "large",
          })}
      />
      <div className="flex items-center justify-center mt-6">
        <span className="text-3xl text-aux-1 font-bold">{text}</span>
      </div>
      {renderDetails()}
    </div>
  )
}

export function Component() {
  const { unit } = useTerms();
  const [current, setCurrent] = useState(0);
  const [type, setType] = useState<"uk" | "us">("uk");

  if (!unit) {
    return null;
  }

  return (
    <div className="w-screen h-screen p-10 flex flex-col">
      <div className="text-pri-1 text-2xl font-bold">{unit.name}</div>
      <div className="mt-6 h-full flex">
        <WordCard
          key={`word-${unit.words[current].id}-${current}`}
          word={unit.words[current]}
          isActive
          playingType={type}
          size="large"
          onClickAudio={(type) => setType(type)}
          className="grow-0 mb-10 flex-1 flex items-center justify-center"
        />
        <div className="h-full overflow-y-auto flex flex-col gap-6 ml-6 w-[240px] shrink-0">
          {
            unit.words.map((word, index) => (
              <WordCard
                key={word.id}
                word={word}
                onClick={() => setCurrent(index)}
                isActive={current === index}
                playingType={type}
                onClickAudio={(type) => setType(type)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}