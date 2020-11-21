// export const displayedColumns = [
//   'Name',
//   'Description',
//   'Top 5 Contributors',
//   'GitHub URL',
//   'Fork',
//   'Star Count',
//   'Watchers Count',
//   'License',
//   'Language',
//   'Created time',
//   'Updated time',
// ];
export const gridDisplayedColumns: GridDisplayedColumns[] = [
  { name: 'Name', selected: true },
  { name: 'Description', selected: true },
  { name: 'Top 5 Contributors', selected: true },
  { name: 'GitHub URL', selected: true },
  { name: 'Fork', selected: true },
  { name: 'Star Count', selected: true },
  { name: 'Watchers Count', selected: true },
  { name: 'License', selected: false },
  { name: 'Language', selected: true },
  { name: 'Created time', selected: true },
  { name: 'Updated time', selected: true },
];

export interface GridDisplayedColumns {
  name: string;
  selected: boolean;
}
