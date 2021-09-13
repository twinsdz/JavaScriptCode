let arr = [10, 20, 30, 40, 50, 60];

arr[1] = 21;
arr[arr.length] = 40;
arr.push(50, 60);

console.log(arr);

console.log('');

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log('\n');
// обхожда половината масив
for (let i = 0; i < arr.length / 2; i++){
    console.log(arr[i]);
}