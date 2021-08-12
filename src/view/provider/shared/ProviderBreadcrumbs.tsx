import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

function handleClick(event) {
  event.preventDefault();

 
}

 export default function ProviderBreadcrumbs() {
   return (
     <div>
       <Breadcrumbs aria-label="breadcrumb">
         <Link color="inherit" href="/providerwireframe" aria-current="page">
        Provider Wireframe
         </Link>
         <Link color="inherit" href="/provider" aria-current="page">
          Provider List
         </Link>

         <Link color="inherit" href="/provider/new" aria-current="page">
           Provider New
         </Link>
       </Breadcrumbs>
     </div>
   );
 }
 
