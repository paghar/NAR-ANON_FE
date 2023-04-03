import Planes from "@/components/Planes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getPlans } from "@/services/apis";
import { IPlan } from "@/data/interface";

const PlanesContainer = () => {
  const [events, setEvents] = useState<IPlan[]>([]);
  const [projects, setProjects] = useState<IPlan[]>([]);
  const { locale, push } = useRouter();

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
      eventTitle="Evnet List"
      eventDescription="These are the stories of our customers who have joined us with great
                        pleasure when using this crazy feature."
      eventItems={events}
      projectTitle="Project list"
      projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Totam, alias exercitationem id ut quod voluptates est.Veritatis distinctio quam cumque!"
      projectItems={projects}
      subscribeClick={subscribeClick}
    />
  );
};

export default PlanesContainer;
