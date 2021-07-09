new Set([1,1,2,2,3,4])
//[1,2,3,4]

[...new Set("referee")].join("")
//[refr]

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// {
//     [1,2,3] : false
// }

const hasDuplicate = (arr)=>{
    return new Set(arr).size === arr.length ? false:true;
};

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const vowelCount = (str)=>{
    const newMap = new Map();
    const newStr = str.toLowerCase().split('').filter((char)=>'aeiou'.indexOf(char) !== -1);

    for (let char of newStr){
      if (newMap.get(char)){
        let count = newMap.get(char);
        count++;
        newMap.set(char, count);
      } else {
        newMap.set(char, 1);
      }
    }

  return newMap;
};

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
