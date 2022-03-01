const Joi=require('joi');
const signupValidate=(data)=>{ 
    const schema=Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password:Joi.string().required()
    }).unknown();
//     const {error}=signupValidate(req.body);
//     if(error){
//     throw error;
// }
// else{
//     res.status(200).json('data saved.');
// }
    return schema.validate(data);
}


module.exports={signupValidate};