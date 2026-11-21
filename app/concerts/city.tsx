import { useParams } from "react-router";

export default function City() {
  const { city } = useParams();
  return <h1 className="text-3xl font-bold">Concerts in {city}</h1>;
}
