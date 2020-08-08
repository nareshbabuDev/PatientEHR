function Test1()
{
  TestedApps.Patient_Files.Run(1, true);
  let patient_Files = Aliases.Patient_Files;
  patient_Files.ChooseRTDB.Close();
  let databaseListView = patient_Files.DatabaseListView;
  databaseListView.MainMenu.Click("[3]|[7]");
  let manageCustomUsers = patient_Files.ManageCustomUsers;
  let panel = manageCustomUsers.Panel1;
  panel.NewUser.ClickButton();
  panel.UsersList.Click(117, 10);
  let groupBox = panel.GroupBox1;
  let edit = groupBox.UserName;
  edit.Click(191, 13);
  edit.Click(191, 13);
  edit.SetText("PatientView");
  groupBox.Browse.ClickButton();
  let dlgBrowseForFolder = patient_Files.dlgBrowseForFolder;
  let treeView = dlgBrowseForFolder.TreeView;
  treeView.VScroll.Pos = 9;
  treeView.ExpandItem("|Desktop|This PC|Documents");
  treeView.ExpandItem("|Desktop|This PC|Documents|Easy Clinic");
  treeView.DblClickItem("|Desktop|This PC|Documents|Easy Clinic|MyPatients6");
  treeView.DblClickItem("|Desktop|This PC|Documents|Easy Clinic|MyPatients6");
  treeView.DblClickItem("|Desktop|This PC|Documents|Easy Clinic|MyPatients6");
  treeView.ClickItem("|Desktop|This PC|Documents|Easy Clinic|MyPatients6");
  treeView.VScroll.Pos = 15;
  treeView.DblClickItem("|Desktop|This PC|Documents|patient_files_6_desktop");
  treeView.ClickItem("|Desktop|This PC|Documents|patient_files_6_desktop");
  treeView.DblClickItem("|Desktop|This PC|Documents|patient_files_6_desktop");
  treeView.ClickItem("|Desktop|This PC|Documents|Easy Clinic|MyPatients6");
  dlgBrowseForFolder.btnOK.ClickButton();
  groupBox.UserTypeList.ClickItem("Desktop Only");
  panel.Drag(548, 191, 7, 54);
  manageCustomUsers.OK.ClickButton();
  databaseListView.MainMenu.Click("[1]|[20]");
}