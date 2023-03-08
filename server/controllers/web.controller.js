const { Player } = require("../models");

class WebController {
    static async index (req, res) {
        const players = await Player.findAll()
        res.render('dashboard', {players})
    }

    static async create(req, res) {
        res.render('create')
    }

    static async delete(req, res) {
        const {id} = req.params
        const destroy = await Player.destroy({
            where: {id: id}
        })
        if (destroy)
            res.redirect('dashboard')
    }

    static async show(req, res) {
        const { id } = req.params

        const playerData = await Player.findByPk(id)
        res.render('player', {playerData})
    }

    static async updatePlayer(req, res, next) {
        try {
          const { id } = req.params;
          const player = await Player.findByPk(id)
              res.render('edit' , {
                username: player.username,
                email: player.email,
                password: player.password,
                experience: player.experience
              })
        //   if (!player) return res.status(404).json({ result: "Not found", message: `Player with ${id} not found` })
        //   const updatedPlayer = await Player.update(req.body, {
        //     where: { id: id },
        //   });
        //   if (updatedPlayer == 1) {
        //     return res.status(200).json(updatedPlayer);
        //   } else {
        //     return res.status(500).json({
        //       result: "failed",
        //       message: "Failed to update",
        //     });
        //   }
        } catch (error) {
          next(error);
        }
      }
}

module.exports = WebController;
