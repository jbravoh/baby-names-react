import { useState } from "react";
import { IName } from "./Name";
import DisplayNames from "./DisplayNames";
import SearchInput from "./SearchInput";

export default function MainContent(props: { babyData: IName[] }): JSX.Element {
  const babyInfo: IName[] = props.babyData;
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <SearchInput
        searchTerm={searchTerm}
        handleSearchInput={handleSearchTerm}
      />
      <DisplayNames babyInfo={babyInfo} searchTerm={searchTerm} />
    </>
  );
}
