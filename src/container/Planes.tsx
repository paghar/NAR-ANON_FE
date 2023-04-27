import { useRouter } from "next/router"
import { useTranslation } from "next-i18next";
import Planes from "@/components/Planes";
import { usePlans } from "@/hooks/usePlans";

const PlanesContainer = () => {
  const { locale, push } = useRouter();

  const { t } = useTranslation("common");

  const { data: eventsData } = usePlans({
    locale,
    filters: "filters[type][$eq]=event",
    pagination: "pagination[start]=0&pagination[limit]=6"
  });
  const events = eventsData?.data ?? [];

  const { data: projectsData } = usePlans({
    locale,
    filters: "filters[type][$eq]=project",
    pagination: "pagination[start]=0&pagination[limit]=6"
  });
  const projects = projectsData?.data ?? [];
  

  const subscribeClick = () => {
    push("/subscribe");
  };

  return (
    <Planes
      eventTitle={t("plan.event-title")}
      eventDescription={t("plan.event-des")}
      eventItems={events}
      projectTitle={t("plan.project-title")}
      projectDescription={t("plan.project-des")}
      projectItems={projects}
      subscribeClick={subscribeClick}
    />
  );
};

export default PlanesContainer;
