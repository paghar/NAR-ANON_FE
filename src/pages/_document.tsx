import { Html, Head, Main, NextScript, DocumentProps } from "next/document";

export default function Document(props: DocumentProps) {
  const locale = props.__NEXT_DATA__.locale;
  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    <Html lang={locale} dir={dir}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
