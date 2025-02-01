function split(arr) {
    if (arr.length <= 1) {return arr}
    
    const lhs = split(
        arr.slice(0, Math.ceil(arr.length/2))
        );
    const rhs = split(
        arr.slice(Math.ceil(arr.length/2), arr.length)
        );
    
    return merge(lhs, rhs);
}

function merge(l, r) {
    let i = 0;
    let j = 0;
    let sorted = [];
    
    while (( i < l.length ) && ( j < r.length )) {
        if (l[i] < r[j]) {
            sorted.push(l[i]);
            i++;
        } else {
            sorted.push(r[j]);
            j++;
        }
    }
    
    if (i < l.length) {
        sorted.push(...l.slice(i, l.length));
    }
    
    if (j < r.length) {
        sorted.push(...r.slice(j, r.length));
    }

    return sorted;
}

console.log(split([6,3,8,1,5,5,5,5,2]))

/*
split() an arr into lhs and rhs
recursive split() the lhs and rhs until hit the based case length = 1
put the lhs and rhs to merge and build up

example:
arr = [6,2,5,8]

split([6,2,5,8])
  lhs = split([6, 2])
    lsh = split([6])
      return [6]
    rhs = split([2])
      return [2]
    merge([6], [2])
      return [2, 6]
  return [2, 6]

  rhs = split([5, 8])
    lsh = split([5])
      return [5]
    rhs = split([8])
      return [8]
    merge([5], [8])
      return [5, 8]
  return [5, 8]

  merge([2, 6], [5, 8])
    return [2, 5, 6, 8]
return [2, 5, 6, 8]
*/
