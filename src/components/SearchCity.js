import React from 'react'

const SearchCity = (props) => (
  <div className="row" style={{ marginBottom: 30 }}>
    <div className="col">
      <h3>Search City</h3>
      <div className="card">
        <div className="card-body">
          <div className="form-row">
            <div className="col-md-10">
              <input
                  className="form-control mb-2"
                  type="text"
                  placeholder="Type keyword or city name"
                  value={props.value}
                  onChange={props.onChange}
              />
            </div>
            <div className="col-md-2">
              <button
                className="btn btn-primary btn-block"
                type="button"
                onClick={props.onClickSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SearchCity