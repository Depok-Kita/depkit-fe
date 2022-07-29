import SmallBlueLine from "@images/small-blue-line.svg";
import { Body, Button, InputField } from "@components";
import { SearchIcon } from "@heroicons/react/outline";
import { ArtikelArtikelLainnya } from "@components";
import { useState } from "react";

type ArtikelSemuaArtikelProps = {
  className?: string;
  articles?: any;
  topics?: any;
  children?: React.ReactNode;
};

export const ArtikelSemuaArtikel = ({
  children,
  className,
  articles,
  topics,
}: ArtikelSemuaArtikelProps) => {
  // Default value total (total artikel yang ditampilkan) = 5
  const [totalArticles, setTotalArticles] = useState(5);
  // Default value selectedTopic = All
  const [selectedTopic, setSelectedTopic] = useState("All");
  // State untuk mendapatkan nilai dari input search
  const [enteredSearchInput, setEnteredSearchInput] = useState("");

  const changeSelectedTopicHandler = (event: any) => {
    setSelectedTopic(event.target.id);
  };

  const searchInputChangeHandler = (event: any) => {
    setEnteredSearchInput(event.target.value);
  };

  const addArtikelLainnyaHandler = () => {
    setTotalArticles(totalArticles + 5);
  };

  console.log("Entered Search Input : " + enteredSearchInput);

  return (
    <div className="flex justify-center bg-powder-light">
      <div className="flex flex-col w-full" id="search-section">
        <div className="flex gap-2 items-center mobile:px-7 mobile:pt-4">
          <SmallBlueLine />
          <Body preset="b2">Semua Artikel</Body>
        </div>
        <div className="flex justify-end pt-5 pb-3">
          <input
            type="text"
            placeholder="Cari Artikel"
            value={enteredSearchInput}
            onChange={searchInputChangeHandler}
          />
        </div>
        {/* BAGIAN TOPIC */}
        <div className="pl-8 py-3">
          <Body preset="p3" className="pb-2">
            Cari artikel berdasarkan topik
          </Body>
          {/* KUMPULAN TOPIC */}
          <div className="flex flex-wrap mobile:max-w-[240px] gap-1">
            {/* TOPIC ALL (DEFAULT) */}
            <div
              className={
                selectedTopic == "All"
                  ? "border-2 bg-cerulean border-cerulean rounded-2xl text-powder-light text-[8px] font-bold px-[6px] py-[1px]"
                  : "border-2 border-cerulean rounded-2xl text-cerulean text-[8px] font-bold px-[6px] py-[1px]"
              }
              key={0}
              onClick={changeSelectedTopicHandler}
              id="All"
            >
              All
            </div>
            {/* BUTTON MENUJU TOPIC TERTENTU */}
            {topics?.map((topic: any) => (
              <div
                className={
                  selectedTopic == topic.name
                    ? "border-2 bg-cerulean border-cerulean rounded-2xl text-powder-light text-[8px] font-bold px-[6px] py-[1px]"
                    : "border-2 border-cerulean rounded-2xl text-cerulean text-[8px] font-bold px-[6px] py-[1px]"
                }
                key={topic.id}
                onClick={changeSelectedTopicHandler}
                id={topic.name}
              >
                {topic.name}
              </div>
            ))}
          </div>
        </div>
        {/* KUMPULAN ARTIKEL PER 5 */}
        <ArtikelArtikelLainnya
          total={totalArticles}
          filter={selectedTopic}
          search={enteredSearchInput}
        />
        <div className="flex justify-center pt-6 pb-10">
          <Button
            preset="secondaryLight"
            className="w-[160px]"
            onClick={addArtikelLainnyaHandler}
          >
            Artikel Lainnya
          </Button>
        </div>
      </div>
    </div>
  );
};
