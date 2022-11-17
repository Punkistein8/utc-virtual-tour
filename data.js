var APP_DATA = {
  "scenes": [
    {
      "id": "0-principal",
      "name": "principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1448,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.050553150952446,
          "pitch": -0.034233944343039724,
          "rotation": 6.283185307179586,
          "target": "1-plantabaja-b"
        },
      ],
      "infoHotspots": []
    },
    {
      "id": "1-plantabaja-b",
      "name": "plantabaja B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1448,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6738391168322497,
          "pitch": -0.0600693369433003,
          "rotation": 0,
          "target": "2-laboratorio3"
        },
        {
          "yaw": -0.7290524188958418,
          "pitch": 0.011584914118630607,
          "rotation": 4.71238898038469,
          "target": "0-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-laboratorio3",
      "name": "laboratorio3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1448,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.081850687165888,
          "pitch": -0.04712604742800508,
          "rotation": 4.71238898038469,
          "target": "1-plantabaja-b"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
