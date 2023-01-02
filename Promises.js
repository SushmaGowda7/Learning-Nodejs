async function Print(){
    console.log('a');
    console.log('b');
    await new Promise((res, rej) => {
        setTimeout(() => res(console.log('c')), 3000)
    }) 
    await new Promise((res, rej) => {
        setTimeout(() => res(console.log('d')), 0)
    }) 
    console.log('e');
}
Print();
