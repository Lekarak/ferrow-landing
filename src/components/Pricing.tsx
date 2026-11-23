"use client";

import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthly: 0,
    blurb: "For founders talking to their first users.",
    features: ["500 feedback items / month", "2 sources", "Weekly digest", "1 seat"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Team",
    monthly: 49,
    blurb: "For product teams shipping every week.",
    features: [
      "10,000 feedback items / month",
      "Unlimited sources",
      "Ask Ferrow chat",
      "Linear and Jira sync",
      "5 seats",
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Scale",
    monthly: 199,
    blurb: "For companies with feedback in every channel.",
    features: ["Unlimited feedback", "SSO and audit logs", "Custom taxonomies", "Unlimited seats"],
    cta: "Talk to sales",
    featured: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <div>
      <div className="mb-12 flex justify-center">
        <div className="inline-flex rounded-full border border-line bg-white p-1 text-sm">
          {[
            { label: "Monthly", value: false },
            { label: "Yearly · save 20%", value: true },
          ].map((opt) => (
            <button
              key={opt.label}
              onClick={() => setYearly(opt.value)}
              className={`rounded-full px-4 py-2 transition ${
                yearly === opt.value ? "bg-ink text-paper" : "text-muted hover:text-ink"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {plans.map((plan) => {
          const price = yearly ? Math.round(plan.monthly * 0.8) : plan.monthly;
          return (
            <div
              key={plan.name}
              className={`flex flex-col rounded-3xl p-8 ${
                plan.featured
                  ? "bg-ink text-paper shadow-2xl shadow-ink/20 md:-translate-y-3"
                  : "border border-line bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                {plan.featured && (
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                    Most popular
                  </span>
                )}
              </div>
              <p className={`mt-2 text-sm ${plan.featured ? "text-paper/60" : "text-muted"}`}>
                {plan.blurb}
              </p>
              <div className="mt-8 flex items-baseline gap-1">
                <span className="font-serif text-6xl">${price}</span>
                <span className={plan.featured ? "text-paper/60" : "text-muted"}>/ month</span>
              </div>
              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className={plan.featured ? "text-accent" : "text-moss"}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#start"
                className={`mt-10 rounded-full px-5 py-3 text-center text-sm font-medium transition ${
                  plan.featured
                    ? "bg-accent text-white hover:bg-accent/90"
                    : "border border-ink/15 hover:border-ink"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
