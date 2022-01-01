// Use any only as last resort
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Hello world!'));

function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

noReturn('Vitor', 'dos', 'Santos', 'Barcelos');

const person = {
  name: 'Vitor',
  lastname: 'dos Santos Barcelos',

  showFullName(): void {
    console.log(this.name + ' ' + this.lastname + ' From Object');
  },
};

person.showFullName();

export { person };
