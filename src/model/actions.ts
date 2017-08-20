export const LOAD_DATA = 'LOAD_DATA';
export function loadData(data: string) {
  return {
    data,
    type: LOAD_DATA
  };
}
