const THREE = require('three/build/three.min');

let images = [],
  points = [];
const imagesShouldLoad = [
  (new Image()).src = './images/room0/px.jpg',
  (new Image()).src = './images/room0/nx.jpg',
  (new Image()).src = './images/room0/py.jpg',
  (new Image()).src = './images/room0/ny.jpg',
  (new Image()).src = './images/room0/pz.jpg',
  (new Image()).src = './images/room0/nz.jpg',
  (new Image()).src = './images/room1/px.jpg',
  (new Image()).src = './images/room1/nx.jpg',
  (new Image()).src = './images/room1/py.jpg',
  (new Image()).src = './images/room1/ny.jpg',
  (new Image()).src = './images/room1/pz.jpg',
  (new Image()).src = './images/room1/nz.jpg',
  (new Image()).src = './images/room2/px.jpg',
  (new Image()).src = './images/room2/nx.jpg',
  (new Image()).src = './images/room2/py.jpg',
  (new Image()).src = './images/room2/ny.jpg',
  (new Image()).src = './images/room2/pz.jpg',
  (new Image()).src = './images/room2/nz.jpg'
];
const hashChangeCustomHandler = () => {
  switch (location.hash) {
    case '#room1':
      images = [
        './images/room1/px.jpg',
        './images/room1/nx.jpg',
        './images/room1/py.jpg',
        './images/room1/ny.jpg',
        './images/room1/pz.jpg',
        './images/room1/nz.jpg'
      ];
      points = [
        {
          url: '#room0',
          position: [-496, -100, -300],
          rotation: [0, Math.PI / 2, 0]
        }
      ];
      break;
    case '#room2':
      images = [
        './images/room2/px.jpg',
        './images/room2/nx.jpg',
        './images/room2/py.jpg',
        './images/room2/ny.jpg',
        './images/room2/pz.jpg',
        './images/room2/nz.jpg'
      ];
      points = [
        {
          url: '#room0',
          position: [496, -100, 496],
          rotation: [0, Math.PI, 0]
        }
      ];
      break;
    default:
      images = [
        './images/room0/px.jpg',
        './images/room0/nx.jpg',
        './images/room0/py.jpg',
        './images/room0/ny.jpg',
        './images/room0/pz.jpg',
        './images/room0/nz.jpg'
      ];
      points = [
        {
          url: '#room1',
          position: [190, -100, -496],
          rotation: [0, 0, 0]
        },
        {
          url: '#room2',
          position: [496, -200, -250],
          rotation: [0, -Math.PI / 2, 0]
        }
      ];
      break;
  }
};
hashChangeCustomHandler();

// Device Orientation Control
THREE.DeviceOrientationControls = function(object) {
  const scope = this;
  this.object = object;
  this.object.rotation.reorder('YXZ');
  this.enabled = true;
  this.deviceOrientation = {};
  this.screenOrientation = 0;
  this.alphaOffset = 0;

  const onDeviceOrientationChangeEvent = event => {
    scope.deviceOrientation = event;
  };

  const onScreenOrientationChangeEvent = () => {
    scope.screenOrientation = window.orientation || 0;
  };

  const setObjectQuaternion = (THREE => {
    const zee = new THREE.Vector3(0, 0, 1);
    const euler = new THREE.Euler();
    const q0 = new THREE.Quaternion();
    const q1 = new THREE.Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5));
    return (quaternion, alpha, beta, gamma, orient) => {
      euler.set(beta, alpha, -gamma, 'YXZ');
      quaternion.setFromEuler(euler);
      quaternion.multiply(q1);
      quaternion.multiply(q0.setFromAxisAngle(zee, -orient));
    };
  })(THREE);

  this.connect = () => {
    onScreenOrientationChangeEvent();
    window.addEventListener(
      'orientationchange',
      onScreenOrientationChangeEvent,
      false
    );
    window.addEventListener(
      'deviceorientation',
      onDeviceOrientationChangeEvent,
      false
    );
    scope.enabled = true;
  };

  this.disconnect = () => {
    window.removeEventListener(
      'orientationchange',
      onScreenOrientationChangeEvent,
      false
    );
    window.removeEventListener(
      'deviceorientation',
      onDeviceOrientationChangeEvent,
      false
    );
    scope.enabled = false;
  };

  this.update = () => {
    if (scope.enabled === false) return;
    const device = scope.deviceOrientation;
    if (device) {
      const alpha = device.alpha
        ? THREE.Math.degToRad(device.alpha) + scope.alphaOffset
        : 0;
      const beta = device.beta ? THREE.Math.degToRad(device.beta) : 0;
      const gamma = device.gamma ? THREE.Math.degToRad(device.gamma) : 0;
      const orient = scope.screenOrientation
        ? THREE.Math.degToRad(scope.screenOrientation)
        : 0;
      setObjectQuaternion(scope.object.quaternion, alpha, beta, gamma, orient);
      return device.alpha || device.beta || device.gamma;
    }
  };

  this.dispose = scope.disconnect;

  this.connect();
};

// CSS3D Renderer
THREE.CSS3DObject = function(element) {
  THREE.Object3D.call(this);

  this.element = element;
  this.element.style.position = 'absolute';

  this.addEventListener('removed', () => {
    if (this.element.parentNode !== null) {
      this.element.parentNode.removeChild(this.element);
    }
  });
};

THREE.CSS3DObject.prototype = Object.create(THREE.Object3D.prototype);
THREE.CSS3DObject.prototype.constructor = THREE.CSS3DObject;

THREE.CSS3DSprite = function(element) {
  THREE.CSS3DObject.call(this, element);
};

THREE.CSS3DSprite.prototype = Object.create(THREE.CSS3DObject.prototype);
THREE.CSS3DSprite.prototype.constructor = THREE.CSS3DSprite;

THREE.CSS3DRenderer = function() {
  let _width, _height;
  let _widthHalf, _heightHalf;

  const matrix = new THREE.Matrix4();

  const cache = {
    camera: { fov: 0, style: '' },
    objects: new WeakMap()
  };

  const domElement = document.createElement('div');
  domElement.style.overflow = 'hidden';

  this.domElement = domElement;

  const cameraElement = document.createElement('div');

  cameraElement.style.transformStyle = 'preserve-3d';

  domElement.appendChild(cameraElement);

  const isIE = /Trident/i.test(navigator.userAgent);

  this.getSize = () => ({
    width: _width,
    height: _height
  });

  this.setSize = (width, height) => {
    _width = width;
    _height = height;
    _widthHalf = _width / 2;
    _heightHalf = _height / 2;

    domElement.style.width = `${width}px`;
    domElement.style.height = `${height}px`;

    cameraElement.style.width = `${width}px`;
    cameraElement.style.height = `${height}px`;
  };

  function epsilon(value) {
    return Math.abs(value) < 1e-10 ? 0 : value;
  }

  function getCameraCSSMatrix(matrix) {
    const elements = matrix.elements;

    return (
      'matrix3d(' +
      epsilon(elements[0]) +
      ',' +
      epsilon(-elements[1]) +
      ',' +
      epsilon(elements[2]) +
      ',' +
      epsilon(elements[3]) +
      ',' +
      epsilon(elements[4]) +
      ',' +
      epsilon(-elements[5]) +
      ',' +
      epsilon(elements[6]) +
      ',' +
      epsilon(elements[7]) +
      ',' +
      epsilon(elements[8]) +
      ',' +
      epsilon(-elements[9]) +
      ',' +
      epsilon(elements[10]) +
      ',' +
      epsilon(elements[11]) +
      ',' +
      epsilon(elements[12]) +
      ',' +
      epsilon(-elements[13]) +
      ',' +
      epsilon(elements[14]) +
      ',' +
      epsilon(elements[15]) +
      ')'
    );
  }

  function getObjectCSSMatrix(matrix, cameraCSSMatrix) {
    const elements = matrix.elements;
    const matrix3d =
      'matrix3d(' +
      epsilon(elements[0]) +
      ',' +
      epsilon(elements[1]) +
      ',' +
      epsilon(elements[2]) +
      ',' +
      epsilon(elements[3]) +
      ',' +
      epsilon(-elements[4]) +
      ',' +
      epsilon(-elements[5]) +
      ',' +
      epsilon(-elements[6]) +
      ',' +
      epsilon(-elements[7]) +
      ',' +
      epsilon(elements[8]) +
      ',' +
      epsilon(elements[9]) +
      ',' +
      epsilon(elements[10]) +
      ',' +
      epsilon(elements[11]) +
      ',' +
      epsilon(elements[12]) +
      ',' +
      epsilon(elements[13]) +
      ',' +
      epsilon(elements[14]) +
      ',' +
      epsilon(elements[15]) +
      ')';

    if (isIE) {
      return `translate(-50%,-50%)translate(${_widthHalf}px,${_heightHalf}px)${cameraCSSMatrix}${matrix3d}`;
    }

    return `translate(-50%,-50%)${matrix3d}`;
  }

  function renderObject(object, camera, cameraCSSMatrix) {
    if (object instanceof THREE.CSS3DObject) {
      let style;

      if (object instanceof THREE.CSS3DSprite) {
        matrix.copy(camera.matrixWorldInverse);
        matrix.transpose();
        matrix.copyPosition(object.matrixWorld);
        matrix.scale(object.scale);
        matrix.elements[3] = 0;
        matrix.elements[7] = 0;
        matrix.elements[11] = 0;
        matrix.elements[15] = 1;
        style = getObjectCSSMatrix(matrix, cameraCSSMatrix);
      } else {
        style = getObjectCSSMatrix(object.matrixWorld, cameraCSSMatrix);
      }

      const element = object.element;
      const cachedStyle = cache.objects.get(object);

      if (cachedStyle === undefined || cachedStyle !== style) {
        element.style.transform = style;

        const objectData = { style: style };

        if (isIE) {
          objectData.distanceToCameraSquared = getDistanceToSquared(
            camera,
            object
          );
        }

        cache.objects.set(object, objectData);
      }

      if (element.parentNode !== cameraElement) {
        cameraElement.appendChild(element);
      }
    }

    for (let i = 0, l = object.children.length; i < l; i++) {
      renderObject(object.children[i], camera, cameraCSSMatrix);
    }
  }

  const getDistanceToSquared = (() => {
    const a = new THREE.Vector3();
    const b = new THREE.Vector3();

    return (object1, object2) => {
      a.setFromMatrixPosition(object1.matrixWorld);
      b.setFromMatrixPosition(object2.matrixWorld);

      return a.distanceToSquared(b);
    };
  })();

  function filterAndFlatten(scene) {
    const result = [];

    scene.traverse(object => {
      if (object instanceof THREE.CSS3DObject) result.push(object);
    });

    return result;
  }

  function zOrder(scene) {
    const sorted = filterAndFlatten(scene).sort((a, b) => {
      const distanceA = cache.objects.get(a).distanceToCameraSquared;
      const distanceB = cache.objects.get(b).distanceToCameraSquared;

      return distanceA - distanceB;
    });

    const zMax = sorted.length;

    for (let i = 0, l = sorted.length; i < l; i++) {
      sorted[i].element.style.zIndex = zMax - i;
    }
  }

  this.render = (scene, camera) => {
    const fov = camera.projectionMatrix.elements[5] * _heightHalf;

    if (cache.camera.fov !== fov) {
      if (camera.isPerspectiveCamera) {
        domElement.style.perspective = `${fov}px`;
      }

      cache.camera.fov = fov;
    }

    scene.updateMatrixWorld();

    if (camera.parent === null) camera.updateMatrixWorld();

    const cameraCSSMatrix = camera.isOrthographicCamera
      ? `scale(${fov})${getCameraCSSMatrix(camera.matrixWorldInverse)}`
      : `translateZ(${fov}px)${getCameraCSSMatrix(camera.matrixWorldInverse)}`;

    const style = `${cameraCSSMatrix}translate(${_widthHalf}px,${_heightHalf}px)`;

    if (cache.camera.style !== style && !isIE) {
      cameraElement.style.transform = style;

      cache.camera.style = style;
    }

    renderObject(scene, camera, cameraCSSMatrix);

    if (isIE) {
      zOrder(scene);
    }
  };
};

// Main Script
const target = new THREE.Vector3();
let camera,
  scene,
  renderer,
  controls,
  lon = -90,
  lat = 0,
  phi = 0,
  theta = 0,
  touchX,
  touchY;
init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  scene = new THREE.Scene();
  controls = new THREE.DeviceOrientationControls(camera);
  const sides = [
    {
      url: images[0],
      position: [-512, 0, 0],
      rotation: [0, Math.PI / 2, 0]
    },
    {
      url: images[1],
      position: [512, 0, 0],
      rotation: [0, -Math.PI / 2, 0]
    },
    {
      url: images[2],
      position: [0, 512, 0],
      rotation: [Math.PI / 2, 0, Math.PI]
    },
    {
      url: images[3],
      position: [0, -512, 0],
      rotation: [-Math.PI / 2, 0, Math.PI]
    },
    {
      url: images[4],
      position: [0, 0, 512],
      rotation: [0, Math.PI, 0]
    },
    {
      url: images[5],
      position: [0, 0, -512],
      rotation: [0, 0, 0]
    }
  ];
  const cube = new THREE.Object3D();
  scene.add(cube);
  for (let i = sides.length - 1; i > -1; i--) {
    const side = sides[i];
    const element = document.createElement('img');
    element.width = 1028;
    element.src = side.url;
    const object = new THREE.CSS3DObject(element);
    object.position.fromArray(side.position);
    object.rotation.fromArray(side.rotation);
    cube.add(object);
  }
  for (let i = points.length - 1; i > -1; i--) {
    const point = points[i];
    const element = document.createElement('a');
    element.className = 'arrow';
    element.href = point.url;
    const object = new THREE.CSS3DObject(element);
    object.position.fromArray(point.position);
    object.rotation.fromArray(point.rotation);
    cube.add(object);
  }
  renderer = new THREE.CSS3DRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  document.addEventListener('mousedown', onDocumentMouseDown, false);
  document.addEventListener('wheel', onDocumentMouseWheel, false);
  document.addEventListener('touchstart', onDocumentTouchStart, false);
  document.addEventListener('touchmove', onDocumentTouchMove, false);
  window.addEventListener('resize', onWindowResize, false);
}

function onDocumentMouseDown(event) {
  event.preventDefault();
  document.addEventListener('mousemove', onDocumentMouseMove, false);
  document.addEventListener('mouseup', onDocumentMouseUp, false);
}

function onDocumentMouseMove(event) {
  const movementX = event.movementX || 0;
  const movementY = event.movementY || 0;
  lon -= movementX * 0.1;
  lat += movementY * 0.1;
}

function onDocumentMouseUp() {
  document.removeEventListener('mousemove', onDocumentMouseMove);
  document.removeEventListener('mouseup', onDocumentMouseUp);
}

function onDocumentMouseWheel(event) {
  const fov = camera.fov + event.deltaY * 0.05;
  camera.fov = THREE.Math.clamp(fov, 10, 75);
  camera.updateProjectionMatrix();
}

function onDocumentTouchStart(event) {
  event.preventDefault();
  const touch = event.touches[0];
  touchX = touch.screenX;
  touchY = touch.screenY;
}

function onDocumentTouchMove(event) {
  event.preventDefault();
  const touch = event.touches[0];
  lon -= (touch.screenX - touchX) * 0.1;
  lat += (touch.screenY - touchY) * 0.1;
  touchX = touch.screenX;
  touchY = touch.screenY;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  if (!controls.update()) {
    const degToRad = THREE.Math.degToRad;
    lat = Math.max(-85, Math.min(85, lat));
    phi = degToRad(90 - lat);
    theta = degToRad(lon);
    target.x = Math.sin(phi) * Math.cos(theta);
    target.y = Math.cos(phi);
    target.z = Math.sin(phi) * Math.sin(theta);
    camera.lookAt(target);
  }
  renderer.render(scene, camera);
}

const hashChangeHandler = () => {
  const body = document.body;
  body.removeChild(body.lastChild);
  hashChangeCustomHandler();
  init();
};

window.addEventListener('hashchange', hashChangeHandler, false);
