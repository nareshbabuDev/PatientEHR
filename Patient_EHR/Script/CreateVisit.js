﻿function AddVisit(Name,Notes){
  
  let patient_Files = Aliases.Patient_Files;
  let MDIClient = patient_Files.DatabaseListView.MDIClient;
  let TDBListView = MDIClient.DBListView;
  let edit = TDBListView.Panel1.QuickSearch;
  edit.Click(66, 8);
  edit.SetText(Name);
  let advStringGrid = TDBListView.Grid;
  advStringGrid.HScroll.Pos = 0;
  advStringGrid.VScroll.Pos = 127;
  advStringGrid.Click(136, 231);
  let editRecord = MDIClient.EditRecord;
  let scrollBox = editRecord.ScrollBox1;
  scrollBox.TMemo.Click(42, 15);
  scrollBox.TButton.ClickButton();
  let panel = MDIClient.DBListView_1.Panel1;
  let bitBtn = panel.NewButton;
  bitBtn.ClickButton();
  let editRecord2 = MDIClient.EditRecord_1;
  let memo = editRecord2.ScrollBox1.TMemo;
  memo.Click(35, 27);
  memo.Keys("Note");
  let bitBtn2 = editRecord2.Panel1.OKButton;
  bitBtn2.ClickButton();

}