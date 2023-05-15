import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "@/provider/store";
import { fetchUniversities } from "@/provider/universities/universitiesSlice";

import Checked from "./Checked";
import Reset from "./Reset";

const Search: FC = () => {
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
        <Reset setCountry={setCountry} />
        <Checked />
      </div>
    </section>
  );
};

export default Search;
