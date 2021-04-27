const TableBody = (props) => {
  return (
    <tbody>
      {props.elem.scores.map((score, index) => (
        <tr className="border_bottom" key={index}>
          <td>{score.n}</td>
          <td>{score.s}</td>
        </tr>
      ))}
    </tbody>
  );
};
export default TableBody;
