//importamos la conexion a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const BlogModel = db.define('roda', {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },

    

},{
    freezeTableName: true
})

export default BlogModel