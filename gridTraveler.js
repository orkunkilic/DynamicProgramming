// Memoization
const gridTraveler_m = (m, n, memo = {}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = gridTraveler_m(m - 1, n, memo) + gridTraveler_m(m, n - 1, memo);
    return memo[key]
}

// Traditional way
const gridTraveler = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

/* console.log(gridTraveler(1,1)) //1
console.log(gridTraveler(2,3)) //3
console.log(gridTraveler(3,2)) //3
console.log(gridTraveler(3,3)) //6
console.log(gridTraveler(18,18)) //2333606220 */

console.log(gridTraveler_m(1,1)) //1
console.log(gridTraveler_m(2,3)) //3
console.log(gridTraveler_m(3,2)) //3
console.log(gridTraveler_m(3,3)) //6
console.log(gridTraveler_m(18,18)) //2333606220