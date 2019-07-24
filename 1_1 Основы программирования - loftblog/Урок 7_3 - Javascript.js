var arr = [1, 4, 6, 3, 10];
for (i=0,sum=0;i<arr.length;i++) {
  if (arr[i] === 6 || arr[i] === 10 || arr[i] === 3) {
    //break;
    continue;
  }
  sum+=arr[i];
};

console.log(sum)
