import {connect} from 'react-redux';
import axios from 'axios';
import * as ACTIONS from '@test-redux/dropdown/dropdownActions';
import View from './View';

const api = axios.create({
  timeout: 10000,
  baseURL: 'http://www.emsifa.com/api-wilayah-indonesia/api',
  headers: {
    'access-control-expose-headers': 'WWW-Authenticate,Server-Authorization',
    'content-type': 'application/json; charset=utf-8',
  },
});

function getProvinceThunk() {
  return dispatch => {
    dispatch(ACTIONS.loadProvince({}));
    api
      .get('/provinces.json')
      .then(result => dispatch(ACTIONS.loadProvinceSuccess(result.data)))
      .catch(err => dispatch(ACTIONS.loadProvinceFailed(err)));
  };
}

function getDistrictThunk(provinceId) {
  return dispatch => {
    dispatch(ACTIONS.loadDistrict(provinceId));
    api
      .get(`regencies/${provinceId}.json`)
      .then(result => dispatch(ACTIONS.loadDistrictSuccess(result.data)))
      .catch(err => dispatch(ACTIONS.loadDistrictFailed(err)));
  };
}

// /districts/3672.json

function getSubDistrictThunk(districtId) {
  return dispatch => {
    dispatch(ACTIONS.loadSubDistrict(districtId));
    api
      .get(`districts/${districtId}.json`)
      .then(result => dispatch(ACTIONS.loadSubDistrictSuccess(result.data)))
      .catch(err => dispatch(ACTIONS.loadSubDistrictFailed(err)));
  };
}

function getVillagesThunk(subDistrictId) {
  return dispatch => {
    dispatch(ACTIONS.loadVillage(subDistrictId));
    api
      .get(`villages/${subDistrictId}.json`)
      .then(result => dispatch(ACTIONS.loadVillageSuccess(result.data)))
      .catch(err => dispatch(ACTIONS.loadVillageFailed(err)));
  };
}

function getPostalCodeThunk(villageName, subDistrictName) {
  return dispatch => {
    dispatch(ACTIONS.loadPostalCode(villageName));
    axios
      .get(
        `https://kodepos.vercel.app/search?q=${
          villageName + ' ' + subDistrictName
        }`,
      )
      .then(result => {
        const data = result.data;
        if (data.code === 200) {
          dispatch(ACTIONS.loadPostalCodeSuccess(data.data));
        } else {
          dispatch(ACTIONS.loadPostalCodeFailed(data));
        }
      })
      .catch(err => dispatch(ACTIONS.loadPostalCodeFailed(err)));
  };
}

const mapStateToProps = state => ({
  listProvince: state.dropdown.listProvince,
  listDistrict: state.dropdown.listDistrict,
  listSubDistrict: state.dropdown.listSubDistrict,
  listVillage: state.dropdown.listVillage,
  provinceLoading: state.dropdown.provinceLoading,
  districtLoading: state.dropdown.districtLoading,
  subDistrictLoading: state.dropdown.subDistrictLoading,
  postalCodes: state.dropdown.postalCode,
  dropdownAction: state.dropdown.action,
});

const mapDispatchToProps = {
  getProvince: () => getProvinceThunk(),
  getDistrict: payload => getDistrictThunk(payload),
  getSubDistrict: payload => getSubDistrictThunk(payload),
  getVillage: payload => getVillagesThunk(payload),
  getPostalCode: (payload1, payload2) => getPostalCodeThunk(payload1, payload2),
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
