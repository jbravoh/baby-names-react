import { IName } from "./Name";
import DisplayNames from "./DisplayNames";
import { useState } from "react";

export default function MainContent(props: { babyData: IName[] }): JSX.Element {
  const [babyInfo, setBabyInfo] = useState<IName[]>(props.babyData);

  return (
    <>
      <DisplayNames babyInfo={babyInfo} />
    </>
  );
}
