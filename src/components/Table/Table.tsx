import { v4 } from "uuid";
import styles from "./Table.module.scss";

interface DataItem {
  [key: string]: any; // accepts all types of data, including components
}

interface Header {
  id: string;
  name: string;
}

interface TableProps<T extends DataItem> {
  headers: Header[];
  data: T[];
}

function Table<T extends DataItem>({ headers, data }: TableProps<T>) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.id} className={styles.tableHeader}>
              {header.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((dataItem) => (
          <tr key={v4()}>
            {headers.map((header) => (
              <td key={v4()} className={styles.tableCell}>
                <span>{dataItem[header.id]}</span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
