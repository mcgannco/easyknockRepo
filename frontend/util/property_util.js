export const searchProperty = (address,city,state,zip) => {
  return $.ajax({
    method: "GET",
    url:`https://estated.com/api/property?token=uItgqgultG4AiueYohUOq3BkqcnaMQ&address=${address}&city=${city}&state=${state}&zipcode=${zip}`
  });
};
