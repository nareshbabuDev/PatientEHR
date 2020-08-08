//USEUNIT ChooseDatabaseForm

var databaselistview = patient_Files.VCLObject("DatabaseListView");
var dblistview_MainMenu = databaselistview.MainMenu;


function select_MainMenuOption(dblistview_MainMenu){
    dblistview_MainMenu.Click("[3]|[7]");
}

function close_Application(dblistview_MainMenu){
    dblistview_MainMenu.Click("[1]|[19]");
}