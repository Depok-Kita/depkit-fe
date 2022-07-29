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
  // Default value selectedTopic = All
  const [selectedTopic, setSelectedTopic] = useState("All");

  const changeSelectedTopicHandler = (event: any) => {
    setSelectedTopic(event.target.id);
  };

  return (
    <div className="flex justify-center bg-powder-light mobile:h-[720px]">
      <div className="flex flex-col w-full" id="search-section">
        <div className="flex gap-2 items-center mobile:px-7 mobile:pt-4">
          <SmallBlueLine />
          <Body preset="b2">Semua Artikel</Body>
        </div>
        <div>
          <InputField
            type="text"
            placeholder="Cari Artikel"
            leftIcon={<SearchIcon />}
          ></InputField>
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
              className="border-2 border-cerulean rounded-2xl text-cerulean text-[8px] font-bold px-[6px] py-[1px]"
              key={0}
              onClick={changeSelectedTopicHandler}
              id="All"
            >
              All
            </div>
            {/* BUTTON MENUJU TOPIC TERTENTU */}
            {topics?.map((topic: any) => (
              <div
                className="border-2 border-cerulean rounded-2xl text-cerulean text-[8px] font-bold px-[6px] py-[1px]"
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
        <ArtikelArtikelLainnya total={5} filter={selectedTopic} />
        <div className="flex justify-center pt-6">
          <Button preset="secondaryLight" className="w-[160px]">
            Artikel Lainnya
          </Button>
        </div>
      </div>
    </div>
  );
};
