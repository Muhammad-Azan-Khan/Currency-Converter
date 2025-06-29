const countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

let Rates =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

//*****************************************************************************************
let selectOption = document.querySelectorAll(".select");

let fromSelectFlag = document.querySelector("#fromFlag");

let toSelectFlag = document.querySelector("#toFlag");

let displayAns = document.querySelector(".toValue");

let displayRate = document.querySelector(".rate");

let selectedCurrency = "USD";

let toCountry = "PKR";

for (let selected of selectOption) {

  for (let code in countryList) {

    let newOption = document.createElement("option");
    newOption.innerText = code;
    newOption.value = code;

    if (selected.name === "firstDropDown" && code === "USD")
            {
                 newOption.selected = "selected";
            } 
    else if (selected.name === "secondDropDown" && code === "PKR")
            {
              newOption.selected = "selected";
            }
    selected.append(newOption);
  }

  selected.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {

  fromChangeRate.value = null;
  displayAns.innerText = null;
  selectedCode = element.value;

  let countryName = countryList[selectedCode];
  let newFlagLink = `https://flagsapi.com/${countryName}/flat/64.png`;

    if (element.name === "firstDropDown")
     {
        selectedCurrency = selectedCode;
        fromSelectFlag.src = newFlagLink;
     }
    else if (element.name === "secondDropDown")
     {
        toCountry = selectedCode;
        toSelectFlag.src = newFlagLink;
     }
};

let fromChangeRate = document.querySelector(".fromValue");

fromChangeRate.addEventListener("keypress", async () => {

  if (event.key == "Enter") 
    {
        if (fromChangeRate.value == null || fromChangeRate.value <= 0) 
            {
             fromChangeRate.value = "Invalid! ";
             fromChangeRate.disabled = true;
             fromChangeRate.disabled = false;
             displayAns.innerText = null;
             } 
        else
             {
             let userInput = fromChangeRate.value;
             fromChangeRate.disabled = true;
             fromChangeRate.disabled = false;

             let newRateURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${selectedCurrency.toLowerCase()}.json`;
             let response = await fetch(newRateURL);
             let data = await response.json();
             let ans = data[selectedCurrency.toLowerCase()][toCountry.toLowerCase()];

             let showAns = Math.round(ans * userInput * 100) / 100.0;
             displayAns.innerText = showAns;
             displayRate.innerText = `1 ${selectedCurrency} = ${ans.toFixed(3)} ${toCountry}`;
             }
    } 
});

fromChangeRate.addEventListener("click", () => {
  fromChangeRate.value = null;
  displayAns.innerText = null;
});

