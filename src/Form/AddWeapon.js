import React from "react";

function AddWeapon({ handleChange, formData }) {
  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="m-1">
          {/* Name Input */}
          <label for="name" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="mb-3 form-control"
            id="name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="mb-3">
          {/* Cost Input */}
          <label for="cost" className="form-label">
            Cost
          </label>
          <div className="input-group">
            <input
              name="cost"
              type="text"
              className="form-control"
              id="cost"
              onChange={handleChange}
              value={formData.cost}
            />
            <span className="input-group-text" id="cost-XP">
              XP
            </span>
          </div>
        </div>
        {/* Mastery */}
        <div className="m-1">
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
        {/* Damage */}
        <div>
          <label for="damage" className="form-label m-1">
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
            <span className="input-group-text input-group-select">
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
        </div>
      </div>
      {/* Properties */}
      <label for="property" className="form-label">
        Properties
      </label>
      <div className="row m-2">
        <div className="form-check col-3">
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
        <div className="form-check col-3">
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
        <div className="form-check col-3">
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
        <div className="form-check col-3">
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
      </div>
      <div className="row m-2">
        <div className="form-check col-3">
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
        <div className="form-check col-3">
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
        <div className="form-check col-3">
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
        <div className="form-check col-3">
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
      </div>
      {/* Description Input */}
      <label for="description" className="form-label">
        Description
      </label>
      <textarea
        rows="5"
        cols="40"
        name="description"
        className="form-control"
        id="description"
        onChange={handleChange}
        value={formData.description}
      />
    </div>
  );
}

export default AddWeapon;
