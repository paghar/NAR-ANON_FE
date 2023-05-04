import ButtonPrimary from "../misc/ButtonPrimary";
import TextBox from "../misc/TextBox";

import Facebook from "../../../public/assets/Icon/facebook.svg";
import Twitter from "../../../public/assets/Icon/twitter.svg";
import Instagram from "../../../public/assets/Icon/instagram.svg";

import { useTranslation } from "next-i18next";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";

import api from "@/services/axios";
import { toastMessage } from "@/utils/ToastMessage";

const schema = yup
  .object({
    name: yup.string().required("errors.name-required"),
    email: yup.string().email().required("errors.email-required"),
    message: yup.string().required("errors.message-required")
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const Footer = () => {
  const { t } = useTranslation("common");

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
    resolver: yupResolver(schema)
  });

  const addMessage = useMutation({
    mutationFn: (newMessage: { data: FormData }) => {
      return api.post("/messages", newMessage);
    },
    onSuccess: () => {
      toastMessage(t("message-registered"), "#4CAF50", 2000);
      reset();
    },
    onError: () => {
      toastMessage(t("registration-failed"), "#d3010ad9", 2000);
    }
  });

  const onSubmit = (data: FormData) => {
    addMessage.mutate({ data: { name: data.name, email: data.email, message: data.message } });
  };

  return (
    <div className="bg-white-300 pt-32 pb-20" id="Contact">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 my-24  mx-auto">
        <section className="text-gray-800">
          <div className="flex flex-wrap">
            {/* Description */}
            <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
              <h2 className="text-3xl text-black-600 font-bold mb-6">{t("contactUs.contactUs")}</h2>
              <div
                className="text-black-500 mb-6"
                dangerouslySetInnerHTML={{ __html: t("contactUs.contactUs-dec") }}
              ></div>
              <div
                className="text-black-500 mb-6"
                dangerouslySetInnerHTML={{ __html: t("contactUs.contactUs-help-text") }}
              ></div>
              <div
                className="text-black-500 mb-6"
                dangerouslySetInnerHTML={{ __html: t("contactUs.contactUs-account") }}
              ></div>
              <p className="text-black-500 mb-2">{t("community.address")}</p>
              <p className="text-black-500 mb-2">{t("community.phone")}</p>
              <p className="text-black-500 mb-2">{t("community.email")}</p>

              <div className="flex w-full mt-2 mb-8 -mx-2">
                <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                  <Facebook className="h-6 w-6" />
                </div>
                <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                  <Twitter className="h-6 w-6" />
                </div>
                <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                  <Instagram className="h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Form Element */}
            <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                      maxLength: 30
                    }}
                    render={({ field: { onChange, value } }) => (
                      <TextBox
                        id="name"
                        type="input"
                        placeholder={t("contactUs.contactUs-name") ?? "contact us"}
                        value={value}
                        onChange={onChange}
                      />
                    )}
                    name="name"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-lg">{t(errors.name.message!)}</span>
                  )}
                </div>

                <div className="form-group">
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                      maxLength: 30
                    }}
                    render={({ field: { onChange, value } }) => (
                      <TextBox
                        id="firstName"
                        type="input"
                        placeholder={t("contactUs.contactUs-email") ?? "contact us"}
                        value={value}
                        onChange={onChange}
                      />
                    )}
                    name="email"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-lg">{t(errors.email.message!)}</span>
                  )}
                </div>

                <div className="form-group">
                  <Controller
                    control={control}
                    rules={{
                      required: true
                    }}
                    render={({ field: { onChange, value } }) => (
                      <TextBox
                        id="reasonText"
                        type="textarea"
                        rows={8}
                        placeholder={t("contactUs.contactUs-message")}
                        value={value}
                        onChange={onChange}
                      />
                    )}
                    name="message"
                  />
                  {errors.message && (
                    <span className="text-red-500 text-lg">{t(errors.message.message!)}</span>
                  )}
                </div>

                <div className="flex justify-end">
                  <ButtonPrimary type="submit" onClick={() => null}>
                    {t("button.send")}
                  </ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
