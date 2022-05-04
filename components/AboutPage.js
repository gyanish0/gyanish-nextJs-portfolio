import React from "react";
import styles from "../styles/about.module.css";
import Button from "@material-ui/core/Button";

const me = "./images/gyanish.JPEG";

export default function AboutPage() {
  return (
    <div className={styles.main}>
      <img src={me} className={styles.image} />
      <div className={styles.sec}>
        <p>
          Gyanish Shrivastava is an Indian React Developer working on
          technologies like React JS, JavaScript, Material UI, Next JS, React
          Native Html5, and CSS3. Born and raised in Deoria, Uttar Pradesh.
        </p>
        <table>
          <tr>
            <th>Name</th>
            <td>Gyanish Shrivastava</td>
          </tr>
          <tr>
            <th>Born</th>
            <td>20 September 2000</td>
          </tr>
          <tr>
            <th>Occupation</th>
            <td>Web Developer</td>
          </tr>
          <tr>
            <th>Hobbies</th>
            <td>Playing Mobile Games and Watching Movies</td>
          </tr>
        </table>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a
            style={{ width: "32.5%" }}
            href="hhttps://drive.google.com/file/d/1IBevdOWMsUZ6IHKaLfZy3D2qYWhj5WcG/view?usp=drivesdk"
            target="_blank"
          >
            <Button
              style={{ width: "100%" }}
              variant="contained"
              color="primary"
            >
              Resume
            </Button>
          </a>
          <a
            style={{ width: "32.5%" }}
            href="https://github.com/gyanish0"
            target="_blank"
          >
            <Button
              style={{ width: "100%" }}
              variant="contained"
              color="secondary"
            >
              GitHub
            </Button>
          </a>
          <a
            style={{ width: "32.5%" }}
            href="https://www.linkedin.com/in/gyanish-shrivastava-153582137"
            target="_blank"
          >
            <Button
              style={{ width: "100%" }}
              variant="outlined"
              color="primary"
            >
              More
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
