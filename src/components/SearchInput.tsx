import style from "../css/SearchInput.module.css";

interface SearchInputProps {
  searchTerm: string;
  handleSearchInput: React.ChangeEventHandler<HTMLInputElement>;
}

export default function SearchInput({
  searchTerm,
  handleSearchInput,
}: SearchInputProps): JSX.Element {
  return (
    <div className={style.container}>
      <input
        value={searchTerm}
        onChange={handleSearchInput}
        placeholder="Search names..."
      />
    </div>
  );
}
