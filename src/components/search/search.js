import { useState } from "react";

import { AsyncPaginate } from "react-select-async-paginate";

import { GEO_API_URL, geoApiOptions } from "../../geodbcities";



const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptionsFromGeoDB = (inputValue) => {
      console.log(inputValue)
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            geoApiOptions
        )
            .then((response) => response.json())
            .then((response) => {
                //console.log(response);
                console.log(response.data);      
                //once the response comes back,we then use the response to get the shape of data AsyncPaginate needs, which is an object with 'options' key that maps to array of objects with keys, 'value' and 'label'
                return {
                    options: response.data.map((city)=> {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch((err) => console.error(err));
    };

    

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={800}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptionsFromGeoDB}
    />
  );
};

export default Search;
