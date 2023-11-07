import {useState} from "react";

import {GetStaticPropsContext} from "next";
import {useRouter} from "next/router";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import ButtonUnderline from "@/components/misc/ButtonUnderline";
import ButtonOutline from "@/components/misc/ButtonOutline";
import {usePlans} from "@/hooks/usePlans";
import {useGalleries} from "@/hooks/useGalleries";

import GalleryAlbum from "@/components/GalleryAlbum";

const gallary = () => {
  const [planSlug, setPlanSlug] = useState("");
  const [pageLimit, setPageLimit] = useState(10);

  const {locale} = useRouter();

  const {data: plansData} = usePlans({
    locale,
    pagination: `pagination[start]=0&pagination[limit]=${pageLimit}`
  });

  const plans = plansData?.data ?? [];
  const total = plansData?.meta.pagination.total ?? 0;

  const {data: galleries} = useGalleries({
    locale,
    filters: `filters\[plan\][slug][$contains]=${planSlug}`
  });

  return (
    <div className="flex  mt-36 mb-4 px-8 xl:px-16 mx-auto">
      <div className="flex flex-col w-1/5  mx-4">
        {plans?.map(({id, attributes}) => (
          <ButtonUnderline
            key={id}
            id={String(id)}
            type="button"
            addClass={`mb-8`}
            onClick={() => setPlanSlug(attributes.slug)}
          >
            {attributes.title}
          </ButtonUnderline>
        ))}
        {total > pageLimit && (
          <ButtonOutline type="button" onClick={() => setPageLimit((prev) => prev + 10)}>
            load more
          </ButtonOutline>
        )}
        {total <= pageLimit && pageLimit > 10 && (
          <ButtonOutline type="button" onClick={() => setPageLimit(10)}>
            close
          </ButtonOutline>
        )}
      </div>

      <div className="w-10/12">
        <GalleryAlbum galleries={galleries ?? []} />
      </div>
    </div>
  );
};

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "fa", ["common"]))
    }
  };
}

export default gallary;
