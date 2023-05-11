export const CountryCode = [
  {
    name: "+66",
    key: "+66",
  },
];

export const CheckCountryCode: {
  [K: string]: {
    check: RegExp;
  };
} = {
  "+66": {
    check: /^[0]{1}[0-9]{8,9}$/,
  },
};

export const PrefixName = [
  {
    nameTh: "นาย",
    nameEn: "Mr.",
    value: "Mr",
  },
  {
    nameTh: "นาง",
    nameEn: "Mrs.",
    value: "Mrs",
  },
  {
    nameTh: "นางสาว",
    nameEn: "Ms.",
    value: "Ms",
  },
];

export const Citizenship = [
  {
    nameTh: "ไทย",
    nameEn: "Thai",
    value: "thai",
  },
  {
    nameTh: "ลาว",
    nameEn: "Laos",
    value: "laos",
  },
];

export const Gender = [
  {
    nameTh: "ผู้ชาย",
    nameEn: "Male",
    value: "male",
  },
  {
    nameTh: "ผู้หญิง",
    nameEn: "Female",
    value: "female",
  },
  {
    nameTh: "ไม่ระบุ",
    nameEn: "Not specified",
    value: "notSpecified",
  },
];
