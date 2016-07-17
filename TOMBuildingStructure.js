"use strict";
define(['require', 'scene'],
  function(require, Scene) {

    class TOMBuildingStructure extends Scene {
      constructor() {
          console.log("Going to Super Scene TOMBuildingStructure");
          var config = {
            "id": "TOMBuildingStructure",
            "groupid": "architecture",
            "languages": ['en-US', 'nl-NL'],
          };
          super(config);
        }
        // You must copy this, else we do not know where we are
      get path() {
        return require.toUrl("./").split('?')[0];
      }
    };

    return new TOMBuildingStructure();

  });
