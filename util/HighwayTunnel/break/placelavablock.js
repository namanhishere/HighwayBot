const Vec3 = require('vec3').Vec3
    , log = require('../../console/console.js')
    , edit = require('../../console/edit')
    , mineflayer = require('mineflayer')
    , status = require('../../console/status.json')

/**
 * 
 * @param {mineflayer.Bot} bot 
 */
module.exports = async (bot) => {
    bot.equip(87, 'hand')
    for (let x = 1; x <= 4; x++) {
        for (let y = -1; y <= 4; y++) {
            for (let z = -3; z <= 3; z++) {
                const target = bot.blockAt(bot.entity.position.offset(x, y, z))
                    , pos = `${Math.round(bot.entity.position.x)} ${Math.round(bot.entity.position.y)} ${Math.round(bot.entity.position.z)}`
                    , pos2 = `${target.position.x} ${target.position.y} ${target.position.z}`
                if (target.name !== `lava`) continue;
                else {
                    try {
                        const lavablock = bot.blockAt(target.position.offset(-1, 0, 0))
                        log(pos, pos2, '⛏ | Placing', true)
                        bot.lookAt(new Vec3(target.position.x - 1, target.position.y, target.position.z + 0.5))
                        await bot.placeBlock(lavablock, new Vec3(1, 0, 0));
                        log(pos, pos2, '✅ | Done', true)
                        edit('place', Number(status.place) + 1)
                    } catch (error) {
                        log(pos, pos2, '🛑 | Error: ' + error, true)
                        edit('place-err', Number(status['place-err']) + 1)
                        edit('error', status.error.push(error))
                    }
                }
            }
        }
    }
}
