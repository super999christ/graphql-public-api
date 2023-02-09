type ISOStandard = {
  id: string;
  iso2code: string;
  value: string;
};

type Country = {
  id: string;
  iso2Code: string;
  name: string;
  region: ISOStandard;
  incomeLevel: ISOStandard;
  capitalCity: string;
  longitude: string;
  latitude: string;
};