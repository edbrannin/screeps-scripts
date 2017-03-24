var helpers = require('helpers');

var desired = {
    "harvester": 3,
    "upgrader": 1,
    "builder": 1,
}

var roleSpawn = {
    run: function(spawn) {
        for (var name in desired) {
            if (helpers.wantMoreCreeps(name, desired[name])) {
                roleSpawn.createCreep(spawn, name);
            }
        }
    },
    
    createCreep: function(spawn, role, body) {
        var myBody = body || [MOVE, WORK, CARRY];

        if (spawn.canCreateCreep(myBody) == OK) {
            console.log("Creating %s at %s with body %s", role, spawn.name, myBody);
            spawn.createCreep(myBody, { role: role });
        }
    }
};

module.exports = roleSpawn;
