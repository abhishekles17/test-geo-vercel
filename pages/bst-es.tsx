import { useEffect } from "react";

const Bst = ({ }) => {
  useEffect(() => {
    console.log(window.location.search);
    const doc = document.cookie;
    console.log(doc)
    alert(doc)
    // let params = new URL(doc.location).searchParams;
    // console.log("geolocation")
    // console.log(params);
    // console.log(allPokemons);
   
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
