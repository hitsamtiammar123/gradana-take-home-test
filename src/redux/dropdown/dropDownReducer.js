import * as CONST from './dropDownConstants';

const dropDownInitialStates = {
  listProvince: [],
  listDistrict: [],
  listSubDistrict: [],
  listVillage: [],
  provinceParams: {},
  provinceLoading: false,
  districtParam: {},
  districtLoading: false,
  subDistrictParam: {},
  subDistrictLoading: false,
  villageParam: {},
  villageLoading: false,
  provinceError: {},
  districtError: {},
  subDistrictError: {},
  villageError: {},
  postalCode: [],
  postalCodeLoading: false,
  postalCodeParam: {},
  postalCodeError: {},
  action: '',
};

export default function reducer(state = dropDownInitialStates, action) {
  const {payload, type} = action;
  switch (type) {
    case CONST.LOAD_PROVINCE:
      return {
        ...state,
        listProvince: [],
        provinceParams: payload,
        provinceLoading: true,
        action: type,
      };
    case CONST.LOAD_PROVINCE_SUCCESS:
      return {
        ...state,
        listProvince: payload,
        listSubDistrict: [],
        listVillage: [],
        provinceLoading: false,
        action: type,
      };
    case CONST.LOAD_PROVINCE_FAILED:
      return {
        ...state,
        provinceError: payload,
        provinceLoading: false,
        action: type,
      };
    case CONST.LOAD_DISTRICT:
      return {
        ...state,
        districtParam: payload,
        districtLoading: true,
        action: type,
      };
    case CONST.LOAD_DISTRICT_SUCCESS:
      return {
        ...state,
        listDistrict: payload,
        districtLoading: false,
        listVillage: [],
        action: type,
      };
    case CONST.LOAD_DISTRICT_FAILED:
      return {
        ...state,
        districtError: payload,
        districtLoading: false,
        action: type,
      };
    case CONST.LOAD_SUB_DISTRICT:
      return {
        ...state,
        subDistrictLoading: true,
        subDistrictParam: payload,
        action: type,
      };
    case CONST.LOAD_SUB_DISTRICT_SUCCESS:
      return {
        ...state,
        listSubDistrict: payload,
        subDistrictLoading: false,
        action: type,
      };
    case CONST.LOAD_SUB_DISTRICT_FAILED:
      return {
        ...state,
        subDistrictError: payload,
        subDistrictLoading: false,
        action: type,
      };
    case CONST.LOAD_VILLAGE:
      return {
        ...state,
        villageLoading: true,
        villageParam: payload,
        action: type,
      };
    case CONST.LOAD_VILLAGE_SUCCESS:
      return {
        ...state,
        villageLoading: false,
        listVillage: payload,
        action: type,
      };
    case CONST.LOAD_VILLAGE_FAILED:
      return {
        ...state,
        villageLoading: false,
        villageError: payload,
        action: type,
      };
    case CONST.LOAD_POSTAL_CODE:
      return {
        ...state,
        postalCodeLoading: true,
        postalCodeParam: payload,
        action: type,
      };
    case CONST.LOAD_POSTAL_CODE_SUCCESS:
      return {
        ...state,
        postalCodeLoading: false,
        postalCode: payload,
        action: type,
      };
    case CONST.LOAD_POSTAL_CODE_FAILED:
      return {
        ...state,
        postalCodeLoading: false,
        postalCodeError: payload,
        action: type,
      };
    default:
  }
  return state;
}
