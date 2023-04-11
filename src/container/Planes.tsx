import Planes from "@/components/Planes";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {getPlans} from "@/services/apis";
import {IPlan} from "@/data/interface";
import {useTranslation} from "next-i18next";


const PlanesContainer = () => {
  const [events, setEvents] = useState<IPlan[]>([]);
  const [projects, setProjects] = useState<IPlan[]>([]);
  const {locale, push} = useRouter();

  const {t} = useTranslation("common");

  const subscribeClick = () => {
    push("/subscribe");
  };

  useEffect(() => {
    getPlans(locale, "event").then((data) => {
      setEvents(data);
    });
    getPlans(locale, "project").then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <Planes
      eventTitle={t("plan.event-title")}
      eventDescription={t("plan.project-des")}
      eventItems={events}
      projectTitle={t("plan.event-title")}
      projectDescription={t("plan.event-des")}
      projectItems={projects}
      subscribeClick={subscribeClick}
    />
  );
};

export default PlanesContainer;
