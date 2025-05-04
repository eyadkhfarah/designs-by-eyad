"use client";

import { useTranslations } from "next-intl";
import { RiCheckLine } from "react-icons/ri";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import P from "../TranslationTags/P";
import H2 from "../TranslationTags/H2";

const plans = [
  {
    title: "ArtworkPrice.plans.plan1.title",
    description: "ArtworkPrice.plans.plan1.description",
    price: "500 L.E.",
    features: [
      "ArtworkPrice.plans.plan1.features.1",
      "ArtworkPrice.plans.plan1.features.2",
      "ArtworkPrice.plans.plan1.features.3",
    ],
    noteColor: "bg-neutral-950",
  },
  {
    title: "ArtworkPrice.plans.plan2.title",
    description: "ArtworkPrice.plans.plan2.description",
    price: "4000 L.E.",
    features: [
      "ArtworkPrice.plans.plan2.features.1",
      "ArtworkPrice.plans.plan2.features.2",
      "ArtworkPrice.plans.plan2.features.3",
    ],
    noteColor: "bg-dark",
  },
];

export default function ArtworkPrice() {
  const t = useTranslations();

  return (
    <div>
      <H2 className="text-center text-5xl font-bold mb-2">
        {t("ArtworkPrice.title")}
      </H2>
      <P className="text-center text-muted max-w-xl mx-auto mb-4">
        {t("ArtworkPrice.subtitle")}
      </P>

      <div className="flex flex-col md:flex-row justify-between items-stretch gap-5 mt-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="grid w-full h-full bg-dark p-1 rounded-3xl"
          >
            <div
              className={`${plan.noteColor} p-6 rounded-3xl flex flex-col justify-between h-full`}
            >
              <div>
                <h3 className="text-2xl text-primary font-semibold mb-1">
                  {t(plan.title)}
                </h3>
                <p className="text-sm mb-6 text-muted">{t(plan.description)}</p>
                <p className="my-8 md:text-6xl text-5xl font-bold uppercase">
                  {plan.price}
                </p>
              </div>

              <div>
                <p className="font-medium mb-3">{t("ArtworkPrice.include")}:</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-xl text-primary mt-1">
                        <RiCheckLine />
                      </span>
                      {t(feature)}
                    </li>
                  ))}
                </ul>
                <PrimaryBtn
                  className="w-full"
                  target={false}
                  link="/contact"
                  text={t("ArtworkPrice.CTA")}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <P className="text-center text-muted mt-8 max-w-xl mx-auto mb-4">
        {t("ArtworkPrice.Note")}
      </P>
    </div>
  );
}
