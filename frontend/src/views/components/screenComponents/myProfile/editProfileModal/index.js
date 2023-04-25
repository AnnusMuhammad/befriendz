import { connect } from "react-redux";
import EmptySpace from "views/components/shared/emptySpace";
import Button from "views/components/shared/form-elements/button";
import Input from "views/components/shared/form-elements/input";
import Select from "views/components/shared/form-elements/select";
import Textarea from "views/components/shared/form-elements/textarea";
import Modal from "views/components/shared/modal";
import { useForm } from "react-hook-form";
import useFormHandler from "../../../../../shared/hooks/useFormHandler";
import { updateProfileAction } from "redux/actions/userAction";
import { REGX_CONSTANT } from "constants/regx.constant";
import { USER_TYPE } from "constants/user.constant";
const EditProfileModal = (props) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    trigger,
    control,
    formState: { errors },
  } = useForm({
        defaultValues: {
          first_name: props.user.type === USER_TYPE.BUSINESS ? undefined : props.user.first_name ,
          last_name: props.user.type === USER_TYPE.BUSINESS ? undefined : props.user.last_name,
          occupation: props.user.type === USER_TYPE.BUSINESS ? undefined : props.user.occupation,
          day: props.user.type === USER_TYPE.BUSINESS ? undefined : props.user.dob.day,
          month: props.user.type === USER_TYPE.BUSINESS ? undefined :  props.user.dob.month,
          year: props.user.type === USER_TYPE.BUSINESS ? undefined : props.user.dob.year,
          
          business_name: props.user.type === USER_TYPE.PERSONAL ? undefined : props.user.business_name ,
          business_type: props.user.type === USER_TYPE.PERSONAL ? undefined : props.user.business_type,
          business_address: props.user.type === USER_TYPE.PERSONAL ? undefined : props.user.business_address,
          phoneNumber: props.user.type === USER_TYPE.PERSONAL ? undefined : props.user.phoneNumber,
          
          type: props.user.type,
          about: props.user.about,
          username: props.user.username,
          email: props.user.email,
        }
      });
  const { handleChange, resetFormErrors } = useFormHandler(clearErrors);

 const submitHandler = (data) => {
    resetFormErrors();
    props.updateProfile(data).then(()=>props.setOpen(false));
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 100;
  const yearoptions = [];
  for (let year = currentYear; year >= startYear; year--) {
    yearoptions.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }

  const form = () => (
    <form className="mt-5 space-y-5"  onSubmit={handleSubmit(submitHandler)}>
      <Input
        type="hidden"
        name="type"
        register={{
          ...register("type"),
        }}
      />
      <EmptySpace height="10px" />
      {props.user.type == USER_TYPE.PERSONAL && (<>
            <div className="">
        <Input
          type="text"
          label="First Name"
          placeholder="Demarai"            
          name="first_name"
          register={{
            ...register("first_name", {
              onChange: handleChange,
              required: "This field is required",
              minLength: {
                value: 3,
                message: "First name should be at least 3 characters long",
              },
              maxLength: {
                value: 20,
                message: "First name should be less then 20 characters",
              },
            }),
          }}
          error={
            errors.first_name?.message || props.common.errors?.first_name
          }
        />
      </div>
      <div className="">
        <Input
          type="text"
          label="Last Name"
          name="last_name"
          placeholder="Gray"
          register={{
            ...register("last_name", {
              onChange: handleChange,
              required: "This field is required",
              minLength: {
                value: 3,
                message: "Last name should be at least 3 characters long",
              },
              maxLength: {
                value: 20,
                message: "Last name should be less then 20 characters",
              },
            }),
          }}
          error={
            errors.last_name?.message || props.common.errors?.last_name
          }
        />
      </div>
      </>)}

   
      <div className="">
        <Input
          type="text"
          label="Username"
          name="username"
          placeholder="demarai_gray"
          register={{
            ...register("username", {
              onChange: handleChange,
              required: "This field is required",
              minLength: {
                value: 3,
                message: "Username should be at least 3 characters long",
              },
              maxLength: {
                value: 20,
                message: "Username should be less then 20 characters",
              },
              pattern: {
                value: REGX_CONSTANT.USERNAME,
                message:
                  "Username should only contain letters, numbers, hyphens, and underscores",
              },
            }),
          }}
          error={errors.username?.message || props.common.errors?.username}
        />
      </div>
      <div className="">
        <Input
          type="text"
          label="Email Address"
          name="email"
          placeholder="demaraigray@gmail.com"
          register={{
            ...register("email", {
              onChange: handleChange,
              required: "This field is required",
              pattern: {
                value: REGX_CONSTANT.EMAIL,
                message: "Invalid email address",
              },
            }),
          }}
          error={errors.email?.message || props.common.errors?.email}
        />
      </div>
       {props.user.type == USER_TYPE.PERSONAL && (<>
      <div className="">
        <Input
          type="text"
          label="Occupation"
          name="occupation"
          placeholder="What do you do for living?"
          register={{
            ...register("occupation", {
              onChange: handleChange,
              minLength: {
                value: 3,
                message: "Occupation should be at least 3 characters long",
              },
              maxLength: {
                value: 30,
                message: "Occupation should be less then 20 characters",
              },
            }),
          }}
          error={
            errors.occupation?.message || props.common.errors?.occupation
          }
        />
      </div>
      <div>
        <div>
          <label
            className={`text-[2A2A2A] font-openSans_regular lg:text-[16px] md:text-[15px] sm:text-[14px] text-[13px]`}
          >
            Date of Birth
          </label>
          <div className="flex justify-between w-full">
            <div>
              <Select
                  name="day"
                  register={{
                    ...register("day", {
                      onChange: handleChange,
                    }),
                  }}>
                <option value="">Day</option>
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
              </Select>
            </div>
            <div>
              <Select 
                  name="month"
                  register={{
                    ...register("month", {
                      onChange: handleChange,
                    }),
                  }}>
                <option value="">Month</option>
                  {months.map((month, index) => (
                    <option key={index} value={index + 1} >
                      {month}
                    </option>
                  ))}
              </Select>
            </div>
            <div>
              <Select
                  name="year"
                  register={{
                    ...register("year", {
                      onChange: handleChange,
                      min: { value: 1900, message: "Invalid Year" },
                      max: {
                        value: new Date().getFullYear() - 18,
                        message: "Invalid Year",
                      },
                    }),
                  }}>
                <option value="">year</option>
                  {yearoptions}
              </Select>
            </div>
          </div>
        </div>
      </div>
      </>)}
      
       {props.user.type == USER_TYPE.BUSINESS && (<>
          <div className="">
        <Input
              type="text"
              label="Full Business Name"
              name="business_name"
              placeholder="S7N D3SIGNS"
              register={{
                ...register("business_name", {
                  onChange: handleChange,
                  required: "This field is required",
                  minLength: {
                    value: 3,
                    message:
                      "Business Name should be at least 3 characters long",
                  },
                  maxLength: {
                    value: 20,
                    message: "Business Name should be less then 20 characters",
                  },
                }),
              }}
              error={
                errors.business_name?.message ||
                props.common.errors?.business_name
              }
        />
      </div>
                <div className="">
        <Input
              label="Business Type"
              type="text"
              name="business_type"
              placeholder="Design"
              register={{
                ...register("business_type", {
                  onChange: handleChange,
                  required: "This field is required",
                  minLength: {
                    value: 3,
                    message:
                      "Business type should be at least 3 characters long",
                  },
                  maxLength: {
                    value: 20,
                    message: "Business type should be less then 20 characters",
                  },
                }),
              }}
              error={
                errors.business_type?.message ||
                props.common.errors?.business_type
              }
        />
      </div>
                <div className="form-group">
            <Input
              type="text"
              label="Business Phone Number"
              name="phoneNumber"
              placeholder="Enter Business Phone Number"
              register={{
                ...register("phoneNumber", {
                  onChange: handleChange,
                  minLength: {
                    value: 10,
                    message:
                      "Business Phone Number should be at least 10 characters long",
                  },
                  maxLength: {
                    value: 13,
                    message:
                      "Business Phone Number should be less then 13 characters",
                  },
                  pattern: {
                    value: REGX_CONSTANT.PHONE,
                    message: "Invalid Phone",
                  },
                }),
              }}
              error={
                errors.phoneNumber?.message || props.common.errors?.phoneNumber
              }
            />
          </div>
                    <div className="form-group">
            <Input
              type="text"
              label="Full Business Address"
              name="business_address"
              placeholder="Enter Business Address"
              register={{
                ...register("business_address", {
                  onChange: handleChange,
                  minLength: {
                    value: 10,
                    message:
                      "Business Address should be at least 10 characters long",
                  },
                  maxLength: {
                    value: 50,
                    message:
                      "Business Address should be less then 50 characters",
                  },
                }),
              }}
              error={
                errors.business_address?.message ||
                props.common.errors?.business_address
              }
            />
          </div>
      </>)}
      <div className="">
        <Textarea
          label="Tell us about yourself"
          name="about"
          placeholder="Write something about you"
          register={{
            ...register("about", {
              onChange: handleChange,
              minLength: {
                value: 3,
                message: "About should be at least 3 characters long",
              },
              maxLength: {
                value: 220,
                message: "About should be less then 220 characters",
              },
            }),
          }}
          error={errors.about?.message || props.common.errors?.about}
        />
      </div>

      <EmptySpace height="60px" />

      <div className="">
        <Button
          disabled={props.common.form_loder === 1}
          isLoading={props.common.form_loder === 1}
          text={"Continue"} 
        />
      </div>
      <EmptySpace height="20px" />
    </form>
  );

  return (
    <Modal
      open={props.open}
      setOpen={props.setOpen}
      title={"Edit Profile"}
      subTitle={"Kindly update the details below"}
    >
      {form()}
    </Modal>
  );
};

const mapStateToProps = state => ({
  common: state.common,
  user: state.auth.user
})
const mapDispatchToProps = dispatch => ({
  updateProfile: data => dispatch(updateProfileAction(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileModal);
