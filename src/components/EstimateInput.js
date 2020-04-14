import React from 'react';

const EstimateInput = () => (
  <div className="columns">
    <div className="col-6 col-sm-10 col-mx-auto">
      <form style={{ marginTop: '30px' }}>
        <div className="form-group">
          <label htmlFor="population" className="form-label">
            Population
          </label>
          <input
            type="number"
            className="form-input"
            id="population"
            data-population="data-population"
          />
        </div>
        <div className="form-group">
          <label htmlFor="timeToElapse" className="form-label">
            Time To Elapse
          </label>
          <input
            type="number"
            className="form-input"
            id="timeToElapse"
            data-time-to-elapse="data-time-to-elapse"
          />
        </div>
        <div className="form-group">
          <label htmlFor="reportedCases" className="form-label">
            Reported Cases
          </label>
          <input
            type="number"
            className="form-input"
            id="reportedCases"
            data-reported-cases="data-reported-cases"
          />
        </div>

        <div className="form-group">
          <label htmlFor="periodType" className="form-label">
            Period Type
          </label>
          <select
            className="form-select"
            id="periodType"
            data-period-type="data-period-type"
          >
            <option>Days</option>
            <option>Weeks</option>
            <option>Months</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="totalHospitalBeds" className="form-label">
            Total Hospital Beds
          </label>
          <input
            type="number"
            className="form-input"
            id="totalHospitalBeds"
            data-total-hospital-beds="data-total-hospital-beds"
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn form-input"
            data-go-estimate="data-go-estimate"
            style={{ background: '#2d4f64', color: '#FFF', marginTop: '25px' }}
          >
            Estimate
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default EstimateInput;
