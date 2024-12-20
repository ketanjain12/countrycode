// src/components/CountrySelect.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountrySelect = ({ selectedCountry, setSelectedCountry }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryData = response.data.map((country) => ({
          name: country.name.common,
          code: country.idd.root + (country.idd.suffixes[0] || ''),
          flag: country.flags.svg,
        }));
        setCountries(countryData);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <p>hello world</p>
    <select
      value={selectedCountry}
      onChange={(e) => setSelectedCountry(e.target.value)}
      className="country-select"
    >
      {countries.map((country) => (
        <option key={country.code} value={country.code}>
          <img src={country.flag} alt={`${country.name} flag`} width="20" /> {country.name} ({country.code})
        </option>
      ))}
    </select>
    </div>
  );
};

export default CountrySelect;
