const Poduct = (x, y) => {
    return x*y;
}
// console.log(Poduct(17,2));

const student = {
    name: 'sush',
    age: 23,
    greet(){
        console.log('Hi Im ' + this.name);
    }
}
student.greet();