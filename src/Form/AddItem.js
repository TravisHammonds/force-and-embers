import React from "react";

function AddItem({handleChange, formData}) {
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
    )
}


export default AddItem;