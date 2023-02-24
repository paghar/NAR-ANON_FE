import SeoHead from "../components/SeoHead";
import Layout from "../components/Layout/Layout";
import Gallary from "../components/Gallary";
import Planes from "../components/Planes";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>   
      <SeoHead title="Iranian commuity" />
        <Layout>
          <Hero/>
          <Gallary/>
          <Planes/>
      </Layout>
    </>
  );
}
