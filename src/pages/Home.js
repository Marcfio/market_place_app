import react from "react";
import Hero from "../components/Hero";
import "../styles/Home.css";
import CardList from "../components/CardList";

const list = [
    {src:'https://ipfs.io/ipfs/QmQsivwqaXFMLpzCtRLcX5Hwo63eyDnWan27EjTNyDtD7J?filename=ninja_test.jpeg'},
    {src:'https://ipfs.io/ipfs/QmQsivwqaXFMLpzCtRLcX5Hwo63eyDnWan27EjTNyDtD7J?filename=ninja_test.jpeg'},
    {src:'https://ipfs.io/ipfs/QmQsivwqaXFMLpzCtRLcX5Hwo63eyDnWan27EjTNyDtD7J?filename=ninja_test.jpeg'},
    {src:'https://ipfs.io/ipfs/QmQsivwqaXFMLpzCtRLcX5Hwo63eyDnWan27EjTNyDtD7J?filename=ninja_test.jpeg'}
]

const Home = () => {


  return (
    <div id="home">
      <Hero list={list} />

      <p id="card-list-header-text"> Collection </p>
      <div id="list-container">
        <CardList list={list} />
      </div>
    </div>
  );
};

export default Home;
