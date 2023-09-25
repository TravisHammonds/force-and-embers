import React from "react";

function AddWeapon({ handleChange, formData }) {
  return (
    <div className="mb-3">
      {/* Name Input */}
      <label for="name" className="form-label">
        Name
      </label>
      <input
        name="name"
        type="text"
        className="form-control"
        id="name"
        onChange={handleChange}
        value={formData.name}
      />
      {/* Description Input */}
      <label for="description" className="form-label">
        Description
      </label>
      <textarea
        name="description"
        className="form-control"
        id="description"
        onChange={handleChange}
        value={formData.description}
      />
      {/* Cost Input */}
      <label for="cost" className="form-label">
        Cost
      </label>
      <div className="input-group mb-3">
        <input
          name="cost"
          type="number"
          className="form-control"
          id="cost"
          onChange={handleChange}
          value={formData.cost}
        />
        <span className="input-group-text" id="cost-XP">
          XP
        </span>
      </div>
      {/* Damage */}
      <label for="damage" className="form-label">
        Damage
      </label>
      <div className="input-group mb-3">
        <input
          name="damage"
          type="number"
          className="form-control"
          id="damage"
          onChange={handleChange}
          value={formData.damage}
        />
        <span className="input-group-text">
          <select
            className="form-select"
            id="damageDice"
            name="damageDice"
            onChange={handleChange}
            value={formData.damageDice}
          >
            <option value="d4<">d4</option>
            <option value="d6">d6</option>
            <option value="d8">d8</option>
            <option value="d10">d10</option>
            <option value="d12">d12</option>
          </select>
        </span>
      </div>
      {/* Properties */}
      <label for="property" className="form-label">
        Properties
      </label>
      <div className="form-check">
        <input
          id="lightProperty"
          className="form-check-input"
          type="checkbox"
          name="lightProperty"
          onChange={handleChange}
          checked={formData.lightProperty}
          value="lightProperty"
        />
        <label className="form-check-label">Light</label>
      </div>
      <div className="form-check">
        <input
          id="finesseProperty"
          className="form-check-input"
          type="checkbox"
          name="finesseProperty"
          onChange={handleChange}
          checked={formData.finesseProperty}
          value="finesseProperty"
        />
        <label className="form-check-label">Finesse</label>
      </div>
      <div className="form-check">
        <input
          id="versatileProperty"
          className="form-check-input"
          type="checkbox"
          name="versatileProperty"
          onChange={handleChange}
          checked={formData.versatileProperty}
          value="versatileProperty"
        />
        <label className="form-check-label">Versatile</label>
      </div>
      <div className="form-check">
        <input
          id="thrownProperty"
          className="form-check-input"
          type="checkbox"
          name="thrownProperty"
          onChange={handleChange}
          checked={formData.thrownProperty}
          value="thrownProperty"
        />
        <label className="form-check-label">Thrown</label>
      </div>
      <div className="form-check">
        <input
          id="ammunitionProperty"
          className="form-check-input"
          type="checkbox"
          name="ammunitionProperty"
          onChange={handleChange}
          checked={formData.ammunitionProperty}
          value="ammunitionProperty"
        />
        <label className="form-check-label">Ammunition</label>
      </div>
      <div className="form-check">
        <input
          id="reachProperty"
          className="form-check-input"
          type="checkbox"
          name="reachProperty"
          onChange={handleChange}
          checked={formData.reachProperty}
          value="reachProperty"
        />
        <label className="form-check-label">Reach</label>
      </div>
      <div className="form-check">
        <input
          id="twoHandedProperty"
          className="form-check-input"
          type="checkbox"
          name="twoHandedProperty"
          onChange={handleChange}
          checked={formData.twoHandedProperty}
          value="twoHandedProperty"
        />
        <label className="form-check-label">Two-Handed</label>
      </div>
      <div className="form-check">
        <input
          id="specialProperty"
          className="form-check-input"
          type="checkbox"
          name="specialProperty"
          onChange={handleChange}
          checked={formData.specialProperty}
          value="specialProperty"
        />
        <label className="form-check-label">Special</label>
      </div>

      {/* Mastery */}
      <label for="mastery" className="form-label">
        Mastery
      </label>
      <div className="mb-3">
        <select
          className="form-select"
          name="mastery"
          id="mastery"
          onChange={handleChange}
          value={formData.mastery}
        >
          <option value="Cleave">Cleave</option>
          <option value="Flex;">Flex</option>
          <option value="Graze">Graze</option>
          <option value="Nick">Nick</option>
          <option value="Push">Push</option>
          <option value="Sap">Sap</option>
          <option value="Slow">Slow</option>
          <option value="Topple">Topple</option>
          <option value="Vex">Vex</option>
        </select>
      </div>
    </div>
  );
}

export default AddWeapon;
