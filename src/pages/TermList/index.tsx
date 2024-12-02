import { terms } from "@/data/terms";
import { useNavigate } from "react-router-dom";

export function Component() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen p-10">
      {
        terms.map((term) => (
          <div
            key={term.id}
            className="bg-white-1 border-2 rounded-lg flex p-6 my-10"
            onClick={() => navigate(`/term/${term.id}/lessons`)}
          >
            <img src={term.imgSrc} alt="" className="h-[160px] self-center"/>
            <div className="flex flex-col ml-6">
              <span className="text-2xl text-pri-1 font-bold">{term.name}</span>
              {term.description && <span className="text-gray-2 mt-5">{term.description}</span>}
            </div>
          </div>
        ))
      }
    </div>
  );
}