var map;
var allMapPoints = [];
var requestedDistance = 400; //measured in meters
var loopPaths = [];
var multiLoopPaths = [];
var multiLoopMultipliers = [];
var straightPaths = [];
var loops = 1;
var linear = 0; //for now loops only until faster
var sideNavVisible = 0;
var routeOptions;
var startMarker;
var startMapPoint = new MapPoint('Start Location', new Coords(0, 0), null, 0);
var thePolyLine = null;

function initMap() {
	var campusCenter = new Coords(30.284851, -97.733868);
	
	//some points around lower dorm block
	var speedwayJesterCir = new Coords(30.281717, -97.737638);
	var brazosJesterCir = new Coords(30.281587, -97.736667);
	var jesterCir21st = new Coords(30.283241, -97.734635);
	var speedway21st = new Coords(30.283470, -97.737429);
	var jesterShortcut21st = new Coords(30.283383, -97.736358);
	var jesterShortcutJesterCir = new Coords(30.281522, -97.735906);
	var jesterCirPrather = new Coords(30.281857, -97.735272);
    var prather21st = new Coords(30.283314, -97.735570);
    //more
    // var jesterEast = new Coords(30.281908005718037, -97.73587932325907);
    // var spanishOaksTerrace = new Coords(30.282387465092686, -97.73645599819727);
	
	//constructing MapPoints from coords and neighbor arrays
    spdJstCir = new MapPoint('Speedway & Jester Circle', speedwayJesterCir, null, 0);
    allMapPoints.push(spdJstCir);
	var bzsJstCir = new MapPoint('Brazos & Jester Circle', brazosJesterCir, null, 0);
    allMapPoints.push(bzsJstCir);
	var jstCir21 = new MapPoint('Jester Circle & 21st', jesterCir21st, null, 0);
    allMapPoints.push(jstCir21);
	var spd21 = new MapPoint('Speedway & 21st', speedway21st, null, 0);
    allMapPoints.push(spd21);
	var jstSc21 = new MapPoint('Jester Shortcut & 21st', jesterShortcut21st, null, 0);
    allMapPoints.push(jstSc21);
	var jstScJstCir = new MapPoint('Jester Shortcut & Jester Circle', jesterShortcutJesterCir, null, 0);
    allMapPoints.push(jstScJstCir);
	var jstCirPth = new MapPoint('Jester Cirle & Prather', jesterCirPrather, null, 0);
    allMapPoints.push(jstCirPth);
	var pth21 = new MapPoint('Prather & 21st', prather21st, null, 0);
    allMapPoints.push(pth21);
    //more
    var jstE = new MapPoint("Jester East", new Coords(30.281908005718037, -97.73587932325907), null, 0);
    allMapPoints.push(jstE);
    var spanOakTerr = new MapPoint("Spanish Oak Terrace", new Coords(30.282387465092686, -97.736455998197277), null, 0);
    allMapPoints.push(spanOakTerr);
    var roberts = new MapPoint("Roberts", new Coords(30.2828331339024, -97.73528127633149), null, 0);
    allMapPoints.push(roberts);
    var clrkBbl = new MapPoint("Clark Basketball Courts", new Coords(30.281516495006915, -97.73573473023113), null, 0);
    allMapPoints.push(clrkBbl);
    var clrkEnt = new MapPoint("Clark Entrance", new Coords(30.28174108353306, -97.73517178563559), null, 0);
    allMapPoints.push(clrkEnt);
    var sanJac21 = new MapPoint("San Jacinto & 21st", new Coords(30.28320241470913, -97.73402724722786), null, 0);
    allMapPoints.push(sanJac21);
    var nrthClrk = new MapPoint("North Clark Field", new Coords(30.281772466216733, -97.73384678803943), null, 0);
    allMapPoints.push(nrthClrk);
    var clrkRamp = new MapPoint("Clark Ramp", new Coords(30.28107310437936, -97.73532060793715), null, 0);
    allMapPoints.push(clrkRamp);
    var sthClrk = new MapPoint("South Clark Field", new Coords(30.280570475924044, -97.73492095879394), null, 0);
    allMapPoints.push(sthClrk);
    var sanJacNrthClrk = new MapPoint("San Jacinto & North Clark", new Coords(30.281506884788506, -97.73329428141703), null, 0);
    allMapPoints.push(sanJacNrthClrk);
    var clarkLowerExit = new MapPoint("Clark Lower Exit", new Coords(30.280732120545157, -97.73449327589184), null, 0);
    allMapPoints.push(clarkLowerExit);
    var sanJac20 = new MapPoint("San Jacinto & 20th", new Coords(30.281337017749802, -97.73331799683338), null, 0);
    allMapPoints.push(sanJac20);
    var sanJacWaller = new MapPoint("San Jacinto Waller Creek", new Coords(30.28059169672528, -97.7338353386938), null, 0);
    allMapPoints.push(sanJacWaller);
    var sanJacTrinity = new MapPoint("San Jacinto & Trinity", new Coords(30.280339340053345, -97.73430073967947), null, 0);
    allMapPoints.push(sanJacTrinity);
    var sanJacTriple = new MapPoint("San Jacinto Triple", new Coords(30.280206437171135, -97.73542863144795), null, 0);
    allMapPoints.push(sanJacTriple);
    var caven = new MapPoint("Caven Lacrosse and Sports Center", new Coords(30.280639311461346, -97.73582634606636), null, 0);
    allMapPoints.push(caven);
    var sanJacMLK = new MapPoint("San Jacinto & MLK", new Coords(30.279971542702587, -97.73570056990418), null, 0);
    allMapPoints.push(sanJacMLK);
    var bzsMLK = new MapPoint("Brazos & MLK", new Coords(30.280279735919652, -97.73682078888983), null, 0);
    allMapPoints.push(bzsMLK);
    var spdMLK = new MapPoint("Speedway & MLK", new Coords(30.28058673671753, -97.73786928174528), null, 0);
    allMapPoints.push(spdMLK);
    var spdPCL = new MapPoint("Speedway at PCL", new Coords(30.282478919889876, -97.73753662191079), null, 0);
    allMapPoints.push(spdPCL);
    //speedrun
    var pclCorner = new MapPoint("PCL Corner", new Coords(30.282033002942747, -97.73831064714977), null, 0);
    allMapPoints.push(pclCorner);
    var wichitaPCL = new MapPoint("Wichita at PCL", new Coords(30.28274176724373, -97.73908312334606), null, 0);
    allMapPoints.push(wichitaPCL);
    var wichita21 = new MapPoint("21st & Wichita", new Coords(30.283584865823265, -97.73901772146759), null, 0);
    allMapPoints.push(wichita21);
    var mlkWichita = new MapPoint("MLK & Wichita", new Coords(30.280988647679543, -97.73929257984838), null, 0);
    allMapPoints.push(mlkWichita);
    var university21 = new MapPoint("21st & University", new Coords(30.283635783003707, -97.73965233342861), null, 0);
    allMapPoints.push(university21);
    var wichita20 = new MapPoint("20th & Wichita", new Coords(30.282431553396584, -97.73912519600033), null, 0);
    allMapPoints.push(wichita20);
    var university20 = new MapPoint("20th & University", new Coords(30.28250104003689, -97.7397689261639), null, 0);
    allMapPoints.push(university20);
    var universitymlk = new MapPoint("MLK & University", new Coords(30.2811622554413, -97.73990840103268), null, 0);
    allMapPoints.push(universitymlk);
    var whitis21 = new MapPoint("21st & Whitis", new Coords(30.283703532253167, -97.7407797175025), null, 0);
    allMapPoints.push(whitis21);
    var whitis20 = new MapPoint("20th & Whitis", new Coords(30.28259483631187, -97.74089650212781), null, 0);
    allMapPoints.push(whitis20);
    var guad21 = new MapPoint("Guadalupe & 21st", new Coords(30.283811287436226, -97.7419145840839), null, 0);
    allMapPoints.push(guad21);
    var guad20 = new MapPoint("Guadalupe & 20th", new Coords(30.282653185805312, -97.74204333011662), null, 0);
    allMapPoints.push(guad20);
    var guadMLK = new MapPoint("Guadalupe & MLK", new Coords(30.281740592090415, -97.74193604175602), null, 0);
    allMapPoints.push(guadMLK);
    var spdInnerCampus = new MapPoint("Speedway & Inner Campus", new Coords(30.284716047981384, -97.73732100233096), null, 0);
    allMapPoints.push(spdInnerCampus);
    var innerCampus22 = new MapPoint("Inner Campus & 22nd", new Coords(30.284905522149252, -97.73846790807946), null, 0);
    allMapPoints.push(innerCampus22);
    var mcCombs21 = new MapPoint("21st at McCombs", new Coords(30.28360382948105, -97.73869414876268), null, 0);
    allMapPoints.push(mcCombs21);
    var university22 = new MapPoint("22nd & University", new Coords(30.284984271685484, -97.7395117812664), null, 0);
    allMapPoints.push(university22);
    var fountain = new MapPoint("Fountain", new Coords(30.283895488322806, -97.73985198134619), null, 0);
    allMapPoints.push(fountain);
    var parlin = new MapPoint("Parlin Hall", new Coords(30.28396149964732, -97.7405230286542), null, 0);
    allMapPoints.push(parlin);
    var parlin22 = new MapPoint("22nd at Parlin Hall", new Coords(30.285077607193685, -97.74042507546845), null, 0);
    allMapPoints.push(parlin22);
    var guad22 = new MapPoint("22nd & Guadalupe", new Coords(30.285026651667106, -97.74179369108127), null, 0);
    allMapPoints.push(guad22);
    var sutton22 = new MapPoint("22nd at Sutton", new Coords(30.28514606931232, -97.74119039763737), null, 0);
    allMapPoints.push(sutton22);
    var arch22 = new MapPoint("22nd & School of Architecture", new Coords(30.285146921170867, -97.74083745452312), null, 0);
    allMapPoints.push(arch22);
    var sRansom = new MapPoint("South Harry Ransom Center", new Coords(30.283991560488346, -97.74095205948284), null, 0);
    allMapPoints.push(sRansom);
    var nRansom = new MapPoint("North Harry Ransom Center", new Coords(30.284616928536128, -97.74089305088451), null, 0);
    allMapPoints.push(nRansom);
    var calhoun = new MapPoint("Calhoun Hall", new Coords(30.284477958203336, -97.74047999069622), null, 0);
    allMapPoints.push(calhoun);
    var sInnerCampus = new MapPoint("South Inner Campus Drive", new Coords(30.285147026863825, -97.73807405414803), null, 0);
    allMapPoints.push(sInnerCampus);
    var mInnerCampus = new MapPoint("Middle Inner Campus Drive", new Coords(30.285584026326156, -97.73795902213429), null, 0);
    allMapPoints.push(mInnerCampus);
    var nInnerCampus = new MapPoint("North Inner Campus Drive", new Coords(30.28651360750213, -97.73837622848258), null, 0);
    allMapPoints.push(nInnerCampus);
    var universityInnerCampus = new MapPoint("Inner Campus Drive & University", new Coords(30.286624781477304, -97.73933109489188), null, 0);
    allMapPoints.push(universityInnerCampus);
    var sMall = new MapPoint("South Mall", new Coords(30.285203903091645, -97.739502166638), null, 0);
    allMapPoints.push(sMall);
    var main = new MapPoint("Main Building", new Coords(30.285505003002633, -97.73945120466672), null, 0);
    allMapPoints.push(main);
    var swCorner = new MapPoint("SouthWest Corner", new Coords(30.28525717468166, -97.74011102808439), null, 0);
    allMapPoints.push(swCorner);
    var nwCorner = new MapPoint("NorthWest Corner", new Coords(30.285576803614198, -97.74007615936719), null, 0);
    allMapPoints.push(nwCorner);
    var seCorner = new MapPoint("SouthEast Corner", new Coords(30.2851506314727, -97.73885575426542), null, 0);
    allMapPoints.push(seCorner);
    var neCorner = new MapPoint("NorthEast Corner", new Coords(30.285458679999564, -97.73882624996625), null, 0);
    allMapPoints.push(neCorner);
    var wMall = new MapPoint("West Mall", new Coords(30.285754191085182, -97.74003033943126), null, 0);
    allMapPoints.push(wMall);
    var eMall = new MapPoint("East Mall", new Coords(30.285660111996123, -97.73880755918903), null, 0);
    allMapPoints.push(eMall);
    var guadWMall = new MapPoint("Guadalupe at West Mall", new Coords(30.285860733638668, -97.74170672006557), null, 0);
    allMapPoints.push(guadWMall);
    var innerCampusWPath = new MapPoint("Inner Campus Drive & West Path", new Coords(30.286657482979173, -97.73981308050105), null, 0);
    allMapPoints.push(innerCampusWPath);
    var cns = new MapPoint("College of Natural Sciences", new Coords(30.286125131572597, -97.73870181635894), null, 0);
    allMapPoints.push(cns);
    var innerCampusEPath = new MapPoint("Inner Campus Drive & East Path", new Coords(30.28659762196803, -97.73895930842437), null, 0);
    allMapPoints.push(innerCampusEPath);
    var innerCampusTurtle = new MapPoint("Inner Campus Drive at Turtle Pond", new Coords(30.286741221539284, -97.74021985453484), null, 0);
    allMapPoints.push(innerCampusTurtle);
    var whitis24 = new MapPoint("24th & Whitis", new Coords(30.287584285750157, -97.74047734660027), null, 0);
    allMapPoints.push(whitis24);
    var guad24 = new MapPoint("Guadalupe & 24th", new Coords(30.287690826316098, -97.74155559462426), null, 0);
    allMapPoints.push(guad24);
    var university24 = new MapPoint("24th & University", new Coords(30.287440687412985, -97.73925157708047), null, 0);
    allMapPoints.push(university24);
    var spdMid = new MapPoint("Midway Speedway", new Coords(30.285514877218045, -97.73720970536924), null, 0);
    allMapPoints.push(spdMid);
    var spd24 = new MapPoint("Speedway & 24th", new Coords(30.287320880403172, -97.73700689052775), null, 0);
    allMapPoints.push(spd24);
    var spdDeanKeaton = new MapPoint("Speedway & Dean Keeton", new Coords(30.28946728028702, -97.73682185783143), null, 0);
    allMapPoints.push(spdDeanKeaton);
    var sanJac23 = new MapPoint("San Jacinto & 23rd", new Coords(30.285260937991943, -97.73371954975755), null, 0);
    allMapPoints.push(sanJac23);
    var sanJac24 = new MapPoint("San Jacinto & 24th", new Coords(30.2870610732551, -97.73355325279863), null, 0);
    allMapPoints.push(sanJac24);
    var sanJacNorthWallerCreek = new MapPoint("San Jacinto & Waller Creek", new Coords(30.285448004822676, -97.73367058980939), null, 0);
    allMapPoints.push(sanJacNorthWallerCreek);
    var wallerCreekBrocket = new MapPoint("Waller Creek at Brocket Theater", new Coords(30.285632138059384, -97.73405106122664), null, 0);
    allMapPoints.push(wallerCreekBrocket);
    var wallerCreek24 = new MapPoint("24th & Waller Creek", new Coords(30.287123725134407, -97.7342254048126), null, 0);
    allMapPoints.push(wallerCreek24);
    var sanJacDeanKeaton = new MapPoint("San Jacinto & Dean Keaton", new Coords(30.2893104272694, -97.73463344625738), null, 0);
    allMapPoints.push(sanJacDeanKeaton);
    var deanKeatonUniversity = new MapPoint("Dean Keaton & University", new Coords(30.289627683427767, -97.73903372189665), null, 0);
    allMapPoints.push(deanKeatonUniversity);
    var deanKeatonWhitis = new MapPoint("Dean Keaton & Whitis", new Coords(30.28972495757492, -97.7402675380435), null, 0);
    allMapPoints.push(deanKeatonWhitis);
    var guadDeanKeaton = new MapPoint("Guadalupe & Dean Keaton", new Coords(30.289817599530167, -97.74139406582975), null, 0);
    allMapPoints.push(guadDeanKeaton);
    var whitis25 = new MapPoint("Whitis & 25th", new Coords(30.288715154588324, -97.74036946198606), null, 0);
    allMapPoints.push(whitis25);
    var guad25 = new MapPoint("Guadalupe & 25th", new Coords(30.288807270116333, -97.74150514534514), null, 0);
    allMapPoints.push(guad25);
    var mlkSantaRita = new MapPoint("MLK & Santa Rita 1", new Coords(30.27966442784572, -97.73455740214219), null, 0);
    allMapPoints.push(mlkSantaRita);
    var redRiverMLK = new MapPoint("Red River & MLK", new Coords(30.278978536391087, -97.7321973630223), null, 0);
    allMapPoints.push(redRiverMLK);
    var bend20 = new MapPoint("20th Bend", new Coords(30.281046973770035, -97.73188086235854), null, 0);
    allMapPoints.push(bend20);
    var sanJacBend = new MapPoint("San Jacinto Bend", new Coords(30.280630047011773, -97.73325415337416), null, 0);
    allMapPoints.push(sanJacBend);
    var sanJacBend20 = new MapPoint("San Jacinto Bend & 20th", new Coords(30.281278598981388, -97.73296447480055), null, 0);
    allMapPoints.push(sanJacBend20);
    var redRiverDedman = new MapPoint("Red River & Robert Dedman", new Coords(30.280206787224788, -97.73043783390852), null, 0);
    allMapPoints.push(redRiverDedman);
    var dedman20 = new MapPoint("20th & Robert Dedman", new Coords(30.28132785776583, -97.73132296288344), null, 0);
    allMapPoints.push(dedman20);
    var dedmanSoccer = new MapPoint("Robert Dedman at Soccer Stadium", new Coords(30.282182942891847, -97.73153753960463), null, 0);
    allMapPoints.push(dedmanSoccer);
    var dedmanClyde = new MapPoint("Robert Dedman & Clyde Littlefield", new Coords(30.283886544360147, -97.73102524469064), null, 0);
    allMapPoints.push(dedmanClyde);
    var dedmanDeloss = new MapPoint("Robert Dedman & Deloss Dodds", new Coords(30.28501220518104, -97.73069801519082), null, 0);
    allMapPoints.push(dedmanDeloss);
    var redRiverClyde = new MapPoint("Red River & Clyde Littlefield", new Coords(30.28319228423984, -97.7279836134092), null, 0);
    allMapPoints.push(redRiverClyde);
    var redRiverDeanKeaton = new MapPoint("Red River & Dean Keaton", new Coords(30.287155021479656, -97.72676202211314), null, 0);
    allMapPoints.push(redRiverDeanKeaton);
    var deanKeatonArts = new MapPoint("Dean Keaton & Musical Arts", new Coords(30.288350127296273, -97.72914382371836), null, 0);
    allMapPoints.push(deanKeatonArts);
    var dedmanTrinity = new MapPoint("Robert Dedman & Trinity", new Coords(30.28751170187163, -97.72987874898844), null, 0);
    allMapPoints.push(dedmanTrinity);
    var dedman24 = new MapPoint("Robert Dedman & 24th", new Coords(30.2868166326147, -97.73012556161994), null, 0);
    allMapPoints.push(dedman24);
    var trinity24 = new MapPoint("24th & Trinity", new Coords(30.287045728191192, -97.73192532386894), null, 0);
    allMapPoints.push(trinity24);
    var trinityDeloss = new MapPoint("Trinity & Deloss Dodds", new Coords(30.285260116578662, -97.73278537805584), null, 0);
    allMapPoints.push(trinityDeloss);
    var trinityArt = new MapPoint("Trinity at Department of Art", new Coords(30.286325542272206, -97.73240450437572), null, 0);
    allMapPoints.push(trinityArt);
    var trinityLot20 = new MapPoint("Trinity at Lot 20", new Coords(30.287859484879686, -97.7317406468266), null, 0);
    allMapPoints.push(trinityLot20);
    var redRiverLBJ = new MapPoint("Red River at LBJ Park", new Coords(30.28601934288004, -97.7271151939701), null, 0);
    allMapPoints.push(redRiverLBJ);
    
    //neighbors of each coord
	spdJstCir.neighbors = [new Neighbor(bzsJstCir, 94.45808686437103), new Neighbor(spdMLK, 127.7696370917502), new Neighbor(spdPCL, 85.37458258256422)];
	bzsJstCir.neighbors = [new Neighbor(spdJstCir, 94.45808686437103), new Neighbor(jstScJstCir, 73.51253242127882), new Neighbor(bzsMLK, 146.27300313738266)];
	jstCir21.neighbors = [new Neighbor(pth21, 90.24735887552046), new Neighbor(jstCirPth, 165.78925473775232), new Neighbor(sanJac21, 58.58046933141907)];
	spd21.neighbors = [new Neighbor(jstSc21, 103.40867002847475), new Neighbor(spdPCL, 110.810541309755), new Neighbor(spdInnerCampus, 139.09738841869452), new Neighbor(mcCombs21, 122.52641870256056)];
	jstSc21.neighbors = [new Neighbor(spd21, 103.40867002847475), new Neighbor(pth21, 76.13814263269514), new Neighbor(spanOakTerr, 111.22211639478458)];
	jstScJstCir.neighbors = [new Neighbor(bzsJstCir, 73.51253242127882), new Neighbor(jstE, 43.04641540963786), new Neighbor(clrkBbl, 16.47571151630995)];
	jstCirPth.neighbors = [new Neighbor(jstCir21, 165.78925473775232), new Neighbor(jstE, 58.65774513549907), new Neighbor(roberts, 108.66638788198884), new Neighbor(clrkBbl, 58.442083106227244), new Neighbor(clrkEnt, 16.103247962936887)];
    pth21.neighbors = [new Neighbor(jstSc21, 76.13814263269514), new Neighbor(jstCir21, 90.24735887552046), new Neighbor(roberts, 60.29731329531085)];
    //more
    jstE.neighbors = [new Neighbor(jstScJstCir, 43.04641540963786), new Neighbor(jstCirPth, 58.65774513549907), new Neighbor(spanOakTerr, 76.95346114667534)];
    spanOakTerr.neighbors = [new Neighbor(jstE, 76.95346114667534), new Neighbor(jstSc21, 111.22211639478458)];
    roberts.neighbors = [new Neighbor(pth21, 60.29731329531085), new Neighbor(jstCirPth, 108.66638788198884)];
    clrkBbl.neighbors = [new Neighbor(jstScJstCir, 16.47571151630995), new Neighbor(jstCirPth, 58.442083106227244), new Neighbor(clrkEnt, 59.61230440114774), new Neighbor(caven, 98.04399350973398)];
    clrkEnt.neighbors = [new Neighbor(clrkBbl, 59.61230440114774), new Neighbor(jstCirPth, 16.103247962936887), new Neighbor(clrkRamp, 75.72284766780919), new Neighbor(nrthClrk, 127.42075477553993)];
    sanJac21.neighbors = [new Neighbor(jstCir21, 58.58046933141907), new Neighbor(sanJacNrthClrk, 201.46833710701694), new Neighbor(sanJac23, 231.05481920703164)];
    nrthClrk.neighbors = [new Neighbor(clrkEnt, 127.42075477553993), new Neighbor(sanJacNrthClrk, 60.786762214362724), new Neighbor(clarkLowerExit, 131.43231976004293)];
    clrkRamp.neighbors = [new Neighbor(clrkEnt, 75.72284766780919), new Neighbor(sthClrk, 67.87249740388108)];
    sthClrk.neighbors = [new Neighbor(clrkRamp, 67.87249740388108), new Neighbor(clarkLowerExit, 44.87920574233434), new Neighbor(sanJacTriple, 63.43526345495194)];
    sanJacNrthClrk.neighbors = [new Neighbor(nrthClrk, 60.786762214362724), new Neighbor(sanJac21, 201.46833710701694), new Neighbor(sanJac20, 19.046445245354757)];
    clarkLowerExit.neighbors = [new Neighbor(nrthClrk, 131.43231976004293), new Neighbor(sthClrk, 44.87920574233434), new Neighbor(sanJacTrinity, 47.480278749762874)];
    sanJac20.neighbors = [new Neighbor(sanJacNrthClrk, 19.046445245354757), new Neighbor(sanJacWaller, 96.73244610936969), new Neighbor(sanJacBend20, 34.60106756566741)];
    sanJacWaller.neighbors = [new Neighbor(sanJac20, 96.73244610936969), new Neighbor(sanJacTrinity, 52.82830111068909), new Neighbor(sanJacBend, 56.03323187802018)];
    sanJacTrinity.neighbors = [new Neighbor(sanJacWaller, 52.82830111068909), new Neighbor(clarkLowerExit, 47.480278749762874), new Neighbor(sanJacTriple, 109.43129060842138), new Neighbor(mlkSantaRita, 79.07866001384593)]
    sanJacTriple.neighbors = [new Neighbor(sanJacTrinity, 109.43129060842138), new Neighbor(sthClrk, 63.43526345495194), new Neighbor(caven, 61.51250641341797), new Neighbor(sanJacMLK, 36.97489127332752)];
    caven.neighbors = [new Neighbor(sanJacTriple, 61.51250641341797), new Neighbor(clrkBbl, 98.04399350973398)];
    sanJacMLK.neighbors = [new Neighbor(sanJacTriple, 36.97489127332752), new Neighbor(bzsMLK, 113.02205724617478), new Neighbor(mlkSantaRita, 115.09064003642133)];
    bzsMLK.neighbors = [new Neighbor(sanJacMLK, 113.02205724617478), new Neighbor(bzsJstCir, 146.27300313738266), new Neighbor(spdMLK, 106.42978969753153)];
    spdMLK.neighbors = [new Neighbor(spdJstCir, 127.7696370917502), new Neighbor(bzsMLK, 106.42978969753153), new Neighbor(mlkWichita, 143.95309293636697)];
    spdPCL.neighbors = [new Neighbor(spdJstCir, 85.37458258256422), new Neighbor(spd21, 110.810541309755), new Neighbor(pclCorner, 89.44540102041628)];
    //speedrun new Neighbor(PUTNAMEHERE, Infinity)
    pclCorner.neighbors = [new Neighbor(spdPCL, 89.44540102041628), new Neighbor(wichitaPCL, 108.34836840180121)];
    wichitaPCL.neighbors = [new Neighbor(pclCorner, 108.34836840180121), new Neighbor(wichita20, 34.768880107275585), new Neighbor(wichita21, 94.0636463795341)];
    wichita21.neighbors = [new Neighbor(mcCombs21, 31.176219407284368), new Neighbor(university21, 61.267247162771085), new Neighbor(wichitaPCL, 94.0636463795341)];
    mlkWichita.neighbors = [new Neighbor(wichita20, 161.42747486466854), new Neighbor(universitymlk, 62.274350917223956), new Neighbor(spdMLK, 143.95309293636697)];
    university21.neighbors = [new Neighbor(wichita21, 61.267247162771085), new Neighbor(university20, 126.81526323226986), new Neighbor(fountain, 34.70060370533954), new Neighbor(whitis21, 108.63613210215598), new Neighbor(university22, 150.7198804723286)];
    wichita20.neighbors = [new Neighbor(wichitaPCL, 34.768880107275585), new Neighbor(university20, 62.36331653333051), new Neighbor(mlkWichita, 161.42747486466854)];
    university20.neighbors = [new Neighbor(wichita20, 62.36331653333051), new Neighbor(university21, 126.81526323226986), new Neighbor(whitis20, 108.89545116905866), new Neighbor(universitymlk, 149.63472289228858)];
    universitymlk.neighbors = [new Neighbor(mlkWichita, 62.274350917223956), new Neighbor(university20, 149.63472289228858), new Neighbor(guadMLK, 205.2759477733093)];
    whitis21.neighbors = [new Neighbor(guad21, 109.75069870664798), new Neighbor(whitis20, 123.92900187224693), new Neighbor(university21, 108.63613210215598)];
    whitis20.neighbors = [new Neighbor(whitis21, 123.92900187224693), new Neighbor(university20, 108.89545116905866), new Neighbor(guad20, 110.43550882508359)];
    guad21.neighbors = [new Neighbor(whitis21, 109.75069870664798), new Neighbor(guad22, 135.79191824997739), new Neighbor(guad20, 129.51198145665973), new Neighbor(sRansom, 94.67732197263346)];
    guad20.neighbors = [new Neighbor(guad21, 129.51198145665973), new Neighbor(whitis20, 110.43550882508359), new Neighbor(guadMLK, 102.11166115640461)];
    guadMLK.neighbors = [new Neighbor(guad20, 102.11166115640461), new Neighbor(universitymlk, 205.2759477733093)];
    spdInnerCampus.neighbors = [new Neighbor(spd21, 139.09738841869452), new Neighbor(spdMid, 89.56653574316908), new Neighbor(innerCampus22, 112.2488166948598)];
    innerCampus22.neighbors = [new Neighbor(spdInnerCampus, 112.2488166948598), new Neighbor(sInnerCampus, 46.43437681339243), new Neighbor(university22, 100.72712399709233), new Neighbor(mcCombs21, 146.52672528099794)];
    mcCombs21.neighbors = [new Neighbor(spd21, 122.52641870256056), new Neighbor(wichita21, 31.176219407284368), new Neighbor(innerCampus22, 146.52672528099794)];
    university22.neighbors = [new Neighbor(sMall, 24.466718872946718), new Neighbor(innerCampus22, 100.72712399709233), new Neighbor(parlin22, 88.40530060364613), new Neighbor(university21, 150.7198804723286), new Neighbor(fountain, 125.53721024118825)];
    fountain.neighbors = [new Neighbor(university21, 34.70060370533954), new Neighbor(university22, 125.53721024118825), new Neighbor(parlin, 64.92397098397512)];
    parlin.neighbors = [new Neighbor(fountain, 64.92397098397512), new Neighbor(calhoun, 57.64056796983681), new Neighbor(sRansom, 41.3776092371811)];
    parlin22.neighbors = [new Neighbor(arch22, 40.384870862284835), new Neighbor(university22, 88.40530060364613), new Neighbor(calhoun, 66.96102456864857)];
    guad22.neighbors = [new Neighbor(guad21, 135.79191824997739), new Neighbor(guadWMall, 93.22520363926208), new Neighbor(sutton22, 59.49711601028824)];
    sutton22.neighbors = [new Neighbor(guad22, 59.49711601028824), new Neighbor(nRansom, 65.47246923736903), new Neighbor(arch22, 33.92760462841037)];
    arch22.neighbors = [new Neighbor(sutton22, 33.92760462841037), new Neighbor(parlin22, 40.384870862284835)];
    sRansom.neighbors = [new Neighbor(guad21, 94.67732197263346), new Neighbor(parlin, 41.3776092371811), new Neighbor(nRansom, 69.84636755675538)];
    nRansom.neighbors = [new Neighbor(sRansom, 69.84636755675538), new Neighbor(calhoun, 42.61383404982532), new Neighbor(sutton22, 65.47246923736903)];
    calhoun.neighbors = [new Neighbor(nRansom, 42.61383404982532), new Neighbor(parlin22, 66.96102456864857), new Neighbor(parlin, 57.64056796983681)];
    sInnerCampus.neighbors = [new Neighbor(innerCampus22, 46.43437681339243), new Neighbor(mInnerCampus, 49.88747488737325)];
    mInnerCampus.neighbors = [new Neighbor(sInnerCampus, 49.88747488737325), new Neighbor(nInnerCampus, 110.98013277423404), new Neighbor(spdMid, 72.43965683993848), new Neighbor(eMall, 82.00575672898773)];
    nInnerCampus.neighbors = [new Neighbor(mInnerCampus, 110.98013277423404), new Neighbor(innerCampusEPath, 56.82402676960308)];
    universityInnerCampus.neighbors = [new Neighbor(innerCampusEPath, 35.86595720667265), new Neighbor(innerCampusWPath, 46.47406645511165), new Neighbor(university24, 91.14730163498577)];
    sMall.neighbors = [new Neighbor(university22, 24.466718872946718), new Neighbor(seCorner, 62.42019642212262), new Neighbor(swCorner, 58.827822584267814), new Neighbor(main, 33.874388352037954)];
    main.neighbors = [new Neighbor(neCorner, 60.29591820822152), new Neighbor(nwCorner, 60.604350569165234), new Neighbor(sMall, 33.874388352037954)];
    swCorner.neighbors = [new Neighbor(nwCorner, 35.73845720058328), new Neighbor(sMall, 58.827822584267814)];
    nwCorner.neighbors = [new Neighbor(swCorner, 35.73845720058328), new Neighbor(main, 60.604350569165234), new Neighbor(wMall, 20.231938064572727)];
    seCorner.neighbors = [new Neighbor(neCorner, 34.408890255242504), new Neighbor(sMall, 62.42019642212262)];
    neCorner.neighbors = [new Neighbor(seCorner, 34.408890255242504), new Neighbor(main, 60.29591820822152), new Neighbor(eMall, 22.495172644265555)];
    wMall.neighbors = [new Neighbor(nwCorner, 20.231938064572727), new Neighbor(innerCampusWPath, 102.69985031476789), new Neighbor(guadWMall, 161.58074319388703)];
    eMall.neighbors = [new Neighbor(neCorner, 22.495172644265555), new Neighbor(cns, 52.75427136562074), new Neighbor(mInnerCampus, 82.00575672898773)];
    guadWMall.neighbors = [new Neighbor(guad22, 93.22520363926208), new Neighbor(guad24, 204.24226891494985), new Neighbor(wMall, 161.58074319388703)];
    innerCampusWPath.neighbors = [new Neighbor(innerCampusTurtle, 40.1972641277276), new Neighbor(universityInnerCampus, 46.47406645511165), new Neighbor(wMall, 102.69985031476789)];
    cns.neighbors = [new Neighbor(innerCampusEPath, 58.13030842157522), new Neighbor(eMall, 52.75427136562074)];
    innerCampusEPath.neighbors = [new Neighbor(nInnerCampus, 56.82402676960308), new Neighbor(universityInnerCampus, 35.86595720667265), new Neighbor(cns, 58.13030842157522)];
    innerCampusTurtle.neighbors = [new Neighbor(whitis24, 97.05854900239183), new Neighbor(innerCampusWPath, 40.1972641277276)];
    whitis24.neighbors = [new Neighbor(university24, 118.90648222525516), new Neighbor(innerCampusTurtle, 97.05854900239183), new Neighbor(guad24, 104.32280285272607), new Neighbor(whitis25, 126.31416329897998)];
    guad24.neighbors = [new Neighbor(guadWMall, 204.24226891494985), new Neighbor(guad25, 124.37652955844943), new Neighbor(whitis24, 104.32280285272607)];
    university24.neighbors = [new Neighbor(universityInnerCampus, 91.14730163498577), new Neighbor(whitis24, 118.90648222525516), new Neighbor(spd24, 216.18255017095248), new Neighbor(deanKeatonUniversity, 244.3542607801748)];
    spdMid.neighbors = [new Neighbor(mInnerCampus, 72.43965683993848), new Neighbor(spdInnerCampus, 89.56653574316908), new Neighbor(sanJac23, 336.68725513765645), new Neighbor(spd24, 201.98642649628135)];
    spd24.neighbors = [new Neighbor(spdMid, 201.98642649628135), new Neighbor(wallerCreek24, 268.2703412850944), new Neighbor(spdDeanKeaton, 239.59721532432573), new Neighbor(university24, 216.18255017095248)];
    spdDeanKeaton.neighbors = [new Neighbor(deanKeatonUniversity, 213.35949842766158), new Neighbor(sanJacDeanKeaton, 211.08044786084758), new Neighbor(spd24, 239.59721532432573)];
    sanJac23.neighbors = [new Neighbor(spdMid, 336.68725513765645), new Neighbor(sanJacNorthWallerCreek, 21.34939457210355), new Neighbor(trinityDeloss, 89.79935480681466), new Neighbor(sanJac21, 231.05481920703164)];
    sanJac24.neighbors = [new Neighbor(sanJacDeanKeaton, 271.0717527248319), new Neighbor(wallerCreek24, 64.98621513526302), new Neighbor(sanJacNorthWallerCreek, 179.91984958333111)];
    sanJacNorthWallerCreek.neighbors = [new Neighbor(wallerCreekBrocket, 179.91984958333111), new Neighbor(sanJac23, 179.91984958333111), new Neighbor(sanJac24, 179.91984958333111)];
    wallerCreekBrocket.neighbors = [new Neighbor(sanJacNorthWallerCreek, 41.925847597971796), new Neighbor(wallerCreek24, 166.88632604748992)];
    wallerCreek24.neighbors = [new Neighbor(sanJac24, 64.98621513526302), new Neighbor(spd24, 268.2703412850944), new Neighbor(wallerCreekBrocket, 166.88632604748992)];
    sanJacDeanKeaton.neighbors = [new Neighbor(spdDeanKeaton, 211.08044786084758), new Neighbor(deanKeatonArts, 538.4020828294505), new Neighbor(sanJac24, 271.0717527248319)];
    deanKeatonUniversity.neighbors = [new Neighbor(spdDeanKeaton, 213.35949842766158), new Neighbor(deanKeatonWhitis, 119.09126951450592), new Neighbor(university24, 244.3542607801748)];
    deanKeatonWhitis.neighbors = [new Neighbor(deanKeatonUniversity, 119.09126951450592), new Neighbor(guadDeanKeaton, 108.77496025885287), new Neighbor(whitis25, 112.83689169454838)];
    guadDeanKeaton.neighbors = [new Neighbor(deanKeatonWhitis, 108.77496025885287), new Neighbor(guad25, 112.97504683811744)];
    whitis25.neighbors = [new Neighbor(deanKeatonWhitis, 112.83689169454838), new Neighbor(guad25, 109.64670996251982), new Neighbor(whitis24, 126.31416329897998)];
    guad25.neighbors = [new Neighbor(guadDeanKeaton, 112.97504683811744), new Neighbor(whitis25, 109.64670996251982), new Neighbor(guad24, 124.37652955844943)];
    mlkSantaRita.neighbors = [new Neighbor(sanJacTrinity, 79.07866001384593), new Neighbor(sanJacMLK, 115.09064003642133), new Neighbor(redRiverMLK, 239.38102630382113)];
    redRiverMLK.neighbors = [new Neighbor(mlkSantaRita, 239.38102630382113), new Neighbor(redRiverDedman, 217.4989399977454)];
    bend20.neighbors = [new Neighbor(dedman20, 62.08076462571927), new Neighbor(sanJacBend20, 107.31268035235381)];
    sanJacBend.neighbors = [new Neighbor(sanJacBend20, 77.38086461387869), new Neighbor(sanJacWaller, 56.03323187802018)];
    sanJacBend20.neighbors = [new Neighbor(sanJacBend, 77.38086461387869), new Neighbor(bend20, 107.31268035235381), new Neighbor(sanJac20, 34.60106756566741)];
    redRiverDedman.neighbors = [new Neighbor(redRiverMLK, 217.4989399977454), new Neighbor(dedman20, 151.04438609854938), new Neighbor(redRiverClyde, 407.57032628013803)];
    dedman20.neighbors = [new Neighbor(bend20, 62.08076462571927), new Neighbor(dedmanSoccer, 97.39700418686861), new Neighbor(redRiverDedman, 151.04438609854938)];
    dedmanSoccer.neighbors = [new Neighbor(dedman20, 97.39700418686861), new Neighbor(dedmanClyde, 195.93389635725475)];
    dedmanClyde.neighbors = [new Neighbor(dedmanSoccer, 195.93389635725475), new Neighbor(dedmanDeloss, 129.19584666247246), new Neighbor(redRiverClyde, 302.43020433497696)];
    dedmanDeloss.neighbors = [new Neighbor(dedmanClyde, 129.19584666247246), new Neighbor(trinityDeloss, 202.54155119140177), new Neighbor(dedman24, 208.2690816219273)];
    redRiverClyde.neighbors = [new Neighbor(redRiverDedman, 407.57032628013803), new Neighbor(dedmanClyde, 302.43020433497696), new Neighbor(redRiverLBJ, 325.5904110468082)];
    redRiverDeanKeaton.neighbors = [new Neighbor(redRiverLBJ, 130.90205600787704), new Neighbor(deanKeatonArts, 264.7969205241255)];
    deanKeatonArts.neighbors = [new Neighbor(sanJacDeanKeaton, 538.4020828294505), new Neighbor(dedmanTrinity, 117.05423929538534), new Neighbor(redRiverDeanKeaton, 264.7969205241255)];
    dedmanTrinity.neighbors = [new Neighbor(deanKeatonArts, 117.05423929538534), new Neighbor(trinityLot20, 183.11406315398966), new Neighbor(dedman24, 80.93037690933252)];
    dedman24.neighbors = [new Neighbor(dedmanTrinity, 80.93037690933252), new Neighbor(trinity24, 174.87276800374576), new Neighbor(redRiverLBJ, 302.67973760826305), new Neighbor(dedmanDeloss, 208.2690816219273)];
    trinity24.neighbors = [new Neighbor(trinityLot20, 92.31000855156293), new Neighbor(dedman24, 174.87276800374576), new Neighbor(trinityArt, 92.46089911886548)];
    trinityDeloss.neighbors = [new Neighbor(sanJac23, 89.79935480681466), new Neighbor(trinityArt, 124.12507793160297), new Neighbor(dedmanDeloss, 202.54155119140177)];
    trinityArt.neighbors = [new Neighbor(trinityDeloss, 124.12507793160297), new Neighbor(trinity24, 92.46089911886548)];
    trinityLot20.neighbors = [new Neighbor(trinity24, 92.31000855156293), new Neighbor(dedmanTrinity, 183.11406315398966)];
    redRiverLBJ.neighbors = [new Neighbor(redRiverClyde, 325.5904110468082), new Neighbor(dedman24, 302.67973760826305), new Neighbor(redRiverDeanKeaton, 130.90205600787704)];
    
	//console.log("lmfao");
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: campusCenter.lat, lng: campusCenter.lng},
        zoom: 16,
        mapTypeId: 'satellite',
        fullscreenControl: false
    });

    startMarker = new google.maps.Marker({
        position: {lat: 0, lng: 0},
        map: map,
        title: 'what are you doing here?'
    });

    google.maps.event.addListener(map, "click", function (e) {
        // console.log(e.latLng.lat());
        // console.log(e.latLng.lng());
        startMarker.setMap(null);
        startMarker = new google.maps.Marker({
            position: {lat: e.latLng.lat(), lng: e.latLng.lng()},
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'start run here'
        });
        startMapPoint.coords.lat = e.latLng.lat();
        startMapPoint.coords.lng = e.latLng.lng();
        //find closest starting loc - with many points can be faster if narrowed down with subsections
        //instead of snapping to a starting location, create their chosen location with neighbors as two closest vertices
        //  DO NOT FORGET TO ASSIGN NEIGHBORS TO BOTH THE NEW LOCATION AND THE TWO CLOSEST!!!
        //  do this on calculate
        //add marker with start label
        //feature: type in building names or building codes
    });
    
    var sideNavDiv = document.createElement('div');
    var sideNav = new RouteDiv(sideNavDiv);
    sideNavDiv.index = 2;
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(sideNavDiv);
    
    var buttonDiv = document.createElement('div');
    var button = new SideNavDiv(buttonDiv);
    buttonDiv.index = 1;
    buttonDiv.style['padding-top'] = '10px';
    buttonDiv.style['padding-right'] = '10px';
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(buttonDiv);
}

function SideNavDiv(buttonDiv) {

    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#0ff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to modify route';
    buttonDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    var controlText = document.createElement('div');
    controlText.id = "routebuttondiv";
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = '\&#171 Route';
    controlUI.appendChild(controlText);

    // Setup the click event listeners: simply set the map to Chicago.
    controlUI.addEventListener('click', function() {
        document.getElementById("routenav").style.width = sideNavVisible ? "0px" : "250px";
        sideNavVisible = !sideNavVisible;
        document.getElementById("routebuttondiv").innerHTML = sideNavVisible ? "Close \&#187" : "\&#171 Route";
    });
}

function RouteDiv(sideNavDiv){
    // Set CSS for the control border.
    var nav = document.createElement('div');
    nav.className = "sidenav";
    nav.id = "routenav";
    nav.display = "block";
    nav.align = "center";
    sideNavDiv.appendChild(nav);

    // var loopCheckbox = document.createElement("input");
    // loopCheckbox.className = "bigcheckbox";
    // loopCheckbox.type = "checkbox";
    // loopCheckbox.id = "loopcheckbox";
    // loopCheckbox.checked = "true";
    // nav.appendChild(loopCheckbox);
    // loopCheckbox.addEventListener('click', function() {
    //     loops = loopCheckbox.checked;
    // });

    // var loopLabel = document.createElement("label");
    // loopLabel.className = "funtext";
    // loopLabel.for = "loopcheckbox";
    // loopLabel.innerText = "Loop";
    // nav.appendChild(loopLabel);

    // nav.appendChild(document.createElement('br'));

    // var linearCheckbox = document.createElement("input");
    // linearCheckbox.className = "bigcheckbox";
    // linearCheckbox.type = "checkbox";
    // linearCheckbox.id = "linearCheckbox";
    // linearCheckbox.checked = "true";
    // nav.appendChild(linearCheckbox);
    // linearCheckbox.addEventListener('click', function() {
    //     linear = linearCheckbox.checked;
    // });

    // var linearLabel = document.createElement("label");
    // linearLabel.className = "funtext";
    // linearLabel.for = "linearcheckbox";
    // linearLabel.innerText = "Linear";
    // nav.appendChild(linearLabel);
    
    nav.appendChild(document.createElement('br'));
    nav.appendChild(document.createElement('br'));

    var distanceLabel = document.createElement("label");
    distanceLabel.className = "smallfuntext";
    distanceLabel.innerText = "Distance in miles:";
    nav.appendChild(distanceLabel);

    nav.appendChild(document.createElement('br'));

    var distanceBox = document.createElement('input');
    distanceBox.className = "numberbox";
    distanceBox.id = "distancebox";
    distanceBox.type = "number";
    distanceBox.min = "0";
    nav.appendChild(distanceBox);

    nav.appendChild(document.createElement('br'));
    
    var calculateRouteButton = document.createElement("button");
    var buttonSpan = document.createElement("span");
    buttonSpan.innerText = "Calculate";
    calculateRouteButton.appendChild(buttonSpan);
    calculateRouteButton.className = "animatebutton";
    nav.appendChild(calculateRouteButton);
    
    calculateRouteButton.addEventListener('click', function() {
        let boxValue = document.getElementById("distancebox").value;
        if(startMarker.position.lat() == 0 && startMarker.position.lng() == 0){
            alert("Specify a start location by clicking on the map!");
            return;
        }
        else if(boxValue == 0){
            alert("You ran 0 miles in 0 seconds!\nCheck your distance field :)");
            return;
        }
        else if(boxValue < 0){
            boxValue *= -1;
        }
        requestedDistance = boxValue * 1609.34;
        linkStartToClosestTwoPoints();
        calculate();
    });

    nav.appendChild(document.createElement('br'));
    nav.appendChild(document.createElement('br'));

    var distanceLabel = document.createElement("label");
    distanceLabel.className = "smallfuntext";
    distanceLabel.innerText = "Pick Route:";
    nav.appendChild(distanceLabel);

    routeOptions = document.createElement('div');
    routeOptions.className = "routelistdiv";
    routeOptions.id = "routeOptions";
    routeOptions.display = "block";
    routeOptions.align = "left";
    nav.appendChild(routeOptions);

    var noPathsYet = document.createElement("label");
    noPathsYet.className = "smallfuntext";
    noPathsYet.innerText = "click \"Calculate\" to find routes";
    routeOptions.appendChild(noPathsYet);
}

function linkStartToClosestTwoPoints(){
    if(startMapPoint.neighbors != null){
        for(let neighbor of startMapPoint.neighbors){
            neighbor.dest.neighbors.pop(); //removes the last entry because it will have been the start location last added
        }
    }
    startMapPoint.neighbors = []; //get some new neighbors

    //get two closest MapPoints
    var closestMapPoint = allMapPoints[0];
    var cDist = getDistance(startMapPoint.coords, closestMapPoint.coords);
    var secondClosestMapPoint = allMapPoints[1];
    var scDist = getDistance(startMapPoint.coords, secondClosestMapPoint.coords);
    if(cDist > scDist){
        var temp = closestMapPoint;
        closestMapPoint = secondClosestMapPoint;
        secondClosestMapPoint = temp;
        temp = cDist;
        cDist = scDist;
        scDist = temp;
    }
    for(let mapPoint of allMapPoints){
        var currentDistance = getDistance(startMapPoint.coords, mapPoint.coords);
        if(currentDistance < cDist){
            closestMapPoint = mapPoint;
            cDist = currentDistance;
        }
        else if(currentDistance < scDist && mapPoint != closestMapPoint){
            secondClosestMapPoint = mapPoint;
            scDist = currentDistance;
        }
    }

    //attach start to two other points
    startMapPoint.neighbors = [new Neighbor(closestMapPoint, cDist), new Neighbor(secondClosestMapPoint, scDist)];
    //attach two other points to start
    closestMapPoint.neighbors.push(new Neighbor(startMapPoint, cDist));
    secondClosestMapPoint.neighbors.push(new Neighbor(startMapPoint, scDist));
}

function calculate(){
    loopPaths = [];
    multiLoopPaths = [];
    multiLoopMultipliers = [];
    straightPaths = [];
    for(let neighbor of startMapPoint.neighbors){
        startMapPoint.visited = 1;
        var beginPath = new Path([startMapPoint, neighbor.dest], neighbor.distance);

        //gets loops, repeated loops, linear
        generatePaths(startMapPoint, neighbor.dest, beginPath, neighbor.distance);
        //gets combination loops
        //write method here
        
        setUnvisited(allMapPoints);
    }
    //sort loops
    loopPaths.sort(function(a, b){
        return Math.abs(a.totalDistance - requestedDistance) - Math.abs(b.totalDistance - requestedDistance);
    });
    //sort repeated loops
    multiLoopPaths.sort(function(a, b){
        return (Math.abs((a.totalDistance - requestedDistance) * Math.round(requestedDistance / a.totalDistance))) - (Math.abs((b.totalDistance - requestedDistance) * Math.round(requestedDistance / b.totalDistance)));
    });
    
    //sort straight paths
    straightPaths.sort(function(a, b){
        Math.abs(a.totalDistance - requestedDistance) - Math.abs(b.totalDistance - requestedDistance);
    });

    //fill in multipliers
    for(let path of multiLoopPaths){
        multiLoopMultipliers.push(Math.round(requestedDistance / path.totalDistance));
    }

    // console.log(loopPaths.length);
    // console.log(multiLoopPaths.length);
    // console.log(straightPaths.length);
    // printAllPaths();

    //remove all existing children
    while(routeOptions.firstChild) {
        routeOptions.removeChild(routeOptions.lastChild);
    }

    //add children as div elements
    if(loopPaths.length + multiLoopPaths.length + straightPaths.length > 0){
        for(let path of loopPaths){
            var route = document.createElement('div');
            route.className = "routediv";
            route.style.setProperty("background-color", "#A0FF88");

            var routeText = document.createElement('label');
            routeText.className = "routedivtext";
            routeText.innerText = (Math.round(1000 * (path.totalDistance / 1609.34)) / 1000) + " miles\nLoop";
            route.appendChild(routeText);

            routeOptions.appendChild(route);

            route.addEventListener('click', function() {
                createPolyLines(path);
            });
        }
        for(let i = 0; i < multiLoopPaths.length; i++){
            var route = document.createElement('div');
            route.className = "routediv";
            route.style.setProperty("background-color", "#01C000");

            var routeText = document.createElement('label');
            routeText.className = "routedivtext";
            routeText.innerText = (Math.round(100 * ((multiLoopPaths[i].totalDistance * multiLoopMultipliers[i]) / 1609.34)) / 100) + " miles\nLoop x" + multiLoopMultipliers[i];
            route.appendChild(routeText);

            routeOptions.appendChild(route);

            route.addEventListener('click', function() {
                createPolyLines(multiLoopPaths[i]);
            });
        }
        for(let path of straightPaths){
            var route = document.createElement('div');
            route.className = "routediv";
            route.style.setProperty("background-color", "#E19CFF");

            var routeText = document.createElement('label');
            routeText.className = "routedivtext";
            routeText.innerText = (Math.round(100 * (path.totalDistance / 1609.34)) / 100) + " miles\nLinear";
            route.appendChild(routeText);

            routeOptions.appendChild(route);

            route.addEventListener('click', function() {
                createPolyLines(path);
            });
        }
    }
    else{
        var noPaths = document.createElement("label");
        noPaths.className = "smallfuntext";
        str = "no valid paths found :(\ntry factors of the distance\n";
        var requestedMiles = requestedDistance / 1609.34;
        str += requestedMiles + " / " + 2 + " = " + (requestedMiles / 2) + "\n";
        str += requestedMiles + " / " + 3 + " = " + (requestedMiles / 3) + "\n";
        str += requestedMiles + " / " + 5 + " = " + (requestedMiles / 5) + "\n";
        noPaths.innerText = str;
        routeOptions.appendChild(noPaths);
    }
}

function createPolyLines(path){
    if(thePolyLine != null){
        thePolyLine.setMap(null);
    }

    var coordsList = [];
    for(let mapPoint of path.mapPointArray){
        coordsList.push({lat: mapPoint.coords.lat, lng: mapPoint.coords.lng});
    }
    //CREATES DASHED LINES, MAYBE USE FOR UT BORDER
    // var lineSymbol = {
    //     path: 'M 0,-1 0,1',
    //     strokeOpacity: 1,
    //     scale: 4
    // };
    var theRoute = new google.maps.Polyline({
        path: coordsList,
        geodesic: true,
        strokeColor: '#FF0000',
        // icons: [{
        //     icon: lineSymbol,
        //     offset: '0',
        //     repeat: '20px'
        // }],
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    
    theRoute.setMap(map);
    thePolyLine = theRoute;
}

function Coords(lat, lng){
	this.lat = lat;
	this.lng = lng;
}

function Neighbor(dest, distance){
	this.dest = dest;
	this.distance = distance;
}

function MapPoint(name, coords, neighbors, visited){
	this.name = name;
	this.coords = coords;
	this.neighbors = neighbors;
	this.visited = visited;
}

function setUnvisited(mapPoints){
	for(let mapPoint of mapPoints){
		mapPoint.visited = 0;
	}
}

function generatePaths(start, current, path, distanceJustTravelled){
	//made full loop, stop
	if(current == start){
        //greater than 3 so that there are no "line" loops
        if(loops && path.mapPointArray.length > 3 && !isDuplicatePath(path)){
            var mult = requestedDistance / path.totalDistance;
            if(mult < 1.5){
                loopPaths.push(getPathCopy(path));
            }
            else{
                multiLoopPaths.push(getPathCopy(path));
            }
        }
	}
	//distance exceeded without loop
	else if(path.totalDistance > requestedDistance){
        if(linear){
            //add this path and one right before it because one may be closer
            if(current != start){ //to avoid dups with loops
                straightPaths.push(getPathCopy(path));
                var temp = path.mapPointArray.pop();
                path.totalDistance -= distanceJustTravelled;
                straightPaths.push(getPathCopy(path));
                path.mapPointArray.push(temp);
                path.totalDistance += distanceJustTravelled;
            }
        }
	}
	//otherwise not finished, check unvisited options
	else{
        for(let neighbor of current.neighbors){
            if((!neighbor.dest.visited || neighbor.dest == start) && (linear || (loops && getDistance(current.coords, neighbor.dest.coords) * 2 < requestedDistance))){
                var curStraightDistance = getDistance(start.coords, current.coords);
                var neighborStraightDistance = getDistance(start.coords, neighbor.dest.coords);
                if((path.totalDistance * 3 > requestedDistance || curStraightDistance < neighborStraightDistance)
                    && (((requestedDistance / 4) * 3) > path.totalDistance || curStraightDistance > neighborStraightDistance)){
                    current.visited = 1;
                    path.mapPointArray.push(neighbor.dest);
                    path.totalDistance += neighbor.distance;
                    //recursive call
                    generatePaths(start, neighbor.dest, path, neighbor.distance);
                    //
                    //ANOTHER CALL WITH THIS NODE AS START TO FORM SUBLOOPS AFTER A STRAIGHT PATH
                    //
                    current.visited = 0;
                    path.mapPointArray.pop();
                    path.totalDistance -= neighbor.distance;
                }
			}
        }
    }
    return; //needed?
}

function printAllPaths(){
    console.log(loopPaths.length);
    console.log(multiLoopPaths.length);
    console.log(straightPaths.length);

    console.log("\n\nLoop Paths:");
    for(let path of loopPaths){
        printPath(path);
        console.log(path.totalDistance);
    }

    console.log("\n\nMulti Loop Paths:");
    for(let i = 0; i < multiLoopPaths.length; i++){
        printPath(multiLoopPaths[i]);
        // console.log(multiLoopPaths[i].totalDistance + " meters x " + multiLoopMultipliers[i] + " = " + (multiLoopPaths[i].totalDistance * multiLoopMultipliers[i] / 1609.34) + " miles");
        console.log(multiLoopPaths[i].totalDistance + " meters x " + Math.round(multiLoopMultipliers[i]) + " = " + (multiLoopPaths[i].totalDistance * Math.round(multiLoopMultipliers[i]) / 1609.34) + " miles");
    }

    console.log("\n\nStraight Paths:");
    for(let path of straightPaths){
        printPath(path);
        console.log(path.totalDistance);
    }
}

function Path(mapPointArray, totalDistance){
	this.mapPointArray = mapPointArray;
	this.totalDistance = totalDistance;
}

function printPath(path){
    var str = "";
    for(let point of path.mapPointArray){
        str += point.name + ", ";
    }
    str += "END";
    console.log(str);
}

function getPathCopy(path){
    copy = [];
	for(let i = 0; i < path.mapPointArray.length; i++){
        copy.push(path.mapPointArray[i]);
	}
    return new Path(copy, path.totalDistance);
}

function isDuplicatePath(path){
    for(let existingLoop of loopPaths){
        if(arePathsEqual(path, existingLoop)){
            return 1;
        }
    }
    for(let existingLoop of multiLoopPaths){
        if(arePathsEqual(path, existingLoop)){
            return 1;
        }
    }
    return 0;
}

function arePathsEqual(path1, path2){
    if(path1.mapPointArray.length != path2.mapPointArray.length){
        return 0;
    }
    path1.mapPointArray = path1.mapPointArray.reverse();
    for(let i = 0; i < path1.length; i++){
        if(path1.mapPointArray[i] != path2.mapPointArray[i]){
            path1.mapPointArray = path1.mapPointArray.reverse();
            return 0;
        }
    }
    path1.mapPointArray = path1.mapPointArray.reverse();
    return 1;
}

var rad = function(x) {
	return x * Math.PI / 180;
};

var getDistance = function(p1, p2) {
	var R = 6378137; // Earth’s mean radius in meter
	var dLat = rad(p2.lat - p1.lat);
	var dLong = rad(p2.lng - p1.lng);
	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
	Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
	Math.sin(dLong / 2) * Math.sin(dLong / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c;
	return d; // returns the distance in meter
};