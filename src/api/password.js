export const ValidatePassword = async (params) => {
  var regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    try {
      if (params.password.length === 0 && params.isChanged) {
        return { value: false, error: `${params.field} Can't Be Empty ` };
      } else if (params.password.length < 8 && params.isChanged) {
        return { value: false, error: `Minimum Password Length should be Eight characters` };
      } else if (!params.password.match(regularExpression)&& params.isChanged) {
        return {
          value: false,
          error: `Password should contain minimum one speacial character and Number`,
        };
      }else {
        return { value: true };
      }
    } catch (error) {
      console.log(error);
      
    }
 
};



