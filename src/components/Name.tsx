import styles from "../css/Name.module.css";

export interface IName {
  id?: number;
  name: string;
  sex?: string;
}

export default function Name({ name, sex }: IName): JSX.Element {
  return (
    <>
      <button className={sex === "m" ? styles.maleButton : styles.femaleButton}>
        {name}
      </button>
    </>
  );
}
