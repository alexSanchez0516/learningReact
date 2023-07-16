import { useParams } from "react-router-dom";

export const Contact = () => {


  const params = useParams();

  console.log(params);
  console.log(params.id);

  console.log("Contact");
  return (
    <>
      <h2>HOLA DESDE CONTACTS</h2>
    </>
  );
}