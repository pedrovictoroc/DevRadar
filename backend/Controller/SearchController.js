const Dev = require('../Model/Dev')

const parseStringArray = require('../utils/parseStringArray')


module.exports = {
    async index(req,res){
        const {latitude, longitude, techs} = req.query
        
        const techsArray = parseStringArray(techs)

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location:{
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        })

        return res.send(devs)
    }
}