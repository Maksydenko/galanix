import { IUniversity } from "@/interfaces/university.interface";

const API_URL = "http://universities.hipolabs.com";

interface IFetchUniversities {
  (country: string): Promise<IUniversity>;
}

export const fetchUniversitiesData: IFetchUniversities = async (country) => {
  const response = await fetch(`${API_URL}/search?country=${country}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result = await response.json();
  return result;
};
