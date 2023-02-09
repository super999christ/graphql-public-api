# Coding Challenge - Randall Christ

## Environment
`Node.js 16.9`

## How to run the project

Install dependencies:

```shell
npm ci

# or using

npm install
```

Open GraphiQL in your browser [http://localhost:8080/graphql](http://localhost:8080/graphql)

## Public API

CountryAPI is used to fetch information of country by ISO code

[http://api.worldbank.org/v2/country/:iso_code?format=json](http://api.worldbank.org/v2/country/us?format=json)

```shell
[
  {
    "page": 1,
    "pages": 1,
    "per_page": "50",
    "total": 1
  },
  [
    {
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
    }
  ]
]
```

## How App works

Using GraphQL query, you can filter country metadata by id, name, iso2Code and region.

Query (Input):
```shell
{
  country(code: "UQ") {
    id,
    name,
    iso2Code,
    region {
      value
    }
  }
}
```

Result (Output):
```shell
{
  "data": {
    "country": {
      "id": "UKR",
      "name": "Ukraine",
      "iso2Code": "UA",
      "region": {
        "value": "Europe & Central Asia"
      }
    }
  }
}
```

## Tech Stacks & Libraries
- `TypeScript`
- `Express-GraphQL`
- `Jest`
- `Axios`
