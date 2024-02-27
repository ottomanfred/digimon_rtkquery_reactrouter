import { useGetDigimonQuery } from "./digimonSlice";
import { Link } from "react-router-dom";

export default function DigimonList() {
  const { data: digimon, isLoading } = useGetDigimonQuery();

  return (
    <>
      <ul>
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          digimon.map((digi) => (
            <li key={digi.id}>
              <Link to={`/digimon/${digi.id}`}>
                <h2>
                  {digi.name} #{digi.id}
                </h2>
              </Link>
              <Link to={`/digimon/${digi.id}`}>
                <img src={digi.image} alt="digimon image" />
              </Link>
            </li>
          ))
        )}
      </ul>
    </>
  );
}
