export default function DogImage({ image }) {
  console.log("dog image server image");
  return <img src={image} />;
}

export async function getServerSideProps() {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
  const data = await res.json();

  console.log("data: " + data);
  return {
    props: {
      image: data.message,
    },
  };
}
