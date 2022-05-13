import { domReady } from './util/domReady';

const main = (event?: Event) => {
  console.log(event);
};

domReady(main);
