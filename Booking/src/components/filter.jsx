import { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../context/dataContext";
import Form from "react-bootstrap/Form";



function Filter(props) {
    const inputRef = useRef()
  const ctx = useContext(DataContext);
  const [types, settypes] = useState();
  const [uniqueTypes, setUniqueTypes] = useState([]);

 

  useEffect(() => {
    settypes(ctx.HotelAPI.map((items) => items.type));
    setUniqueTypes([...new Set(types)]);
  }, [ctx.HotelAPI, types,uniqueTypes]);
  

  const handlerTaggle = (item,index) => {
    props.handleFilter(item)
    console.log(index);
  };

  return (
    <Form className="mt-5 border px-3 py-2 rounded-4">
      <h6 className="mb-3">Popular Filters</h6>
      {uniqueTypes.map((items,index) => (
        <Form.Check
          onChange={() => handlerTaggle(items,index)}
          type="switch"
          label={items}
          className="mt-2"
        />
      ))}
    </Form>
  );
}

export default Filter;


//CheckBoxes
// const checkBoxLabel = [
//   { _id: 1, name: "Boutique" },
//   { _id: 2, name: "Luxury" },
// ];

// const Filter = () => {
//     const ctx = useContext(DataContext)
//     const [isCheckedBoutique, setIsCheckedBoutique] = useState(false)
//     const [isCheckedLuxury, setIsCheckedLuxury] = useState(false)
//     const BoutiqueHandler =()=>{
//         setIsCheckedBoutique(!isCheckedBoutique)
//         ctx.setHotels(ctx.hotels.filter((items) => items.city === 'Amsterdam'))
//     }

//     const LuxuryHandler =()=>{}
//   return (
//     <div className="mt-5 border px-3 py-2 rounded-4">
//         <h6 className="mb-3">Popular Filters</h6>
//       <input className="me-3" type="checkbox" id='Boutique' checked={isCheckedBoutique} onChange={BoutiqueHandler}/>
//       <label htmlFor="Boutique">Boutique</label>
//       <br />
//       <input className="me-3 mt-3" type="checkbox" id='Luxury' checked={isCheckedLuxury} onChange={LuxuryHandler}/>
//       <label htmlFor="Luxury">Luxury</label>
//     </div>
//   );
// };

// export default Filter;
