
export default function average(list: number[]): number | null {
  const { sum, totalCount } = list.map(v => { return { value: v, count: 1 };})
  .reduce((acc, el) => { 
      return {
      sum: acc.sum + el.value,
      totalCount: acc.totalCount + el.count
    };
  }, 
  { 
    sum: 0, 
    totalCount: 0 
  });

  if (0 < totalCount) {
    return sum / totalCount;
  }
  return null;
}
