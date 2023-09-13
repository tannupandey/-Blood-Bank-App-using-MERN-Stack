const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs')

const registerController = async (req, res) => {

    try{
        //existing user
        const existingUser =await userModel.findOne({email:req.body.email})
        
        //validation
        if(existingUser){
            return res.status(200).send({   //status 200 for success
                success:false,
                message:'User already exists',
                
            })
        }
        //for hashing of password
        const salt = await bcrypt.genSalt(10);  
        const hashedPassword = await bcrypt.hash(models.body.password, salt)
        models.body.password = hashedPassword;  //exchange plainPassword with hashedPassword

        //saving rest data
        const user = new userModel(req.body)
        await user.save()
        return res.status(201).send({
          success:true,
          message:'User Registered Successfully',
          user
        });
    }    

        

    catch(error){
        console.log('error')
        res.status(500).send({   //status 500 for internal error
            success:false,
            message:'Error in Register API',
            error
        })
        
        
    }

}

//login call back   //register controller function
const loginController = (req, res) => {

}

module.exports = {registerController, loginController};
 