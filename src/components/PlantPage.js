import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((resp) => resp.json())
    .then((plants) => {
      setPlants(plants)
    })
  }, [])

  useEffect(() => {
    let searchedPlants = plants.filter((plant) => plant.name.toUpperCase().includes(search.toUpperCase()))
    setPlants(searchedPlants)
  }, [search])
  
  function handleOnPlant(newPlant){
    setPlants([...plants, newPlant])
  }
  
  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <main>
      <NewPlantForm 
      onAddPlant={handleOnPlant}
      />
      <Search search={search}
      handleSearch={handleSearch}
      />
      <PlantList
      plants={plants}
      />
    </main>
  );
}

export default PlantPage;
