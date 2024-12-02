import { useState } from "react";
import useTerms from "@/hooks/useTerms";
import Speaker from "@/components/Speaker";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

interface WordCardProps {
  word: Word;
  size?: "small" | "large";
  className?: string;
  onClick?: () => void;
  isPlaying?: boolean;
}
const WordCard = ({ className, word, onClick, isPlaying = false, size = "small" }: WordCardProps) => {
  const { id, imgUrl, text } = word;
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
        <span className="text-2xl text-aux-1 font-bold">{text}</span>
        <Speaker
          isPlaying={isPlaying}
          className="w-8 h-8 text-pri-2 ml-1"
        />
      </div>
    </div>
  )
}

export function Component() {
  const { unit } = useTerms();
  const [current, setCurrent] = useState(0);

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
          isPlaying
          size="large"
          className="grow-0 mb-10 flex-1 flex items-center justify-center"
        />
        <div className="h-full overflow-y-auto flex flex-col gap-6 ml-6 w-[240px] shrink-0">
          {
            unit.words.map((word, index) => (
              <WordCard
                key={word.id}
                word={word}
                onClick={() => setCurrent(index)}
                isPlaying={current === index}
              />
            ))
          }
        </div>
      </div>

    </div>
  );
}