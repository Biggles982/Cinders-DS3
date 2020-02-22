// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

Event(0, Default, function() {
    InitializeEvent(0, 14700100, 0); // Trial of Glory
    InitializeEvent(0, 14700000, 0); // Arena
});

// Trial of Glory
Event(14700100, Default, function() {
    SetMapCeremony(40, 0, 0);

    ChangeCharacterEnableState(4700100, Disabled); // Vordt
    ChangeCharacterEnableState(4700110, Disabled); // Old Demon King
    ChangeCharacterEnableState(4700120, Disabled); // Yhorm the Giant
    ChangeCharacterEnableState(4700130, Disabled); // Oceiros
    ChangeCharacterEnableState(4700140, Disabled); // Dancer
    ChangeCharacterEnableState(4700150, Disabled); // Dragonslayer Armour
    ChangeCharacterEnableState(4700170, Disabled); // Aldrich
    ChangeCharacterEnableState(4700180, Disabled); // Slave Knight Gael
    ChangeCharacterEnableState(4700190, Disabled); // Soul of Cinder
    
    SetSpeffect(4700100, 260300000);
    SetSpeffect(4700101, 260300010);
    SetSpeffect(4700102, 260300020);
    SetSpeffect(4700103, 260300030);
    SetSpeffect(4700104, 260300040);
    SetSpeffect(4700150, 260300050);
    SetSpeffect(4700170, 260300060);
    SetSpeffect(4700180, 260300070);
    SetSpeffect(4700190, 260300080);
    
    WaitFixedTimeSeconds(3.0);
    
    DisplayGenericDialog(99004000, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 5.0);
    
    // Vordt
    ChangeCharacterEnableState(4700100, Enabled);
    IssueShortWarpRequest(4700100, TargetEntityType.Area, 4702600, -1);
    IfCharacterHPRatio(MAIN, 4700100, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    WaitFixedTimeSeconds(10.0);
    DisplayGenericDialog(99004001, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 5.0);
    WaitFixedTimeSeconds(5.0);
    
    // Old Demon King
    ChangeCharacterEnableState(4700110, Enabled);
    IssueShortWarpRequest(4700110, TargetEntityType.Area, 4702600, -1);
    IfCharacterHPRatio(MAIN, 4700110, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    WaitFixedTimeSeconds(10.0);
    DisplayGenericDialog(99004001, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 5.0);
    WaitFixedTimeSeconds(5.0);
    
    // Yhorm the Giant
    ChangeCharacterEnableState(4700120, Enabled);
    IssueShortWarpRequest(4700120, TargetEntityType.Area, 4702600, -1);
    IfCharacterHPRatio(MAIN, 4700120, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    WaitFixedTimeSeconds(10.0);
    DisplayGenericDialog(99004001, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 5.0);
    WaitFixedTimeSeconds(5.0);
    
    // Oceiros
    ChangeCharacterEnableState(4700130, Enabled);
    IssueShortWarpRequest(4700130, TargetEntityType.Area, 4702600, -1);
    IfCharacterHPRatio(MAIN, 4700130, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    WaitFixedTimeSeconds(10.0);
    DisplayGenericDialog(99004001, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 5.0);
    WaitFixedTimeSeconds(5.0);
    
    // Dancer
    ChangeCharacterEnableState(4700140, Enabled);
    IssueShortWarpRequest(4700140, TargetEntityType.Area, 4702600, -1);
    IfCharacterHPRatio(MAIN, 4700140, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    WaitFixedTimeSeconds(10.0);
    DisplayGenericDialog(99004001, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 5.0);
    WaitFixedTimeSeconds(5.0);
    
    // Dragonslayer Armour
    ChangeCharacterEnableState(4700150, Enabled);
    IssueShortWarpRequest(4700150, TargetEntityType.Area, 4702600, -1);
    IfCharacterHPRatio(MAIN, 4700150, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    WaitFixedTimeSeconds(10.0);
    DisplayGenericDialog(99004001, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 5.0);
    WaitFixedTimeSeconds(5.0);
    
    // Aldrich
    ChangeCharacterEnableState(4700170, Enabled);
    IssueShortWarpRequest(4700170, TargetEntityType.Area, 4702600, -1);
    IfCharacterHPRatio(MAIN, 4700170, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    WaitFixedTimeSeconds(10.0);
    DisplayGenericDialog(99004001, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 5.0);
    WaitFixedTimeSeconds(5.0);
    
    // Slave Knight Gael
    ChangeCharacterEnableState(4700180, Enabled);
    IssueShortWarpRequest(4700180, TargetEntityType.Area, 4702600, -1);
    IfCharacterHPRatio(MAIN, 4700180, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    WaitFixedTimeSeconds(10.0);
    DisplayGenericDialog(99004001, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 5.0);
    WaitFixedTimeSeconds(5.0);
    
    // Soul of Cinder
    ChangeCharacterEnableState(4700190, Enabled);
    IssueShortWarpRequest(4700190, TargetEntityType.Area, 4702600, -1);
    IfCharacterHPRatio(MAIN, 4700190, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    WaitFixedTimeSeconds(10.0);
    DisplayGenericDialog(99004001, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 5.0);
    WaitFixedTimeSeconds(5.0);
    
    //SkipIfEventFlag(5, ON, TargetEventFlagType.EventFlag, 25000080);
    DisplayGenericDialog(99004010, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 5.0);
    SetEventFlag(25000080, ON); // Primordial Weapons
    SetEventFlag(25000081, ON); // Primordial Armor
    SetEventFlag(25000082, ON); // Primordial Spells
    SetEventFlag(25000083, ON); // Primordial Rings
    
    WarpPlayer(40, 0, 4000970);
});

// Arena Setup
Event(14700000, Default, function() {
    GotoIfHollowArenaMatchType(Label.LABEL0, HollowArenaMatchType.Duel);
    GotoIfHollowArenaMatchType(Label.LABEL1, HollowArenaMatchType.TwoPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL2, HollowArenaMatchType.FourPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL3, HollowArenaMatchType.SixPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL4, HollowArenaMatchType.TwoVersusThree);
    GotoIfHollowArenaMatchType(Label.LABEL5, HollowArenaMatchType.ThreeVersusThree);
    
    // Duel
    Label0();
    InitializeCommonEvent(20005920, 0, 14705300, 10020000, 10020010);
    InitializeCommonEvent(20005930, 14705300);
    InitializeCommonEvent(20005941, 14705300);
    EndUnconditionally(EventEndType.End);
    
    // 2-P Brawl
    Label1();
    InitializeCommonEvent(20005920, 1, 14705300, 10020001, 10020011);
    GotoUnconditionally(Label.LABEL9);
    
    // 4-P Brawl
    Label2();
    InitializeCommonEvent(20005920, 2, 14705300, 10020002, 10020012);
    GotoUnconditionally(Label.LABEL9);
    
    // 6-P Brawl
    Label3();
    InitializeCommonEvent(20005920, 3, 14705300, 10020003, 10020013);
    GotoUnconditionally(Label.LABEL9);
    
    // 2v3 Brawl
    Label4();
    InitializeCommonEvent(20005920, 4, 14705300, 10020004, 10020014);
    GotoUnconditionally(Label.LABEL9);
    
    // 3v3 Brawl
    Label5();
    InitializeCommonEvent(20005920, 5, 14705300, 10020005, 10020015);
    GotoUnconditionally(Label.LABEL9);
    
    Label9();
    InitializeCommonEvent(20005940, 14705300);
});
