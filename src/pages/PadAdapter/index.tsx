import { Outlet, useMatches } from "react-router-dom";
import { NO_OP } from "@/constants/ComponentConstant";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { updateRootFontSize } from "@/utils/domHelper";

export default function PadAdapter() {
  useEffect(() => {
    updateRootFontSize();
  }, []);

  return (
    <ColorProvider>
      <Outlet />
    </ColorProvider>
  );
}

type ColorContextType = {
  setBgColor: Dispatch<SetStateAction<string | undefined>>;
  setBgImage: Dispatch<SetStateAction<string | undefined>>;
};
const ColorContext = createContext<ColorContextType>({
  setBgColor: NO_OP,
  setBgImage: NO_OP,
});

const fallbackColor = "#FFF4EA";
function ColorProvider({ children }: { children: React.ReactNode }) {
  const [colorByUrl, setColorByUrl] = useState(fallbackColor);
  const [backgroundImageByComponent, setBackgroundImageByComponent] =
    useState<string>();
  const [colorByComponent, setColorByComponent] = useState<string>();

  const matches = useMatches();
  const newColorByUrl =
    (matches[matches.length - 1].handle as { bgColor?: string })?.bgColor ??
    fallbackColor;

  useEffect(() => {
    if (colorByUrl !== newColorByUrl) {
      setColorByUrl(newColorByUrl);
    }
  }, [newColorByUrl, colorByUrl]);

  return (
    <ColorContext.Provider
      value={{
        setBgColor: setColorByComponent,
        setBgImage: setBackgroundImageByComponent,
      }}
    >
      <div
        className="w-full h-full overflow-y-auto scrollbar-hide"
        style={{
          backgroundColor: backgroundImageByComponent
            ? undefined
            : colorByComponent ?? colorByUrl,
          backgroundImage: backgroundImageByComponent
            ? `url(${backgroundImageByComponent})`
            : undefined,
        }}
      >
        {children}
      </div>
    </ColorContext.Provider>
  );
}

export const useBgColorUpdater = () => useContext(ColorContext).setBgColor;
export const useBgImageUpdater = () => useContext(ColorContext).setBgImage;
