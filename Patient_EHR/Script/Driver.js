//USEUNIT App_Initializer
//USEUNIT Select_Record
//USEUNIT AddPatient
//USEUNIT CreateVisit
function driver(){
    
      const patient = [ 
                    {PatientName: "john", Notes:"Fever"},
                    {PatientName: "clark", Notes:"Headache"},
                  ]
  
       init();       
       select_record();
       
       for (var i = 0; i < patient.length; i++) {
         var obj = patient[i];
         var Name = obj.PatientName;
         var Notes = obj.Notes;
         add_Patient(Name, Notes);
     } 
     
      for (var i = 0; i < patient.length; i++) {
        var obj = patient[i];
        var Name = obj.PatientName;
        var Notes = obj.Notes;
        if(Name == "john"){
        AddVisit(Name,Notes)  
          
        }
      }
}