import { useNavigate } from "react-router-dom";
import useTerms from "@/hooks/useTerms";

export function Component() {
  const navigate = useNavigate();
  const { term, sections } = useTerms();

  return (
    <div className="w-screen h-screen p-10">
      {
        sections.map(({ id, imgUrl, name, description, units }) => (
          <div
            key={id}
            className="bg-white-1 border-2 rounded-lg flex p-6 my-10"
          >
            <img src={imgUrl} alt="" className="h-[160px] self-center"/>
            <div className="flex flex-col ml-6">
              <span className="text-2xl text-pri-1 font-bold">{name}</span>
              {description &&
                <span className="text-gray-2 mt-5">{description}</span>}
              <div className="mt-2">
                {
                  units.map((unit) => (
                    <div
                      className="my-1"
                      key={unit.id}
                      onClick={() => navigate(`/term/${term?.id}/section/${id}/unit/${unit?.id}`)}
                    >
                      <span className="text-xl text-aux-2 font-bold">{unit?.name}{" >"}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}