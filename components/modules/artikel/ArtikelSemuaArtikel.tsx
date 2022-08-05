import { Body, Button } from "@components";
import { SearchIcon } from "@heroicons/react/outline";
import { ArtikelArtikelLainnya } from "@components";
import { useState } from "react";
import { useWindowSize } from "@hooks";
import { InputField } from "@components/input-field";

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
  const { width } = useWindowSize();
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

  // Ketika besar layar di atas 1280 maka seluruh posisi di sini akan berubah
  if (width >= 1280) {
    return (
      <div className="flex flex-col bg-powder-light">
        <div className="flex gap-2 items-center pl-24 pt-16 pb-8">
          <Body
            preset="b2"
            className="border-cerulean px-2 border-l-4 px-4 text-[32px]"
          >
            Semua Artikel
          </Body>
        </div>
        <div className="flex justify-between w-full" id="search-section">
          <div className="pl-[110px]">
            {/* KUMPULAN ARTIKEL PER 5 */}
            <ArtikelArtikelLainnya
              total={totalArticles}
              filter={selectedTopic}
              search={enteredSearchInput}
              mode="normal"
              bodyPage={false}
            />
            <div className="flex justify-center pt-6 pb-10 pt-6 pb-24">
              <Button
                preset="secondaryLight"
                className="h-[60px] w-[180px]"
                onClick={addArtikelLainnyaHandler}
              >
                Artikel Lainnya
              </Button>
            </div>
          </div>
          <div className="pr-[130px]">
            <div className="pl-3 pt-5">
              <InputField
                type="text"
                placeholder="Cari Artikel"
                leftIcon={<SearchIcon className="w-4 h-4" color="gray.300" />}
                value={enteredSearchInput}
                onChange={searchInputChangeHandler}
                className="max-w-[250px]"
              />
            </div>
            {/* BAGIAN TOPIC */}
            <div className="py-3 pl-2">
              <Body preset="p1" className="pb-4 text-[22px]">
                Cari artikel berdasarkan topik
              </Body>
              {/* KUMPULAN TOPIC */}
              <div className="flex flex-wrap max-w-[280px] gap-2">
                {/* TOPIC ALL (DEFAULT) */}
                <div
                  className={
                    selectedTopic == "All"
                      ? "border-2 bg-cerulean border-cerulean rounded-2xl text-powder-light font-bold px-[8px] py-[2px] text-[15px] hover:cursor-pointer"
                      : "border-2 border-cerulean rounded-2xl text-cerulean font-bold px-[8px] py-[2px] text-[15px] hover:cursor-pointer"
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
                        ? "border-2 bg-cerulean border-cerulean rounded-2xl text-powder-light font-bold px-[8px] py-[2px] text-[15px] hover:cursor-pointer"
                        : "border-2 border-cerulean rounded-2xl text-cerulean font-bold px-[8px] py-[2px] text-[15px] hover:cursor-pointer"
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
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center bg-powder-light">
        <div className="flex flex-col w-full" id="search-section">
          <div className="flex gap-2 items-center mobile:px-7 mobile:pt-4 tablet:pl-16 tablet:pt-10 tablet:pb-5">
            <Body
              preset="b2"
              className="border-l-2 border-cerulean px-2 tablet:border-l-4 tablet:text-[24px] tablet:px-4"
            >
              Semua Artikel
            </Body>
          </div>
          <div className="flex justify-end pt-5 pb-3">
            <InputField
              type="text"
              placeholder="Cari Artikel"
              leftIcon={<SearchIcon className="w-4 h-4" color="gray.300" />}
              value={enteredSearchInput}
              onChange={searchInputChangeHandler}
              className="mobile:max-w-[240px] tablet:max-w-[280px] mobile:pr-7 tablet:pr-20"
            />
          </div>
          {/* BAGIAN TOPIC */}
          <div className="pl-8 py-3 tablet:pl-20">
            <Body preset={width >= 768 ? "p2" : "p3"} className="pb-2">
              Cari artikel berdasarkan topik
            </Body>
            {/* KUMPULAN TOPIC */}
            <div className="flex flex-wrap mobile:max-w-[240px] gap-1 tablet:max-w-[440px]">
              {/* TOPIC ALL (DEFAULT) */}
              <div
                className={
                  selectedTopic == "All"
                    ? "border-2 bg-cerulean border-cerulean rounded-2xl text-powder-light text-[8px] font-bold px-[6px] py-[1px] tablet:text-[11px] hover:cursor-pointer"
                    : "border-2 border-cerulean rounded-2xl text-cerulean text-[8px] font-bold px-[6px] py-[1px] tablet:text-[11px] hover:cursor-pointer"
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
                      ? "border-2 bg-cerulean border-cerulean rounded-2xl text-powder-light text-[8px] font-bold px-[6px] py-[1px] tablet:text-[11px] hover:cursor-pointer"
                      : "border-2 border-cerulean rounded-2xl text-cerulean text-[8px] font-bold px-[6px] py-[1px] tablet:text-[11px] hover:cursor-pointer"
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
            mode="normal"
            bodyPage={false}
          />
          <div className="flex justify-center mobile:pt-6 mobile:pb-10 tablet:pt-10 tablet:pb-14">
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
  }
};
