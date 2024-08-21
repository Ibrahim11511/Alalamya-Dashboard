import Styles from "./lasersection.module.css";
export default function LaserSection() {
  return (
    <section className={Styles.laserSection}>
      <h2>Laser job statement</h2>
      <form>
        <input type="text" placeholder="Date" />
        <input type="text" placeholder="Customer Name" />
        <input type="number" placeholder="Time" />
        <input type="number" placeholder="Thikness" />
        <input type="text" placeholder="Type" />
        <input type="number" placeholder="Sheet Amount" />
        <input type="text" placeholder="Sheet Dimension" />
        <input type="submit" />
        <input type="reset" />
      </form>
      <table className={Styles.styledTable}>
        <thead>
          <tr>
            <th>Data</th>
            <th>Name</th>
            <th>Time</th>
            <th>Thikness</th>
            <th>Type</th>
            <th>Sheet Amount</th>
            <th>Sheet Dimension</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>17-8-2024</td>
            <td>Ahmed Andel</td>
            <td>5</td>
            <td>2mm</td>
            <td>galv</td>
            <td>2</td>
            <td>100*500</td>
          </tr>
          <tr>
            <td>17-8-2024</td>
            <td>Ahmed Andel</td>
            <td>5</td>
            <td>2mm</td>
            <td>galv</td>
            <td>2</td>
            <td>100*500</td>
          </tr>
          <tr>
            <td>17-8-2024</td>
            <td>Ahmed Andel</td>
            <td>5</td>
            <td>2mm</td>
            <td>galv</td>
            <td>2</td>
            <td>100*500</td>
          </tr>
          <tr>
            <td>17-8-2024</td>
            <td>Ahmed Andel</td>
            <td>5</td>
            <td>2mm</td>
            <td>galv</td>
            <td>2</td>
            <td>100*500</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
