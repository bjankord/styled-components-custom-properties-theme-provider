const createNArray = (n) => Array.apply(null, { length: n }).map(Number.call, Number);

export default createNArray;