﻿



//USEUNIT UserCreateForm
function set_userName(){
  set_UserName(userName_TextField);
}

function set_PDB(){
  select_PDBPath(pathToPDBFile_Browse_Button);
}

function set_userType(){
  select_UserType(userType_DropDown);
}

function saveUser(){
  click_Ok(ok_Button);
}

//USEUNIT DatabaseListView
function closeApp(){
  close_Application(dblistview_MainMenu);
}