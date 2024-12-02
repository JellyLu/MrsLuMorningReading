import { useParams } from "react-router-dom";
import { terms } from "@/data/terms";
import { safeParseInt } from "@/utils/common";
import { useMemo } from "react";

const useTerms = () => {
  const {
    termId: termIdStr,
    sectionId: sectionIdStr,
    unitId: unitIdStr,
  } = useParams();
  const [termId, sectionId, unitId] = [termIdStr, sectionIdStr, unitIdStr].map(safeParseInt);
  const term: Term | undefined = useMemo(() => {
    return terms.find(term => term.id === termId);
  }, [termId])
  const sections: Section[] = useMemo(() => {
    if (!term || !term.sections) {
      return [];
    }
    return term.sections;
  }, [term]);

  const section: Section | undefined = sections.find((s) => s.id === sectionId);
  const units: Unit[] = useMemo(() => {
    if (!section || !section.units) {
      return [];
    }
    return section.units;
  }, [section]);
  const unit = units.find((unit) => unit.id === unitId);

  console.log("======terms", terms,
    "term", term,
    "sections", sections,
    "section", section,
    "units", units,
    "unit", unit)

  return {
    terms,
    term,
    sections,
    section,
    units,
    unit
  }
};

export default useTerms;