
function IdNowPlugin() {

}
//Send Data Plugin
IdNowPlugin.prototype.sendData = function (dataToSend, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, 'IdNowPlugin', 'START_IDENT',[dataToSend]);
};

IdNowPlugin.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.idNow = new IdNowPlugin();
  return window.plugins.idNow;
};

cordova.addConstructor(IdNowPlugin.install);


