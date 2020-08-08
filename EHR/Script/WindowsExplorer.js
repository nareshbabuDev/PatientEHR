//USEUNIT ChooseDatabaseForm

  var windowsExplorer_Panel = patient_Files.Window("#32770", "Browse for Folder", 1);
  var windowsExplorer_TreeView = windowsExplorer_Panel.Window("SysTreeView32", "", 1);
  var windowsExplorerOK_Button = windowsExplorer_Panel.Window("Button", "OK", 1);
  
  function select_File(windowsExplorer_TreeView,windowsExplorerOK_Button){
    //aqUtils.Delay(1000);
    //windowsExplorer_TreeView.ExpandItem("|Desktop|This PC|Documents|Easy Clinic");
    windowsExplorer_TreeView.clickItem("|Desktop|This PC|Documents|Easy Clinic|MyPatients6");
    aqUtils.Delay(2000);
    windowsExplorerOK_Button.click();
    aqUtils.Delay(2000);
  }