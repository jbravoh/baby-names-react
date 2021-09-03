import { IName } from "./Name";
import DisplayNames from "./DisplayNames";

export default function MainContent(props: { babyData: IName[] }): JSX.Element {
  const babyInfo: IName[] = props.babyData;

  return (
    <>
      <DisplayNames babyInfo={babyInfo} />
    </>
  );
}
