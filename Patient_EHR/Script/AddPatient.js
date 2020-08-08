function add_Patient(Name, Notes){
  let patient_Files = Aliases.Patient_Files;
  let databaseListView = patient_Files.DatabaseListView;
  let MDIClient = databaseListView.MDIClient;
  let panel = MDIClient.DBListView.Panel1;
  let bitBtn = panel.NewButton;
  bitBtn.ClickButton();
  let editRecord = MDIClient.EditRecord;
  let scrollBox = editRecord.ScrollBox1;
  let memo = scrollBox.TMemo;
  memo.SetText(Name);
  let memo2 = scrollBox.TMemo2;
  memo2.SetText(Notes);
  let bitBtn2 = editRecord.Panel1.OKButton;
  bitBtn2.ClickButton();  
}

