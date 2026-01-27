import React, { useState } from "react";
import { cabins } from "./data/data";

function App() {
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState({ min: "", max: "" });
  const [capacityFilter, setCapacityFilter] = useState("");

  // Filtered cabins
  const filteredCabins = cabins.filter((cabin) => {
    const matchesSearch =
      cabin.name.toLowerCase().includes(search.toLowerCase()) ||
      cabin.type.toLowerCase().includes(search.toLowerCase());
    const matchesPrice =
      (!priceFilter.min || cabin.price >= Number(priceFilter.min)) &&
      (!priceFilter.max || cabin.price <= Number(priceFilter.max));
    const matchesCapacity =
      !capacityFilter || cabin.capacity === Number(capacityFilter);

    return matchesSearch && matchesPrice && matchesCapacity;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Cabin Booking</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name or type"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "5px", marginRight: "10px" }}
      />

      {/* Price Filter */}
      <input
        type="number"
        placeholder="Min Price"
        value={priceFilter.min}
        onChange={(e) =>
          setPriceFilter({ ...priceFilter, min: e.target.value })
        }
        style={{ padding: "5px", marginRight: "5px" }}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={priceFilter.max}
        onChange={(e) =>
          setPriceFilter({ ...priceFilter, max: e.target.value })
        }
        style={{ padding: "5px", marginRight: "10px" }}
      />

      {/* Capacity Filter */}
      <input
        type="number"
        placeholder="Capacity"
        value={capacityFilter}
        onChange={(e) => setCapacityFilter(e.target.value)}
        style={{ padding: "5px", marginRight: "10px" }}
      />

      <table
        border="1"
        cellPadding="10"
        style={{ marginTop: "20px", width: "100%", textAlign: "left" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Capacity</th>
            <th>Price</th>
            <th>Booking</th>
          </tr>
        </thead>
        <tbody>
          {filteredCabins.length > 0 ? (
            filteredCabins.map((cabin) => (
              <tr key={cabin.id}>
                <td>{cabin.name}</td>
                <td>{cabin.type}</td>
                <td>{cabin.capacity}</td>
                <td>${cabin.price}</td>
                <td>
                  <button onClick={() => alert(`Booked ${cabin.name}!`)}>
                    Book
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No cabins found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
