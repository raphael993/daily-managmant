export interface Contact {
    id: number,
    name: string,
    title: string,
    lastName: string,
    description: string,
    telephones: Array<PhoneNumber>,
    profilePhoto: string
}

export interface PhoneNumber {
    ddd: string,
    phoneNumber: string
}