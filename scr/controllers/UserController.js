import  {pool} from '../dbcontec.js'
export const getUsers = async (req, res)=>
{
    const [result]= await pool.query('select *  from ventas.users;')
    res.json(result)
}
export const postUsers =(req ,res)=>{
    res.sen('crear usuarios desde el controllador') 
}
export const putUsers =(req,res) =>{
    res.json('actulaizando datos')
}
export const deleteUsers =(req,res) =>{
    res.json('eliminnado usuarios')
}
