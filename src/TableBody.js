const TableBody = (props) => {
  let descendingOrder = props.elem.scores.sort((a, b) => {
    return b.s - a.s;
  });
  return (
    <tbody>
      {descendingOrder.map((score, index) => {
        return (
          <tr className="border_bottom" key={index}>
            <td>{score.n}</td>
            <td>{score.s}</td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default TableBody;
