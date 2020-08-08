//USEUNIT ChooseDatabaseForm

  var manageCustomUsers_Window = patient_Files.VCLObject("ManageCustomUsers");
  var ok_Button = manageCustomUsers_Window.VCLObject("OK");
  var manageCustomUsers_Panel = manageCustomUsers_Window.VCLObject("Panel1");
  var createNewUser_Button = manageCustomUsers_Panel.VCLObject("NewUser");
  var manageCustomUsers_GroupBox = manageCustomUsers_Panel.VCLObject("GroupBox1");
  var userName_TextField = manageCustomUsers_GroupBox.VCLObject("UserName");
  var pathToPDBFile_Browse_Button = manageCustomUsers_GroupBox.VCLObject("Browse");
  var userType_DropDown = manageCustomUsers_GroupBox.VCLObject("UserTypeList");
  
  function set_UserName(userName_TextField){
    userName_TextField.SetText("Naresh");
    aqUtils.Delay(2000);
  
  }
  function select_PDBPath(pathToPDBFile_Browse_Button){
    pathToPDBFile_Browse_Button.click();
    aqUtils.Delay(2000);
  }
  
  function select_UserType(userType_DropDown){
    userType_DropDown.clickItem("Desktop Only");
    aqUtils.Delay(2000);
  }
  
  function click_Ok(ok_Button){
    ok_Button.SetFocus();
    ok_Button.ClickButton();
  }
