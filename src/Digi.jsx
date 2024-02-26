import { useGetDigimonByIdQuery } from "./digimonSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function Digi() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: digi } = useGetDigimonByIdQuery(id);

  const goBack = () => {
    // Navigate directly to /recipes
    navigate("/digimon");

    // Go back 1 level in your browser history
    // navigate(-1);
  };

  return digi ? (
    <section className="digi">
      <h2>
        {digi.name} #{digi.id}
      </h2>
      <img src={digi.images[0].href} alt={digi.name} />
      {/* <Link to="/recipes">Back to all recipes</Link> */}
      <button onClick={goBack}>Back to all digimon</button>
    </section>
  ) : (
    <p>Loading...</p>
  );
}
