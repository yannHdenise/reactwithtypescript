interface Props {
  onDelete: (index: number) => void;
  listItem: {
    description: string;
    amount: number;
    category: string;
  }[];
}

const Table = ({ listItem, onDelete }: Props) => {
  console.log(listItem);
  const billList = listItem.slice(1);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      {billList.length <= 0}
      <tbody>
        {billList.map((bill, index) => (
          <tr key={index}>
            <th scope="row">{index}</th>
            <td>{bill.description}</td>
            <td>{bill.amount}</td>
            <td>{bill.category}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            {billList.reduce((acc, bill) => bill.amount + acc, 0).toFixed(2)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
