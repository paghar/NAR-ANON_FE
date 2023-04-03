import Planes from "@/components/Planes";
import { projectItems } from "../data/constants/projectItems";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getEvents } from "@/services/apis";
import { IEventItem } from "@/data/interface";

const PlanesContainer = () => {
  const [events, setEvents] = useState<IEventItem[]>([]);
  const router = useRouter();

  const subscribeClick = () => {
    router.push("/subscribe");
  };

  useEffect(() => {
    getEvents().then((data) => {
      setEvents(data);
    });
  }, []);
  console.log(events);

  return (
    <Planes
      eventTitle="Evnet List"
      eventDescription="These are the stories of our customers who have joined us with great
                        pleasure when using this crazy feature."
      eventItems={events}
      projectTitle="Project list"
      projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Totam, alias exercitationem id ut quod voluptates est.Veritatis distinctio quam cumque!"
      projectItems={projectItems}
      subscribeClick={subscribeClick}
    />
  );
};

export default PlanesContainer;
