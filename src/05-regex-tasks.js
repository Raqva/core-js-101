function getRegexForGuid() {
  const reg = /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/;
  return reg;
}
function getRegexForPitSpot() {
  const reg = /^[a-z]{1}[a-z ]{0,10}[b-qs-w]{1}[a-z]{1}$/;
  return reg;
}
function getPasswordValidator() {
  throw new Error('Not implemented');
}


module.exports = {
  getRegexForGuid,
  getRegexForPitSpot,
  getPasswordValidator,
};
