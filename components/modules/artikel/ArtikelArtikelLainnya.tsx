import SmallBlueLine from "@images/small-blue-line.svg";
import { Header, Body, Button, InputField } from "@components";
import { useFetch } from "hooks/useFetch";
import { ShareIcon } from "@heroicons/react/outline";
import Link from "next/link";

// PASANG PROPS JUMLAH ARTIKEL YANG INGIN DITAMPILKAN AJA KALI YAK
export const ArtikelArtikelLainnya = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/articles"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // MENGECEK SELURUH ARTIKEL
  console.log("CEK DATA ARTIKEL LAINNYA");
  console.log(data);

  return (
    <div className="flex flex-col">
      {data.data.map((artikel) => (
        <div className="flex justify-center">
          <Link href={"/artikel/" + artikel.id} key={artikel.id}>
            <div className="mobile:w-[315px]">
              <div className="flex justify-between border-b border-powder py-2">
                <div>
                  <Body preset="p3" className="mobile:text-[8px]">
                    {artikel.attributes.published}
                  </Body>
                  <Body preset="b3">{artikel.attributes.title}</Body>
                  {/* BUTTON MENUJU TOPIC TERTENTU */}
                  {/* <div>
            <button>
              {artikel.attributes.topics.map((topic) => (
                <div className="border-2 border-cerulean rounded-2xl text-cerulean text-[8px] font-bold px-1">
                  {topic.attributes.name}
                </div>
              ))}
            </button>
          </div> */}
                </div>
                <div>
                  <ShareIcon className="w-9 pt-10 pl-5" />
                </div>
                <div>
                  <img
                    src={artikel.attributes.thumbnail}
                    width={85}
                    alt="thumbnail"
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
