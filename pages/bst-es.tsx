import { useEffect } from "react";

const Bst = ({ allPokemons }) => {
  useEffect(() => {
    console.log(window.location.search);
    let params = new URL(document.location).searchParams;
    console.log("geolocation")
    console.log(params);
    console.log(allPokemons);
   
  }, []);

  return <>ioerfipefrl</>;
};

export async function getStaticProps() {
  // Call the fetch method and passing
  // the pokeAPI link
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");

  // Parse the JSON
  const data = await response.json();

  // Finally we return the result
  // inside props as allPokemons
  return {
    props: { allPokemons: data.results },
  };
}

export default Bst;
