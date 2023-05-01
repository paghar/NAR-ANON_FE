import GalleryAlbum from "@/components/GalleryAlbum";
import { useGalleries } from "@/hooks/useGalleries";
import { usePlans } from "@/hooks/usePlans";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

export default function Plan() {
  const { locale, query } = useRouter();
  const slug = !!query?.slug?.length ? query.slug[0] : "";

  const { data: planData } = usePlans({
    locale,
    pagination: `pagination[start]=0&pagination[limit]=0`,
    slug
  });
  const plan: any = planData?.data ?? {};
  const { attributes } = plan;

  const { data: galleries } = useGalleries({
    locale,
    filters: `filters\[plan\][slug][$contains]=${slug}`
  });

  return (
    <div className="flex flex-col max-w-screen-xl mt-36 mb-4 px-8 xl:px-16 mx-auto">
      <h2 className="text-5xl font-normal leading-normal mt-0 mb-2">{attributes?.title}</h2>

      <small className="font-normal leading-normal mt-0 mb-4">{attributes?.description}</small>
      <div>
        <ReactMarkdown>{attributes?.content}</ReactMarkdown>
      </div>

      <div>
        <GalleryAlbum galleries={galleries ?? []} />
      </div>
    </div>
  );
}

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "de", ["common"]))
    }
  };
}
