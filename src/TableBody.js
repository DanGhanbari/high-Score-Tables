const TableBody = (props) => {
  let sortScore;
  if (props.sort === "descending") {
    sortScore = props.elem.scores.sort((a, b) => {
      return a.s - b.s;
    });
  } else {
    sortScore = props.elem.scores.sort((a, b) => {
      return b.s - a.s;
    });
  }
  return (
    <tbody>
      {sortScore.map((score, index) => {
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
