export const compareFullName = (a: string, b: string, isAsc: boolean) => {
  return a.toLowerCase().localeCompare(b.toLowerCase()) * (isAsc ? 1 : -1);
};
