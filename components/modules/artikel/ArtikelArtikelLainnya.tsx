import SmallBlueLine from "@images/small-blue-line.svg";
import { Header, Body, Button, InputField } from "@components";
import { useFetch } from "hooks/useFetch";
import { SearchIcon } from "@heroicons/react/outline";

export const ArtikelArtikelLainnya = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/articles"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // MENGECEK SELURUH ARTIKEL
  console.log(data);

  return (
    <div className="flex justify-center items-center bg-powder-light mobile:h-[360px]"></div>
  );
};
