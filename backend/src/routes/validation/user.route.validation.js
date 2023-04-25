import { body, check, validationResult, param } from "express-validator";
import { validationErrorCreation } from "../../utils/helper.js";
import { USER_TYPE } from "../../utils/constants/user.js";

export const update_profile_validation = [
  body("first_name")
    .trim()
    .if((value) => value !== "")
    .if((value, { req }) => req.body.type !== USER_TYPE.business)    
    .optional()
    .notEmpty()
    .isLength({ min: 3, max: 20 })
    .withMessage("Invalid First name"),
  body("last_name")
  .if((value) => value !== "")
    .trim()
    .if((value, { req }) => req.body.type !== USER_TYPE.business)
    .optional()
    .notEmpty()
    .isLength({ min: 3, max: 20 })
    .withMessage("Invalid Last name"),
  body("username")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Invalid Username")
    .isLength({ min: 3, max: 25 })
    .withMessage("Username must be between 3 and 25 characters")
    .matches(/^[A-Za-z0-9_]+$/),
  body("email")
    .not()
    .isEmpty()
    .withMessage("Invalid Email")
    .isEmail()
    .withMessage("Please enter a valid email.")
    .normalizeEmail(),

  body("day")
    .if((value) => value !== "")
    .if((value, { req }) => req.body.type !== USER_TYPE.business)
    .optional()
    .notEmpty()
    .isInt({ min: 1, max: 31 })
    .withMessage("Invalid Date of Birth"),
  body("month")
    .if((value) => value !== "")
    .if((value, { req }) => req.body.type !== USER_TYPE.business)
    .optional()
    .notEmpty()
    .isInt({ min: 1, max: 12 })
    .withMessage("Invalid Date of Birth"),
  body("year")
    .if((value) => value !== "")
    .if((value, { req }) => req.body.type !== USER_TYPE.business)
    .optional()
    .notEmpty()
    .isInt({ min: 1900, max: new Date().getFullYear() - 18 })
    .withMessage("Invalid Date of Birth"),
  body("gender")
    .if((value) => value !== "")
    .if((value, { req }) => req.body.type !== USER_TYPE.business)
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 4, max: 6 })
    .withMessage("Invalid Gender"),
  body("occupation")
    .if((value) => value !== "")
    .if((value, { req }) => req.body.type !== USER_TYPE.business)
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 3, max: 30 })
    .withMessage("Occupation should be min 3 and max 30 char long"),
  body("business_name")
    .if((value) => value !== "")
    .if((value, { req }) => req.body.type !== USER_TYPE.personal)
    .not()
    .isEmpty()
    .withMessage("Invalid Business name"),
  body("business_type")
    .if((value) => value !== "")
    .if((value, { req }) => req.body.type !== USER_TYPE.personal)
    .not()
    .isEmpty()
    .withMessage("Invalid Business Type"),
  body("business_address")
    .if((value) => value !== "")
    .if((value, { req }) => req.body.type !== USER_TYPE.personal)
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 3, max: 30 })
    .withMessage("Address should be min 10 and max 50 char long"),
  body("phoneNumber")
    .if((value) => value !== "")
    .if((value, { req }) => req.body.type !== USER_TYPE.personal)
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 10, max: 13 })
    .withMessage("Phone should be min 10 and max 13 char long")
    .matches(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i),

  body("about")
    .if((value) => value !== "")
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 3, max: 220 })
    .withMessage("About should be min 3 and max 220 char long"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return validationErrorCreation(res, errors, next);
    }
    next();
  },
];