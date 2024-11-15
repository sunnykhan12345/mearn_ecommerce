// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { useLocation } from "react-router-dom";
// import DeliveryAddForm from "./DeliveryAddForm";
// import DeliverySummery from "./DeliverySummery";

// const steps = ["Login", "delivery address", "Order Summery", "Payment"];

// export default function CheckOut() {
//   const [activeStep, setActiveStep] = React.useState(0);

//   const location = useLocation();
//   const querySearch = new URLSearchParams(location.search);
//   const step = querySearch.get("step");

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <Box className="lg:px-20 px-10 mt-10" sx={{ width: "100%" }}>
//       <Stepper activeStep={step}>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       {activeStep === steps.length ? (
//         <React.Fragment>
//           <Typography sx={{ mt: 2, mb: 1 }}>
//             All steps completed - you&apos;re finished
//           </Typography>
//           <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//             <Box sx={{ flex: "1 1 auto" }} />
//             <Button onClick={handleReset}>Reset</Button>
//           </Box>
//         </React.Fragment>
//       ) : (
//         <React.Fragment>
//           <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//             <Button
//               color="inherit"
//               disabled={activeStep === 0}
//               onClick={handleBack}
//               sx={{ mr: 1 }}
//             >
//               Back
//             </Button>
//             <Box sx={{ flex: "1 1 auto" }} />
//             <Button onClick={handleNext}>
//               {activeStep === steps.length - 1 ? "Finish" : "Next"}
//             </Button>
//           </Box>

//           <div>{step == 2 ? <DeliveryAddForm /> : <DeliverySummery />}</div>
//         </React.Fragment>
//       )}
//     </Box>
//   );
// }

import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import DeliveryAddForm from "./DeliveryAddForm";
import DeliverySummery from "./DeliverySummery";
import OrderSummery from "./OrderSummery";
const steps = ["Login", "delivery address", "Order Summery", "Payment"];
export default function CheckOut() {
  const navigate = useNavigate();
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const step = parseInt(querySearch.get("step")) || 0; // Parse as a number

  const handleNext = () => {
    navigate(`?step=${step + 1}`);
  };

  const handleBack = () => {
    if (step > 0) {
      navigate(`?step=${step - 1}`);
    }
  };

  const handleReset = () => {
    navigate("?step=0");
  };

  return (
    <Box className="lg:px-20 px-10 mt-10" sx={{ width: "100%" }}>
      <Stepper activeStep={step}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {step === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={step === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
          </Box>
          <div className="mt-10">
            {step === 2 ? <DeliveryAddForm /> : <OrderSummery />}
          </div>
        </React.Fragment>
      )}
    </Box>
  );
}
