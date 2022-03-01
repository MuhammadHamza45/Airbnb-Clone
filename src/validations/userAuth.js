const bcrypt=require('bcrypt');
async function hashIt(password){
    const salt=await bcrypt.genSalt(6);
    const hash=await bcrypt.hash(password,salt);
    return hash;
}
async function compareHash(password,hashPassword){
    const validatePassword= await bcrypt.compare(password,hashPassword);
    return validatePassword;
}
module.exports={hashIt,compareHash};
    