THREE.DeviceOrientationControls = function (object) {
  const scope = this;
  this.object = object;
  this.object.rotation.reorder('YXZ');
  this.enabled = true;
  this.deviceOrientation = {};
  this.screenOrientation = 0;
  this.alphaOffset = 0; // radians

  const onDeviceOrientationChangeEvent = function (event) {
    scope.deviceOrientation = event;
  };

  const onScreenOrientationChangeEvent = function () {
    scope.screenOrientation = window.orientation || 0;
  };

  // The angles alpha, beta and gamma form a set of intrinsic Tait-Bryan angles of type Z-X'-Y''

  const setObjectQuaternion = function () {
    const zee = new THREE.Vector3(0, 0, 1);
    const euler = new THREE.Euler();
    const q0 = new THREE.Quaternion();
    const q1 = new THREE.Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5)); // - PI/2 around the x-axis
    return function (quaternion, alpha, beta, gamma, orient) {
      euler.set(beta, alpha, -gamma, 'YXZ'); // 'ZXY' for the device, but 'YXZ' for us
      quaternion.setFromEuler(euler); // orient the device
      quaternion.multiply(q1); // camera looks out the back of the device, not the top
      quaternion.multiply(q0.setFromAxisAngle(zee, -orient)); // adjust for screen orientation
    };
  }();

  this.connect = function () {
    onScreenOrientationChangeEvent(); // run once on load
    window.addEventListener('orientationchange', onScreenOrientationChangeEvent, false);
    window.addEventListener('deviceorientation', onDeviceOrientationChangeEvent, false);
    scope.enabled = true;
  };

  this.disconnect = function () {
    window.removeEventListener('orientationchange', onScreenOrientationChangeEvent, false);
    window.removeEventListener('deviceorientation', onDeviceOrientationChangeEvent, false);
    scope.enabled = false;
  };

  this.update = function () {
    if (scope.enabled === false) return;
    const device = scope.deviceOrientation;
    if (device) {
      const alpha = device.alpha ? THREE.Math.degToRad(device.alpha) + scope.alphaOffset : 0; // Z
      const beta = device.beta ? THREE.Math.degToRad(device.beta) : 0; // X'
      const gamma = device.gamma ? THREE.Math.degToRad(device.gamma) : 0; // Y''
      const orient = scope.screenOrientation ? THREE.Math.degToRad(scope.screenOrientation) : 0; // O
      setObjectQuaternion(scope.object.quaternion, alpha, beta, gamma, orient);
      return device.alpha || device.beta || device.gamma;
    }
  };

  this.dispose = function () {
    scope.disconnect();
  };

  this.connect();
};
