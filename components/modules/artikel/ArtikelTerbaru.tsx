import SmallBlueLine from "@images/small-blue-line.svg";
import { Header, Body, Card } from "@components";
import { useFetch } from "hooks/useFetch";
import { ShareIcon } from "@heroicons/react/outline";

export const ArtikelTerbaru = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/articles"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // MENGECEK SELURUH ARTIKEL
  console.log(data);

  // AMBIL 3 DATA
  const artikelTerbaru = [];
  for (let i = 0; i < 3; i++) {
    try {
      data.data[i].number = i + 1; // Menambahkan nomor untuk iterasi di map
      artikelTerbaru.push(data.data[i]);
    } catch (error) {
      // Saat data tidak ada di index tertentu maka break saja
      break;
    }
  }

  // MENGECEK 3 ARTIKEL TERBARU
  console.log(artikelTerbaru);

  return (
    <div className="flex justify-center bg-powder mobile:h-[360px]">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-2 items-center mobile:px-7 mobile:pt-4">
          <SmallBlueLine />
          <Body preset="b2">Artikel Terbaru</Body>
        </div>
        <div className="flex flex-col">
          {artikelTerbaru.map((artikel: any) => (
            <div className="flex justify-center py-1">
              {/* BUTTON UNTUK MENGARAHKAN ALAMAT KE BODY ARTIKEL */}
              <button>
                <Card
                  preset="light"
                  className="mobile:w-[315px] p-4 rounded-xl relative"
                  padding="false"
                >
                  <div className="flex gap-2">
                    <Header preset="h4" className="text-powder">
                      {artikel.number}
                    </Header>
                    <img
                      src={artikel.attributes.thumbnail}
                      width={85}
                      alt="thumbnail"
                      className="rounded-md"
                    />
                    <div className="text-left">
                      <Body preset="p3">{artikel.attributes.published}</Body>
                      <Body preset="b3">{artikel.attributes.title}</Body>
                    </div>
                    <ShareIcon className="mobile:w-4 absolute right-3 pt-12" />
                  </div>
                </Card>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
