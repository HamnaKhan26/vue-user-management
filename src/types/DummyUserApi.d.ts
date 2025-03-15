type StatesAndAbbreviations = {
    AK: 'Alaska',
    AL: 'Alabama',
    AR: 'Arkansas',
    AZ: 'Arizona',
    CA: 'California',
    CO: 'Colorado',
    CT: 'Connecticut',
    DC: 'District of Columbia',
    DE: 'Delaware',
    FL: 'Florida',
    GA: 'Georgia',
    HI: 'Hawaii',
    IA: 'Iowa',
    ID: 'Idaho',
    IL: 'Illinois',
    IN: 'Indiana',
    KS: 'Kansas',
    KY: 'Kentucky',
    LA: 'Louisiana',
    MA: 'Massachusetts',
    MD: 'Maryland',
    ME: 'Maine',
    MI: 'Michigan',
    MN: 'Minnesota',
    MO: 'Missouri',
    MS: 'Mississippi',
    MT: 'Montana',
    NC: 'North Carolina',
    ND: 'North Dakota',
    NE: 'Nebraska',
    NH: 'New Hampshire',
    NJ: 'New Jersey',
    NM: 'New Mexico',
    NV: 'Nevada',
    NY: 'New York',
    OH: 'Ohio',
    OK: 'Oklahoma',
    OR: 'Oregon',
    PA: 'Pennsylvania',
    PR: 'Puerto Rico',
    RI: 'Rhode Island',
    SC: 'South Carolina',
    SD: 'South Dakota',
    TN: 'Tennessee',
    TX: 'Texas',
    UT: 'Utah',
    VA: 'Virginia',
    VT: 'Vermont',
    WA: 'Washington',
    WI: 'Wisconsin',
    WV: 'West Virginia',
    WY: 'Wyoming',
}

type BloodGroup = 'A-' | 'A+' | 'B-' | 'B+' | 'AB-' | 'AB+' | 'O-' | 'O+';

interface Address {
    address: string,
    city: string,
    state: StatesAndAbbreviations[keyof StatesAndAbbreviations],
    stateCode: keyof StatesAndAbbreviations,
    postalCode: string,
    coordinates: Record<'lat' | 'lng', number>,
    country: string,
}

export interface User {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: `${string}@${string}`,
    phone: string,
    username: string,
    password: string,
    birthDate: `${number}-${number}-${number}`,
    image: string,
    bloodGroup: BloodGroup,
    height: number,
    weight: number,
    eyeColor: string,
    hair: Record<'color' | 'type', string>,
    ip: `${number}.${number}.${number}.${number}`,
    address: Address,
    macAddress: `${string}:${string}:${string}:${string}:${string}:${string}`,
    university: string,
    bank: {
        cardExpire: string,
        cardNumber: string,
        cardType: string,
        currency: string,
        iban: string,
    },
    company: {
        department: string,
        name: string,
        title: string,
        address: Address,
    },
    ein: `${number}-${number}`,
    ssn: `${number}-${number}-${number}`,
    userAgent: string,
    crypto: {
        coin: string,
        wallet: string,
        network: string,
    },
    role: 'admin' | 'moderator' | 'user'
}

export interface UserGetResponse {
    users: User[],
    total: number,
    skip: number,
    limit: 30,
}