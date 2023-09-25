import React from "react";

function AddSpell({ formData, handleChange }) {
  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between">
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
        <div className="m-1">
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
        {/* Level  */}
        <div className="m-1">
          <label for="level" className="form-label">
            Level
          </label>
          <div className="mb-3">
            <select
              className="form-select"
              name="level"
              id="level"
              onChange={handleChange}
              value={formData.level}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>
        </div>
        {/* School */}
        <div className="m-1">
          <label for="school" className="form-label">
            School
          </label>
          <div className="mb-3">
            <select
              className="form-select"
              name="school"
              id="school"
              onChange={handleChange}
              value={formData.school}
            >
              <option value="Abjuration">Abjuration</option>
              <option value="Alteration">Alteration</option>
              <option value="Conjuration">Conjuration</option>
              <option value="Divination">Divination</option>
              <option value="Enchantment">Enchantment</option>
              <option value="Evocation">Evocation</option>
              <option value="Illusion">Illusion</option>
              <option value="Necromancy">Necromancy</option>
              <option value="Transmutation">Transmutation</option>
            </select>
          </div>
        </div>
      </div>
      {/* Casting Time */}
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <label for="castingTime" className="form-label">
            Casting Time
          </label>
          <div className="input-group mb-3">
            <input
              name="castingTime"
              type="number"
              className="form-control"
              id="castingTime"
              onChange={handleChange}
              value={formData.castingTime}
            />
            <span className="input-group-text">
              <select
                className="form-select"
                id="castingTimeBase"
                name="castingTimeBase"
                onChange={handleChange}
                value={formData.castingTimeBase}
              >
                <option value="Action(s)">Instantaneous</option>
                <option value="Round(s)">Round(s)</option>
                <option value="Wave(s)">Wave(s)</option>
              </select>
            </span>
          </div>
        </div>
        {/* Range */}
        <div>
          <label for="rangeType" className="form-label">
            Range Type
          </label>
          <div className="mb-3">
            <select
              className="form-select"
              name="rangeType"
              id="rangeType"
              onChange={handleChange}
              value={formData.rangeType}
            >
              <option value="Self">Self</option>
              <option value="Range">Range</option>
              <option value="Sight">Sight</option>
              <option value="Touch">Touch</option>
              <option value="Unlimited">Unlimited</option>
            </select>
          </div>
        </div>
        <div>
          <label for="range" className="form-label">
            Range
          </label>
          <div className="input-group mb-3">
            <input
              name="range"
              type="number"
              className="form-control"
              id="range"
              onChange={handleChange}
              value={formData.range}
            />
            <span className="input-group-text">ft</span>
          </div>
        </div>

        {/* Duration */}
        <div>
        <label for="duration" className="form-label">
          Duration
        </label>
        <div className="input-group mb-3">
          <input
            name="duration"
            type="number"
            className="form-control"
            id="duration"
            onChange={handleChange}
            value={formData.duration}
          />
          <span className="input-group-text">
            <select
              className="form-select"
              id="durationBase"
              name="durationBase"
              onChange={handleChange}
              value={formData.durationBase}
            >
              <option value="Instantaneous">Action(s)</option>
              <option value="Round">Round(s)</option>
              <option value="Wave">Wave(s)</option>
            </select>
          </span>
          </div>
        </div>
      </div>
      <div>
        <div className="form-check">
        <input
          id="concentration"
          className="form-check-input"
          type="checkbox"
          name="concentration"
          onChange={handleChange}
          checked={formData.concentration}
          value="concentration"
        />
        <label for="concentration" className="form-check-label">Concentration</label>
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

export default AddSpell;
