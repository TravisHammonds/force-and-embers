import React, { useState } from "react";
import AddItem from "./AddItem";
import AddSpell from "./AddSpell";
import AddWeapon from "./AddWeapon";

function Form() {
  const initialFormData = {
    //items
    name: "",
    description: "",
    cost: 1,
    //weapons
    damage: 1,
    damageDice: "",
      //properties
    finesseProperty: false,
    reachProperty: false,
    lightProperty: false,
    versatileProperty: false,
    thrownProperty: false,
    ammunitionProperty: false,
    twoHandedProperty: false,
    specialProperty: false,
    mastery: "",
    //spells
    duration: 1,
    durationBase: "",
    range: 1,
    school: "",
    level: 1,
    castingTime: 1,
    castingTimeBase: "",
  };

  const [inputType, setInputType] = useState();
  const [formData, setFormData] = useState({ ...initialFormData });

  const handleTypeChange = (event) => {
    setFormData({ ...initialFormData });
    setInputType(event.target.value);
  };

  const handleChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFormData({ ...formData, [target.name]: value });
    console.log(formData);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitted that shiiii bruh");
    setFormData({ ...initialFormData });
  };

  return (
    <div className="container mt-4">
      {/* Base Form */}
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label for="type" className="form-label">
            I'm adding a ...
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="type"
            id="type"
            onChange={handleTypeChange}
          >
            <option selected>Select an input type</option>
            <option value="item">Item</option>
            <option value="spell">Spell</option>
            <option value="weapon">Weapon</option>
          </select>
        </div>
        <div>
          {/* Conditional Rendering Here  */}
          {/* If item */}
          {inputType == "item" && (
            <AddItem formData={formData} handleChange={handleChange} />
          )}

          {/* If Spell */}
          {inputType == "spell" && (
            <AddSpell formData={formData} handleChange={handleChange} />
          )}
          {/* If Weapon */}
          {inputType == "weapon" && (
            <AddWeapon formData={formData} handleChange={handleChange} />
          )}
          {/* Submit Button */}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
