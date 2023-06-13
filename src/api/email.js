export const validateEmail = async (params) => {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  try {
    if (params.email.length === 0 && params.isChanged === true) {
      return { value: false, error: `${params.field} Can't Be Empty ` };
    } else if (!params.email.match(validRegex) && params.isChanged) {
      return { value: false, error: `Please Enter Valid Email` };
    } else {
      return { value: true };
    }
    return 
  } catch (error) {
    console.log(error);
  }
};
