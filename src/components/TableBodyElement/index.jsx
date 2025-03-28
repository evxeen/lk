export const TableBodyElement = ({ el }) => {

  return <tr>{Object.entries(el).map(([key, value]) => (value !== null ? <td key={key}>{value}</td> : null))}</tr>
}
