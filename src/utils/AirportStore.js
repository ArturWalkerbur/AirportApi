import {makeAutoObservable} from "mobx";

export default class AirportStore{
    constructor() {

        this._airports = [
            {
                "icao": "WSSS",
                "iata": "SIN",
                "name": "Singapore Changi International Airport",
                "city": "Singapore",
                "region": "North East",
                "country": "SG",
                "elevation_ft": "22",
                "latitude": "1.3501900434",
                "longitude": "103.9940032959",
                "timezone": "Asia/Singapore"
            },
            {
                "icao": "RKSI",
                "iata": "ICN",
                "name": "Incheon International Airport",
                "city": "Seoul",
                "region": "Incheon",
                "country": "KR",
                "elevation_ft": "23",
                "latitude": "37.4691009521",
                "longitude": "126.4509963989",
                "timezone": "Asia/Seoul"
            },
            {
                "icao": "EHAM",
                "iata": "AMS",
                "name": "Amsterdam Airport Schiphol",
                "city": "Amsterdam",
                "region": "North Holland",
                "country": "NL",
                "elevation_ft": "-11",
                "latitude": "52.3086013794",
                "longitude": "4.7638897896",
                "timezone": "Europe/Amsterdam"
            },
            {
                "icao": "ZBAA",
                "iata": "PEK",
                "name": "Beijing Capital International Airport",
                "city": "Beijing",
                "region": "Beijing",
                "country": "CN",
                "elevation_ft": "116",
                "latitude": "40.0801010132",
                "longitude": "116.5849990845",
                "timezone": "Asia/Shanghai"
            },
            {
                "icao": "EDDM",
                "iata": "MUC",
                "name": "Munich International Airport",
                "city": "Munich",
                "region": "Bavaria",
                "country": "DE",
                "elevation_ft": "1487",
                "latitude": "48.3538017273",
                "longitude": "11.7861003876",
                "timezone": "Europe/Berlin"
            },
            {
                "icao": "LSZH",
                "iata": "ZRH",
                "name": "Zurich Airport",
                "city": "Zurich",
                "region": "Zurich",
                "country": "CH",
                "elevation_ft": "1416",
                "latitude": "47.4646987915",
                "longitude": "8.5491695404",
                "timezone": "Europe/Zurich"
            },
            {
                "icao": "CYVR",
                "iata": "YVR",
                "name": "Vancouver International Airport",
                "city": "Vancouver",
                "region": "British Columbia",
                "country": "CA",
                "elevation_ft": "14",
                "latitude": "49.193901062",
                "longitude": "-123.1839981079",
                "timezone": "America/Vancouver"
            },
            {
                "icao": "RJTT",
                "iata": "HND",
                "name": "Tokyo International Airport",
                "city": "Tokyo",
                "region": "Tokyo",
                "country": "JP",
                "elevation_ft": "35",
                "latitude": "35.5522994995",
                "longitude": "139.7799987793",
                "timezone": "Asia/Tokyo"
            },
            {
                "icao": "EGLL",
                "iata": "LHR",
                "name": "London Heathrow Airport",
                "city": "London",
                "region": "England",
                "country": "GB",
                "elevation_ft": "83",
                "latitude": "51.4706001282",
                "longitude": "-0.4619410038",
                "timezone": "Europe/London"
            }
        ]

        makeAutoObservable(this)

    }

    setAirport(airports) {
        this._airports = airports
    }

    get airports() {
        return this._airports
    }

}