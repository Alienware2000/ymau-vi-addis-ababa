"use client";

import { useMemo, useState } from "react";

const visaOnArrivalCountries = [
  "Algeria", "Angola", "Argentina", "Austria", "Australia", "Bahrain", "Belarus", "Belgium", "Benin", "Bosnia and Herzegovina", "Botswana", "Brazil", "Bulgaria", "Burkina Faso", "Burundi", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "China", "Comoros", "Côte d’Ivoire", "Croatia", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Equatorial Guinea", "Estonia", "Finland", "France", "Gabon", "Georgia", "Germany", "Ghana", "Greece", "Guinea", "Guinea-Bissau", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Ireland", "Israel", "Italy", "Japan", "Jordan", "Kosovo", "Kuwait", "Latvia", "Lebanon", "Lesotho", "Liberia", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Monaco", "Montenegro", "Morocco", "Mozambique", "Namibia", "New Zealand", "Niger", "North Korea", "North Macedonia", "Norway", "Oman", "Philippines", "Poland", "Portugal", "Qatar", "Republic of the Congo", "Romania", "Russia", "Rwanda", "São Tomé and Príncipe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Eswatini", "Sweden", "Switzerland", "Taiwan", "Tanzania", "Thailand", "The Gambia", "The Netherlands", "Togo", "Tunisia", "Turkey", "United Arab Emirates", "Uganda", "Ukraine", "United Kingdom", "United States", "Zambia", "Zimbabwe",
];

const visaExemptCountries = ["Djibouti", "Kenya"];

const remainingPassportCountries = [
  "Afghanistan", "Albania", "Andorra", "Antigua and Barbuda", "Armenia", "Azerbaijan", "The Bahamas", "Bangladesh", "Barbados", "Belize", "Bhutan", "Bolivia", "Brunei", "Cambodia", "Chile", "Colombia", "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Eritrea", "Ethiopia", "Fiji", "Grenada", "Guatemala", "Guyana", "Haiti", "Honduras", "Iran", "Iraq", "Jamaica", "Kazakhstan", "Kiribati", "Kyrgyzstan", "Laos", "Libya", "The Maldives", "Marshall Islands", "Micronesia", "Moldova", "Mongolia", "Myanmar", "Nauru", "Nepal", "Nicaragua", "Nigeria", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Solomon Islands", "Sri Lanka", "Sudan", "Suriname", "Syria", "Tajikistan", "Timor-Leste", "Tonga", "Trinidad and Tobago", "Turkmenistan", "Tuvalu", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen",
];

const allCountries = Array.from(
  new Set([...visaExemptCountries, ...visaOnArrivalCountries, ...remainingPassportCountries]),
).sort((a, b) => a.localeCompare(b));

export function VisaPathwayChecker() {
  const [country, setCountry] = useState("");

  const result = useMemo(() => {
    if (!country) return null;
    if (country === "Ethiopia") {
      return {
        status: "Ethiopian passport holder",
        tone: "exempt",
        copy: "Ethiopian citizens do not need a visitor visa to enter Ethiopia. Confirm the passport and travel-document requirements that apply to your journey.",
      };
    }
    if (visaExemptCountries.includes(country)) {
      return {
        status: "Visa-free",
        tone: "exempt",
        copy: "The official Ethiopian eVisa portal lists valid passport holders from Kenya and Djibouti as visa-exempt.",
      };
    }
    if (visaOnArrivalCountries.includes(country)) {
      return {
        status: "Visa on arrival available",
        tone: "arrival",
        copy: "This passport appears on Ethiopia’s official tourist visa-on-arrival list. Applying online in advance may still reduce uncertainty at the airport.",
      };
    }
    return {
      status: "Check advance eVisa",
      tone: "advance",
      copy: "This passport is not in the locally stored visa-free or visa-on-arrival list. Use the official portal to confirm and apply before travel.",
    };
  }, [country]);

  return (
    <section className="visa-checker" aria-labelledby="visa-checker-title">
      <div className="visa-checker__intro">
        <span>Travel tool · official-source pathway</span>
        <h2 id="visa-checker-title">Check your Ethiopian visa pathway.</h2>
        <p>
          Choose the nationality on the passport you will travel with. The result is a planning aid, not an entry guarantee.
        </p>
      </div>
      <div className="visa-checker__tool">
        <label htmlFor="passport-nationality">Passport nationality</label>
        <select
          id="passport-nationality"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
          <option value="">Select a country</option>
          {allCountries.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        {result ? (
          <div className={`visa-checker__result visa-checker__result--${result.tone}`} aria-live="polite">
            <span>Likely pathway</span>
            <strong>{result.status}</strong>
            <p>{result.copy}</p>
          </div>
        ) : (
          <div className="visa-checker__empty">Select your passport nationality to see the current pathway.</div>
        )}
        <div className="visa-checker__actions">
          <a href="https://www.evisa.gov.et/information/touristOnArrivalVisa" target="_blank" rel="noreferrer">Verify on official list</a>
          <a href="https://www.evisa.gov.et/information/tourist" target="_blank" rel="noreferrer">Open official tourist eVisa</a>
        </div>
        <small>Source reviewed 12 August 2026 · Immigration requirements can change before March 2027.</small>
      </div>
    </section>
  );
}
