import React from "react";

function AddItem({ handleChange, formData }) {
  return (
    <div className="mb-3">
      <div className="d-flex">
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
      </div>
      {/* Description Input */}
      <label for="description" className="form-label">
        Description
      </label>
      <textarea
        name="description"
        rows="5"
        cols="40"
        className="mb-3 form-control"
        id="description"
        onChange={handleChange}
        value={formData.description}
      />
    </div>
  );
}

export default AddItem;
