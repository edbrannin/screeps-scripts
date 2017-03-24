var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleSpawn = require('role.spawn');
var helpers = require('helpers');

module.exports.loop = function () {
    //console.log("loop!");
    for (var name in Game.spawns) {
        var spawn = Game.spawns[name];
        //console.log("Spawn.");
        roleSpawn.run(spawn);
    };
    
    for (var name in Game.structures) {
        var structure = Game.structures[name];
        if (structure instanceof StructureTower) {
            roleTower.run(spawn);
        }
    };

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        } else if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        } else if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        } else {
            const oldRole = creep.memory.role;
            creep.memory.role = 'harvester';
            console.log("Creeper promotion:", name, "is now:", creep.memory.role, "(was:", oldRole, ")");
        }
    }
}
