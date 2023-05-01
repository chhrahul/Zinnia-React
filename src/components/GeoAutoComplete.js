import { useRef, useEffect } from "react";
const GeoAutoComplete = () => {
  const autoCompleteRef = useRef();

  const inputRef = useRef();
  const options = {
    componentRestrictions: { country: "ng" },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"]
  };
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
  }, []);
  return (
    <>
      <div>
        <label>enter address :</label>
        {console.log(inputRef)}
        <input ref={inputRef} className="form-control" />
      </div>
    </>
  )
}

export default GeoAutoComplete
