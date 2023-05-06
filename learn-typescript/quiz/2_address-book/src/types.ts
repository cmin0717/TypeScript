export interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}
export interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

// PhoneType 매개변수에 들어오는값을 특정 으로 제한하기위해 이넘을 선언
export enum PhoneType {
  office = 'office',
  home = 'home',
  studio = 'studio',
}
