import SmallBlueLine from "@images/small-blue-line.svg";
import { Header, Body, Button, InputField } from "@components";
import { useFetch } from "hooks/useFetch";
import { SearchIcon } from "@heroicons/react/outline";

export const ArtikelSemuaArtikel = () => {
  const { loading, error, data } = useFetch("http://localhost:1337/api/topics");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // MENGECEK SELURUH TOPIC
  console.log(data);

  return (
    <div className="flex justify-center items-center bg-powder-light mobile:h-[360px]">
      <div className="flex flex-col">
        <div className="flex gap-2 items-center mobile:px-7 mobile:pt-4">
          <SmallBlueLine />
          <Body preset="b2">Semua Artikel</Body>
        </div>
        <InputField
          type="text"
          placeholder="Cari Artikel"
          leftIcon={<SearchIcon />}
        ></InputField>
        <Body preset="p3">Cari artikel berdasarkan topik</Body>
        {/* KUMPULAN TOPIC */}
        <div className="grid grid-cols-4 gap-1">
          {/* BUTTON MENUJU TOPIC TERTENTU */}
          <div>
            <button>
              {data.data.map((topic) => (
                <div className="border-2 border-cerulean rounded-2xl text-cerulean text-[8px] font-bold px-1">
                  {topic.attributes.name}
                </div>
              ))}
            </button>
          </div>
        </div>
        {/* KUMPULAN ARTIKEL PER 5 */}
      </div>
    </div>
  );
};
