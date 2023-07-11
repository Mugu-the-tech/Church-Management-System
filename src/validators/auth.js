//requesting for validation
const{check, validationResult}=require("express-validator");//The express-validator is used for checking users’ requests where we can check recommendations
const {statusCodes}= require("http-status-codes");//This package is used for the status code, which we return with a response.

const validateSignUpRequest =[
check("firstName").notEmpty().withMessage("First Name Required"),
check("lastName").notEmpty().withMessage('last Name Required'),
check("email").isEmail().withMessage('Valid Email required'),
check("password").isLength({min:6}).withMessage('Password must be 6 character long'),
];
const validateSignIpRequest = [
    check("email").isEmail().withMessage("Valid Email required"),
    check("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 character long"),
    ];
const isRequestedValidated =(req,res,next)=>{
    const errors =validationResult(req);
    if(errors.array().length>0){
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({error:errors.array()[0].msg});
    }
    next();
};

module.exports ={
    validateSignUpRequest,
    isRequestedValidated,
    validateSignIpRequest,
}