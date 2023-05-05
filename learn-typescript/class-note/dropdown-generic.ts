interface info<T> {
  value:T,
  selected:boolean
}

const emails: info<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: info<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem<T1 extends string | number>(item: info<T1>) { // T1 제네릭에 string과 number를 상속시켜서 toString을 사용할수있게 했다.
  // function createDropdownItem<T1 extends {toString: Function}>(item: info<T1>) // 사용할 toString을 상속시키는 방법도 있다.
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  // selectTag?.appendChild(item) ?를 사용하여 해당값이 참인경우에만 실행되게 할수도 있다.
  if (selectTag)
    selectTag.appendChild(item);
});

// number 아이템 추가
numberOfProducts.forEach(product => {
  const item = createDropdownItem<number>(product)
  const selectTag = document.querySelector('#product-dropdown')
  selectTag?.appendChild(item) // ?를 사용하여 해당값이 참인경우에만 실행되게 할수도 있다.
})