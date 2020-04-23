
function IdNowPlugin() {
alert("Plugin Loaded");
}
//Send Data Plugin
IdNowPlugin.prototype.sendData = function (dataToSend, successCallback, errorCallback) {
alert("Method Called");
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


