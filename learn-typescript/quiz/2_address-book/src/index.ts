// 인터페이스를 모듈화 해서 불러왔다.
import { Contact, PhoneType } from './types';

// interface PhoneNumberDictionary {
//   [phone: string]: {
//     num: number;
//   };
// }

// interface Contact {
//   name: string;
//   address: string;
//   phones: PhoneNumberDictionary;
// }

// // PhoneType 매개변수에 들어오는값을 특정 으로 제한하기위해 이넘을 선언
// enum PhoneType {
//   office = 'office',
//   home = 'home',
//   studio = 'studio',
// }

// API
// 해당 함수는 promise타입으로 반환하면서 안에는 contact 인터페이스형태로 구성되있기에 promise제네릭에 contact타입을 넣어주어야한다.
function fetchContacts(): Promise<Contact[]> {
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  // 반환값을 promise형태로 넘기는데 settimeout를 이용하여 2초 후에 반환하게 된다.
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  contacts: Contact[] = [];

  constructor() {
    // 해당 클래스의 매서드 선언
    this.fetchData();
  }

  // 클래스의 매소드들

  // fetchData 매서드는 리턴값이 없기에 void를 리턴타입으로 정의
  // fetchData는 fetchContacts에서 받아온 contacts를 클래스안에 있는 contacts로 선언하는 작업이다.
  fetchData(): void {
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  findContactByName(name: string): Contact[] {
    // 배열을 filter를 하기에 리턴값은 배열로 나오게 된다. contacts안에는 contact타입으로 존재하기 contact[] 리턴타입으로 주었다.
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

  // phonetype을 이넘을 사용하여 특정값으로 정의한다.
  // 이렇게 하면 매서드 호출시 findContactByPhone(PhoneType.home) 등으로 호출하게 된다.
  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByName(): string[] {
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress(): string[] {
    return this.contacts.map(contact => contact.address);
  }
  /* ------------------------------------------------ */
}

new AddressBook();
