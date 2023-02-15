import {Sequelize} from 'sequelize'

const db = new Sequelize('alexis', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})

export default db   