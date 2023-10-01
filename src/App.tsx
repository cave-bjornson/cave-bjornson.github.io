import { PersonalInfo, ListBox, LanguageBoxItem } from "./PersonalInfo.tsx";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  StarIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";
import cv_data from "./assets/cv_bjorn_agnemo.json";

export const App = () => {
  return (
    <>
      <div id="main-content" className="lg:flex">
        <aside>
          <PersonalInfo
            name={cv_data.name[0] + " " + cv_data.name[1]}
            occupation={cv_data.occupation}
            location={cv_data.location}
            email={cv_data.email}
            phone={cv_data.phone}
          />
          <ListBox
            heading="Färdigheter"
            skills={["C#/.NET", "ASP/NET", "Java"]}
            icon={<StarIcon className="h-6 w-6"></StarIcon>}
          />
          <ListBox
            heading="Språk"
            skills={[
              <LanguageBoxItem language="Svenska" max={4} value={4} />,
              <LanguageBoxItem language="Engelska" max={4} value={3} />,
              <LanguageBoxItem language="Tyska" max={4} value={2} />,
            ]}
            icon={<GlobeAltIcon className="h-6 w-6" />}
          />
          <ListBox
            heading="Körkort"
            skills={["Bil A", "Truck AB"]}
            icon={<TruckIcon className="h-6 w-6"></TruckIcon>}
          />
        </aside>
        <main>
          <ListBox
            heading="Arbetslivserfarenheter"
            skills={[]}
            icon={<BriefcaseIcon className="h-12 w-12" />}
          />
          <ListBox
            heading="Utbildning"
            skills={[]}
            icon={<AcademicCapIcon className="h-12 w-12" />}
          />
        </main>
      </div>
    </>
  );
};
