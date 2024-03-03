import { useState } from "react";

function FilterMenu() {

    const [selectedFilters, SetSelectedFilters] = useState([""])
    let filters = ["Ivan", "Kalin", "Geri", "Marto", "Lorenco", "Alex", "Qni"]

    const handleFilterButtonClick = (person: string) =>
{
    if(selectedFilters.includes(person))
    {
        let filters = selectedFilters.filter((el) => el !== person);
        SetSelectedFilters(filters);
    }
    else{
        SetSelectedFilters([...selectedFilters, person]);
    }
    
}

  return (
    <aside>
      <h2>Filters</h2>
      <ul>
        <li>
          {filters.map((people, index) => (
            <button 
            onClick={() => handleFilterButtonClick(people)}
            className={selectedFilters?.includes(people) ? "active" : ""}
            key={index}
            >
            {people}
          </button>
          ))}
        </li>
      </ul>
    </aside>
  );
}

export default FilterMenu;
