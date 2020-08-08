//USEUNIT App_Initializer
  var process = App_Initializer.init();
  var patient_Files = process;
  var chooseDatabase = patient_Files.VCLObject("ChooseRTDB");
  var UserList = chooseDatabase.VCLObject("UserList");
  var DBList = chooseDatabase.VCLObject("DBList")
    
  function select_User(UserList){
    UserList.ClickItem("My Patient6.0 (Desktop Only)");
  }
  
  
  function select_Database(DBList){
      DBList.ClickItem("rmPatientFiles"); 
  }

  
  function close_ChooseDatabaseForm(chooseDatabase){
    chooseDatabase.Close();
  }
