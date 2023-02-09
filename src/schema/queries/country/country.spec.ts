import { describe, expect, jest, it } from "@jest/globals";
import axios from "axios";
import country from "./country";

jest.mock('axios');

const mockData = {
  "id": "USA",
  "iso2Code": "US",
  "name": "United States",
  "region": {
    "id": "NAC",
    "iso2code": "XU",
    "value": "North America"
  },
  "adminregion": {
    "id": "",
    "iso2code": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "HIC",
    "iso2code": "XD",
    "value": "High income"
  },
  "lendingType": {
    "id": "LNX",
    "iso2code": "XX",
    "value": "Not classified"
  },
  "capitalCity": "Washington D.C.",
  "longitude": "-77.032",
  "latitude": "38.8895"
};

const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockResolvedValue(mockData);

describe('GetCountryByCode', () => {
  it('Success to fetch country by code', async () => {
    const result = await country.resolve(null, { code: 'us' });
    expect(result).not.toBe(null);
    expect(result.id).toBe(mockData.id);
    expect(result.name).toBe(mockData.name);
    expect(result).toMatchObject(mockData);
  });

  it('Exception to fetch country by invalid code', async () => {
    const getCountry = () => {
      return country.resolve(null, { code: 'usaa' });
    };
    expect(getCountry).toThrowError();
  });
});