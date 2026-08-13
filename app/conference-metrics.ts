export type ConferenceMetric = {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  detail?: string;
};

export const ymauVConferenceMetrics: readonly ConferenceMetric[] = [
  { id: "delegates", value: 350, suffix: "+", label: "delegates" },
  { id: "nationalities", value: 30, suffix: "+", label: "nationalities" },
  { id: "financial-aid", value: 80, suffix: "%", label: "received financial aid" },
  { id: "speakers", value: 22, label: "workshop and panel speakers" },
];

export const ymauVIAmbassadorMetrics: readonly ConferenceMetric[] = [
  {
    id: "ambassadors",
    value: 97,
    label: "YMAU VI ambassadors",
    detail: "Current programme figure",
  },
  {
    id: "countries",
    value: 15,
    suffix: "+",
    label: "countries represented",
    detail: "Current programme figure",
  },
];

export const financialAidMetrics: readonly ConferenceMetric[] = [
  {
    id: "delegate-aid-share",
    value: 80,
    suffix: "%",
    label: "of YMAU V delegates received financial aid",
    detail: "Historical YMAU V figure",
  },
  {
    id: "cumulative-awards",
    value: 60,
    prefix: "$",
    suffix: "K+",
    label: "awarded over the first five editions",
    detail: "Historical cumulative figure",
  },
];
