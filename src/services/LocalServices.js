import Local from './source/Local'

export default {
  login (params) {
    return Local().post('login', params);
  }
}
