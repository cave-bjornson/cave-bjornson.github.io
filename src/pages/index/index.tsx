import { CVBoxContent, PersonalInfo } from "../../components/PersonalInfo.tsx";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  StarIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";
import { CVData, LanguageItem, useCvData } from "../../components/hooks.tsx";
import { ListBox } from "../../components/ListBox.tsx";
import { LanguageBoxItem } from "../../components/LanguageBoxItem.tsx";
import { CVBoxItem } from "../../components/CVBoxItem.tsx";

const CurryV = () => {
  const cv: CVData = useCvData();

  return (
    <>
      <aside className="md:basis-1/3 bg-white mb-4 md:mb-0">
        <PersonalInfo person={cv.person} />
        <ListBox
          id="skills"
          heading="Färdigheter"
          className="font-bold text-lg"
          skills={[cv.techSkills?.join(", ")]}
          icon={<StarIcon className="h-6 w-6"></StarIcon>}
        />
        <ListBox
          id="language"
          heading="Språk"
          className="font-bold text-lg"
          skills={cv.languageSkills?.map((langItem: LanguageItem) => (
            <>
              <LanguageBoxItem language={langItem} />
            </>
          ))}
          icon={<GlobeAltIcon className="h-6 w-6" />}
        />
        <ListBox
          id="driving-license"
          heading="Körkort"
          className="font-bold text-lg"
          skills={cv.drivingLicenses}
          icon={<TruckIcon className="h-6 w-6"></TruckIcon>}
        />
        <br />
      </aside>
      <main className="md:basis-2/3 flex flex-col md:ml-4">
        <article className="bg-white mb-4">
          <ListBox
            id="work-experience"
            heading="Arbetslivserfarenheter"
            className="font-bold text-2xl"
            skills={cv.workEntries?.map((work) => (
              <CVBoxItem
                heading={work.title}
                content={<CVBoxContent content={work} />}
              />
            ))}
            icon={<BriefcaseIcon className="h-12 w-12" />}
          />
        </article>
        <article className="bg-white">
          <ListBox
            id="education"
            heading="Utbildning"
            className="font-bold text-2xl"
            skills={cv.educations?.map((education) => (
              <CVBoxItem
                heading={education.school}
                content={education.course}
              />
            ))}
            icon={<AcademicCapIcon className="h-12 w-12" />}
          />
        </article>
      </main>
    </>
  );
};

export default CurryV;
