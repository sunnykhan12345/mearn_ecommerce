import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../addresscard/AddressCard";
const DeliveryAddForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    console.log("FormData object:", data);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };

    console.log("Parsed Address Object:", address);
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-5 cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md p-5 shadow-md">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="street-address"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="address-level2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="address-level1"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="ZIP/Postal Code"
                    fullWidth
                    autoComplete="postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="tel"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    sx={{ py: 1, mt: 2, bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddForm;

// const DeliveryAddForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("address");

//     const data = new FormData(e.currentTarget);
//     console.log("address", data);

//     const address = {
//       firstName: data.get("firstName"),
//       lastName: data.get("lastName"),
//       streetAddress: data.get("address"),
//       city: data.get("city"),
//       state: data.get("state"),
//       zipCode: data.get("zip"),
//       mobile: data.get("phoneNumber"),
//     };
//   };
//   return (
//     <div>
//       <Grid container spacing={4}>
//         <Grid
//           xs={12}
//           lg={5}
//           className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
//         >
//           <div className="p-5 py-5 cursor-pointer">
//             <AddressCard />
//             <Button
//               sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
//               size="large"
//               variant="contained"
//             >
//               Deliver Here
//             </Button>
//           </div>
//         </Grid>

//         <Grid item xs={12} lg={7}>
//           <Box className="border rounded-s-md p-5 shadow-md">
//             <form onSubmit={handleSubmit}>
//               <Grid container spacing={3}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="FirstName"
//                     name="FirstName"
//                     label="First Name"
//                     fullWidth
//                     autoComplete="given-name"
//                   ></TextField>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="LastName"
//                     name="LastName"
//                     label="Last Name"
//                     fullWidth
//                     autoComplete="given-name"
//                   ></TextField>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     id="address"
//                     name="address"
//                     label="address"
//                     fullWidth
//                     autoComplete="given-name"
//                     multiline
//                     rows={4}
//                   ></TextField>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="City"
//                     name="City"
//                     label="City"
//                     fullWidth
//                     autoComplete="given-name"
//                   ></TextField>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="state"
//                     name="state"
//                     label="States/Priovince/Region"
//                     fullWidth
//                     autoComplete="given-name"
//                   ></TextField>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="zip"
//                     name="zip"
//                     label="zip/postal Code"
//                     fullWidth
//                     autoComplete="given-name"
//                   ></TextField>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="PhoneNumber"
//                     name="PhoneNumber"
//                     label="Phone Number"
//                     fullWidth
//                     autoComplete="given-name"
//                   ></TextField>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Button
//                     sx={{ py: 1, mt: 2, bgcolor: "RGB(145 85 253)" }}
//                     size="large"
//                     variant="contained"
//                     type="submit"
//                   >
//                     Deliver Here
//                   </Button>
//                 </Grid>
//               </Grid>
//             </form>
//           </Box>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default DeliveryAddForm;
