function init(){
  
  TestedApps.Patient_Files.Run(1, true);
  var patient_Files = Sys.Process("Patient Files");
  return patient_Files;
}

