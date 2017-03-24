/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('helpers');
 * mod.thing == 'a thing'; // true
 */

var helpers = {
    creepsWithRole: function(role) {
        return _(Game.creeps).filter({ memory: { role: role }}).value();
    },
    
    wantMoreCreeps: function(role, desired) {
        const current = helpers.creepsWithRole(role).length;
        const answer = current < desired;
        //console.log("Want more", role, "? -- ", current, "<", desired, " == ", answer);
        return answer;
    }
};

module.exports = helpers;
