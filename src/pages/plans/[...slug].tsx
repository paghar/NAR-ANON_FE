import Card from "@/components/Card";
import {usePlans} from "@/hooks/usePlans";
import {GetServerSidePropsContext} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {useState} from "react";
import Pagination from "@/components/Pagination";

export default function Plans() {
  const [page, setPage] = useState(1);
  const {locale, query, push, isReady} = useRouter();
  const slug = !!query?.slug?.length ? query.slug[0] : "";

  const {t} = useTranslation("common");

  const {data: plansData} = usePlans({
    locale,
    filters: `filters[type][$eq]=${slug}`,
    pagination: `pagination[page]=${page}&pagination[pageSize]=12`,
    enabled: isReady
  });

  const plans = plansData?.data ?? [];
  const total = plansData?.meta.pagination.total ?? 0;

  return (
    <div className="py-32">
      <div className="flex justify-center gap-8">
        <button onClick={() => push("/plans/event")}>events</button>
        <button onClick={() => push("/plans/project")}>projects</button>
      </div>
      <div className="flex flex-wrap mt-4 justify-center" aria-label="schedule events">
        {plans.map(({id, attributes}) => (
          <div className="w-2/5 m-2 border-2 border-gray-100" key={id}>
            <Card
              date="2023"
              thumbnail={attributes.thumbnail}
              title={attributes.title}
              description={attributes.description}
              btnText={t("button.read-info")}
              readMore={() => push(`/plan/${attributes.slug}`)}
            />
          </div>
        ))}
      </div>
      {/* pagination */}
      <div className="mt-8">
        <Pagination
          currentPage={page}
          perPage={12}
          totalCount={total}
          onClick={(currentPage) => setPage(currentPage)}
        />
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
