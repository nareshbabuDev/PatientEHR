//USEUNIT ChooseDatabaseForm
//USEUNIT DatabaseListView



function Select_CustomerUser(){
  
    close_ChooseDatabaseForm(chooseDatabase);
    aqUtils.Delay(1000);
    select_MainMenuOption(dblistview_MainMenu);
    //userCreate(userName_TextField,pathToPDBFile_Browse_Button,windowsExplorer_TreeView,windowsExplorerOK_Button,userType_DropDown);
    
}