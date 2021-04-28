import TableBody from "./TableBody";
const Countries = (props) => {
  let sortScores = props.sort;
  return (
    <div>
      {props.countries.map((country, countryIndex) => (
        <table
          className="table table-dark table-striped my-4"
          key={countryIndex}
        >
          <thead>
            <tr>
              <th scope="col" colSpan="2" className="table-success text-dark">
                High Score: {country.name}
              </th>
            </tr>
          </thead>
          <TableBody elem={country} sort={sortScores} />
        </table>
      ))}
    </div>
  );
};
export default Countries;
