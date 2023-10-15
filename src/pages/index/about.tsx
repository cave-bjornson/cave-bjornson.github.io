import { PersonalInfo } from "../../components/PersonalInfo.tsx";
import { FaceSmileIcon } from "@heroicons/react/24/solid";
import { useCvData } from "../../components/hooks.tsx";
import { ListBox } from "../../components/ListBox.tsx";

const About = () => {
  const { person } = useCvData();

  return (
    <>
      <aside className="md:basis-1/3 bg-white h-fit mb-4 lg:mb-0">
        <PersonalInfo person={person} />
        <ListBox
          id="interests"
          heading="Intressen"
          className="font-bold"
          skills={[
            "Film",
            "TV-Spel",
            "Brädspel",
            "Piano",
            "Orientering",
            "Baka",
            "Laga mat",
          ]}
          icon={<FaceSmileIcon className="h-6 w-6"></FaceSmileIcon>}
        />
      </aside>
      <main className="md:basis-2/3 flex flex-col md:ml-4">
        <article className="bg-white px-4 py-4 border-b border-black last:border-0 h-full space-y-4">
          <p>
            Jag är en individ med en bred och varierad bakgrund som har omfattat
            olika områden av arbetslivet. Jag har haft möjligheten att utforska
            och bidra till både den digitala världen och arbetsvärlden som
            laborant, med en specifik inriktning mot miljöanalyser och
            kvalitetskontroll.
          </p>
          <p>
            Med många års erfarenhet av programmering som hobby har Björn haft
            möjlighet att utforska olika programmeringsspråk och tekniker. Mitt
            tekniska intresse har lett till möjligheten att bidra till projekt
            inom open-source projekt.
          </p>
          <p>
            Mitt arbete som laborant hos Domsjö fabriker har fokuserat på
            kvalitetskontroll och miljöanalyser. Jag har arbetat med engagemang
            för att säkerställa kvaliteten på produkterna och bidra till
            företagets strävan att följa miljöstandarder.
          </p>
          <p>
            På fritiden sysslar jag förutom programmering med att vandra, spela
            tv-spel och lära mig spela Piano.
          </p>
        </article>
      </main>
    </>
  );
};

export default About;
