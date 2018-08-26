export const searchProperty = (address,city,state,zip) => {
  return $.ajax({
    method: "GET",
    url:`https://estated.com/api/property?token=dtF1GsomjETOowTMxtGG8pC3i6x8E8&address=${address}&city=${city}&state=${state}&zipcode=${zip}`
  });
};
