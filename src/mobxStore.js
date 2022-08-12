import { makeAutoObservable } from 'mobx';

class Products {
  jsonRes = [];
  perPage = 5;
  page = 1;
  buttons = [];
  fromButton = 0;
  toButton = 3;
  btnPage = 1;

  constructor() {
    makeAutoObservable(this);
  }
  fetchJson() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((res) => (this.jsonRes = res));
  }
  get paginationJson() {
    let from = this.perPage * this.page - this.perPage;
    let to = from + this.perPage;
    return this.jsonRes.slice(from, to);
  }
  nextPage() {
    this.page++;
    this.fromButton++;
    this.toButton++;
    this.btnPage++;
  }
  prevPage() {
    this.page--;
    this.fromButton--;
    this.toButton--;
    this.btnPage--;
  }
  get buttonsPage() {
    let len = this.jsonRes.length / this.perPage;
    for (let i = 1; i <= len; i++) {
      this.buttons.push(i);
    }
    return this.buttons;
  }
  get paginatedButtons() {
    return this.buttonsPage.slice(this.fromButton, this.toButton);
  }
  setThisPage(page) {
    this.page = page;
    this.btnPage = page;

    if (page > 1 && page === this.toButton) {
      this.fromButton++;
      this.toButton++;
    }
    if (page > 1 && page === this.fromButton + 1) {
      this.fromButton--;
      this.toButton--;
      this.page--;
      console.log('to button', this.toButton);
      console.log('from button', this.fromButton);
    }
  }
  setLastPage() {
    this.page = this.jsonRes.length / this.perPage;
  }
  setFirstPage() {
    this.page = 1;
    this.fromButton = 0;
    this.toButton = 3;
  }
}
export default new Products();
