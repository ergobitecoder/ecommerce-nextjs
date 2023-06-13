export const ValidatePhone = async (params) => {
    try {
        if (params.phone.length === 0 && params.isChanged) {
            return { value: false, error: `${params.field} Can't Be Empty ` };
        } else if (params.phone.length === 10 && params.isChanged) {
            return { value: false, error: `Minimum Phone number Length should be Ten characters` };
        }
        else {
            return { value: true };
        }
    } catch (error) {
        console.log(error);

    }

};



