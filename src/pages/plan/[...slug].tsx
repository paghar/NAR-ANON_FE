import Accordion from "@/components/Accordion";
import Pagination from "@/components/Pagination";
import {usePlans, useNestedPlans} from "@/hooks/usePlans";
import {GetServerSidePropsContext} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useRouter} from "next/router";
import {useState} from "react";

export function NestedPlans({type}: {type: "event" | "project"}) {
  const perPage = 5;
  const [page, setPage] = useState(1);
  const {locale, query} = useRouter();
  const slug = !!query?.slug?.length ? query.slug[0] : "";
  const {data: plansData} = useNestedPlans({
    locale,
    filters: `filters[plan][slug][$eq]=${slug}`,
    pagination: `pagination[page]=${page}&pagination[pageSize]=${perPage}`
  });
  const plans = plansData?.data ?? [];
  const total = plansData?.meta.pagination.total ?? 0;

  return plans.length > 0 ? (
    type === "event" ? (
      <Accordion
        items={plans.map((plan: any) =>
          Object({
            title: plan.attributes.title,
            description: plan.attributes.description,
            image: process.env.PUBLIC_API_URL + plan.attributes.audio.data[0].attributes.url
          })
        )}
      />
    ) : (
      <>
        {plans?.map((nested: any) => {
          return (
            <div key={nested?.id} className="mt-4 mb-4 p-4 rounded-lg border-2 border-gray-100">
              <h3 className="text-2xl mb-2">{nested.attributes.title}</h3>
              <audio
                controls
                className="w-full mb-4"
                src={process.env.PUBLIC_API_URL + nested.attributes.audio.data[0].attributes.url}
              />
              <h5 className="font-bold">{nested.attributes.subTitle}</h5>
              <p>{nested.attributes.description}</p>
            </div>
          );
        })}
        <Pagination
          currentPage={page}
          totalCount={total}
          perPage={perPage}
          onClick={(currentPage) => setPage(currentPage)}
        />
      </>
    )
  ) : (
    <>There is no nested plan!</>
  );
}

export default function Plan() {
  const {locale, query} = useRouter();
  const slug = !!query?.slug?.length ? query.slug[0] : "";

  const {data: planData} = usePlans({
    locale,
    pagination: `pagination[start]=0&pagination[limit]=0`,
    slug
  });
  const plan: any = planData?.data ?? {};
  const {attributes} = plan;

  return (
    <div className="flex flex-col max-w-screen-xl mt-36 mb-4 px-8 xl:px-16 mx-auto">
      <h2 className="text-5xl font-normal leading-normal mt-0 mb-2">{attributes?.title}</h2>

      <div>
        <NestedPlans type={attributes?.type} />
      </div>
    </div>
  );
}

export async function getServerSideProps({locale}: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "fa", ["common"]))
    }
  };
}
