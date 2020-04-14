const covid19ImpactEstimator = (data) => {
  const {
    reportedCases,
    timeToElapse,
    periodType,
    totalHospitalBeds,
    region
  } = data;

  let days;
  if (periodType === 'days') {
    days = timeToElapse;
  }
  if (periodType === 'weeks') {
    days = timeToElapse * 7;
  }
  if (periodType === 'months') {
    days = timeToElapse * 30;
  }
  const factor = Math.trunc(days / 3);

  // impact
  const impactCurrentlyInfected = reportedCases * 10;
  const impactInfectionsByRequestedTime = impactCurrentlyInfected * 2 ** factor;
  const casesByRequestedTime = Math.trunc(
    impactInfectionsByRequestedTime * 0.15
  );
  const impactHospitalBedsByRequestedTime = Math.trunc(
    totalHospitalBeds * 0.35 - casesByRequestedTime
  );
  const impactCasesForICUByRequestedTime = Math.trunc(
    impactInfectionsByRequestedTime * 0.05
  );
  // eslint-disable-next-line max-len
  const impactCasesForVentilatorsByRequestedTime = Math.trunc(
    impactInfectionsByRequestedTime * 0.02
  );
  // eslint-disable-next-line max-len
  const impactDollarsInFlight = Math.trunc((impactInfectionsByRequestedTime * region.avgDailyIncomePopulation * region.avgDailyIncomeInUSD) / days);

  // severeImpact
  const severeImpactCurrentlyInfected = reportedCases * 50;
  const severeImpactInfectionsByRequestedTime = severeImpactCurrentlyInfected * 2 ** factor;
  const severeCasesByRequestedTime = Math.trunc(severeImpactInfectionsByRequestedTime * 0.15);
  // eslint-disable-next-line max-len
  const hospitalBedsByRequestedTime = Math.trunc(totalHospitalBeds * 0.35 - severeCasesByRequestedTime);
  const casesForICUByRequestedTime = Math.trunc(
    severeImpactInfectionsByRequestedTime * 0.05
  );
  // eslint-disable-next-line max-len
  const casesForVentilatorsByRequestedTime = Math.trunc(severeImpactInfectionsByRequestedTime * 0.02);
  // eslint-disable-next-line max-len
  const dollarsInFlight = Math.trunc((severeImpactInfectionsByRequestedTime * region.avgDailyIncomePopulation * region.avgDailyIncomeInUSD) / days);

  const impact = {
    currentlyInfected: impactCurrentlyInfected,
    infectionsByRequestedTime: impactInfectionsByRequestedTime,
    severeCasesByRequestedTime: casesByRequestedTime,
    hospitalBedsByRequestedTime: impactHospitalBedsByRequestedTime,
    casesForICUByRequestedTime: impactCasesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime: impactCasesForVentilatorsByRequestedTime,
    dollarsInFlight: impactDollarsInFlight
  };

  const severeImpact = {
    currentlyInfected: severeImpactCurrentlyInfected,
    infectionsByRequestedTime: severeImpactInfectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };

  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
