import Name, { IName } from "./Name";
import styles from "../css/DisplayNames.module.css";

interface DisplayNamesProps {
  babyInfo: IName[];
}

export default function DislayNames({
  babyInfo,
}: DisplayNamesProps): JSX.Element {
  babyInfo.sort((a: IName, b: IName) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const showNames = babyInfo.map((baby) => (
    <Name key={baby.id} id={baby.id} name={baby.name} sex={baby.sex} />
  ));

  return (
    <>
      <div className={styles.container}>{showNames}</div>
    </>
  );
}
