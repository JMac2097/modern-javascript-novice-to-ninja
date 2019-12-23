
// rest oaram

const double = (...nums) => {
    console.log(nums);
    return nums.map(num => num*2);
}

const result = double(1,2,3,6,4,3,2);
console.log(result);


const people = ['derek', 'ryu', 'ken'];

console.log(...people);
