import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "@/provider/store";
import {
  clearUniversitiesData,
  fetchUniversities,
} from "@/provider/universities/universitiesSlice";

interface ISearchProps {}

const Search: FC<ISearchProps> = ({}) => {
  const [country, setCountry] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  // Handle change
  interface IHandleChange {
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  }
  const handleChange: IHandleChange = ({ target: { value } }) =>
    setCountry(value);

  // Handle submit
  interface IHandleSubmit {
    (e: FormEvent<HTMLFormElement>): void;
  }
  const handleSubmit: IHandleSubmit = (e) => {
    country && dispatch(fetchUniversities(country));
    e.preventDefault();
  };

  // Handle submit
  interface IHandleReset {
    (): void;
  }
  const handleReset: IHandleReset = () => {
    setCountry("");
    dispatch(clearUniversitiesData());
  };

  return (
    <section className="search">
      <div className="search__container">
        <form action="#" className="search__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter country"
            className="search__input"
            value={country}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="search__button search__button_submit"
          >
            Submit
          </button>
        </form>
        <button
          className="search__button search__button_reset"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default Search;
