import React from "react";

function AddSpell({ formData, handleChange }) {
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
      {/* Duration */}
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
            <option value="Instantaneous">Instantaneous</option>
            <option value="Round">Round(s)</option>
            <option value="Wave">Wave(s)</option>
          </select>
        </span>
      </div>
      {/* Range */}
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
      {/* School */}
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
      {/* Level  */}
      <label for="level" className="form-label">
        Level
      </label>
      <div className="mb-3">
        <input
          name="level"
          type="number"
          className="form-control"
          id="level"
          onChange={handleChange}
          value={formData.level}
        />
      </div>
      {/* Casting Time */}
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
            <option value="Action(s)">Action(s)</option>
            <option value="Reaction">Reaction</option>
          </select>
        </span>
      </div>
    </div>
  );
}

export default AddSpell;
