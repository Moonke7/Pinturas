import "../styles/bigpics.css";
import { usePintura } from "../../../globalContext";

function BigPics({ source }) {
  const { Esconder, cEsconder } = usePintura();
  console.log(Esconder)
  return (
    <div className={Esconder ? "container_escondido" : "container_show"}>
      <div className="top_pic">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="42"
          height="42"
          color="#000000"
          fill="none"
          onClick={cEsconder}
          style={{cursor: "pointer"}}
        >
          <path
            d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <img alt="foto" src={source} />
    </div>
  );
}

export default BigPics;
