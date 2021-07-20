import * as CONST from './dropDownConstants';

export const loadProvince = payload => ({
  payload,
  type: CONST.LOAD_PROVINCE,
});

export const loadProvinceSuccess = payload => ({
  payload,
  type: CONST.LOAD_PROVINCE_SUCCESS,
});

export const loadProvinceFailed = payload => ({
  payload,
  type: CONST.LOAD_PROVINCE_FAILED,
});

export const loadDistrict = payload => ({
  payload,
  type: CONST.LOAD_DISTRICT,
});

export const loadDistrictSuccess = payload => ({
  payload,
  type: CONST.LOAD_DISTRICT_SUCCESS,
});

export const loadDistrictFailed = payload => ({
  payload,
  type: CONST.LOAD_DISTRICT_FAILED,
});

export const loadSubDistrict = payload => ({
  payload,
  type: CONST.LOAD_SUB_DISTRICT,
});

export const loadSubDistrictSuccess = payload => ({
  payload,
  type: CONST.LOAD_SUB_DISTRICT_SUCCESS,
});

export const loadSubDistrictFailed = payload => ({
  payload,
  type: CONST.LOAD_SUB_DISTRICT_FAILED,
});

export const loadVillage = payload => ({
  payload,
  type: CONST.LOAD_VILLAGE,
});

export const loadVillageSuccess = payload => ({
  payload,
  type: CONST.LOAD_VILLAGE_SUCCESS,
});

export const loadVillageFailed = payload => ({
  payload,
  type: CONST.LOAD_VILLAGE_FAILED,
});

export const loadPostalCode = payload => ({
  payload,
  type: CONST.LOAD_POSTAL_CODE,
});

export const loadPostalCodeSuccess = payload => ({
  payload,
  type: CONST.LOAD_POSTAL_CODE_SUCCESS,
});

export const loadPostalCodeFailed = payload => ({
  payload,
  type: CONST.LOAD_POSTAL_CODE_FAILED,
});
