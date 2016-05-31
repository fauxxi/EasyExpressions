
#include expressions.jsxinc

//STANDARD ADOBE DOCKABLE SNIPPET
//make window dockable
{
function myScript(thisObj){
    function myScript_buildUI(thisObj){
        var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette","My Window", undefined, {preferredSize:[100, 500], resizeable:true});

        //custom palette goes here!
		res = 
		"group{orientation:'row', alignChildren:['fill', 'top'],\
		panelOne:Panel{orientation:'column', alignChildren:['fill', 'top'], text:'INERTIA/DECAY',\
						footnote:StaticText{text:'*Requires Keyframes*'},\
            sliderGroup:Group{orientation:'column', alignChildren:['fill', 'top'],\
				ampLabel:StaticText{text:'Amplitude', justify:'center'},\
                   ampSlider:Slider{bounds:[0, 0, 150, 10], value:3, minvalue:0, maxvalue:10},\
                   ampLabels:Group{orientation:'row', alignChildren:['fill', 'fill'],\
                      ampMinLabel:StaticText{text:'0'},\
					  ampValLabel:StaticText{text:'3', justify:'center'},\
                      ampMaxLabel:StaticText{text:'10', justify:'right'},\
                   }\
				freqLabel:StaticText{text:'Frequency', justify:'center'},\
                   freqSlider:Slider{bounds:[0, 0, 150, 10], value:3, minvalue:0, maxvalue:10},\
                   freqLabels:Group{orientation:'row', alignChildren:['fill', 'fill'],\
                      freqMinLabel:StaticText{text:'0'},\
					  freqValLabel:StaticText{text:'3', justify:'center'},\
                      freqMaxLabel:StaticText{text:'10', justify:'right'},\
                   }\
				decayLabel:StaticText{text:'Decay', justify:'center'},\
                   decaySlider:Slider{bounds:[0, 0, 150, 10], value:2, minvalue:0, maxvalue:10},\
                   decayLabels:Group{orientation:'row', alignChildren:['fill', 'fill'],\
                      decayMinLabel:StaticText{text:'0'},\
					  decayValLabel:StaticText{text:'2', justify:'center'},\
                      decayMaxLabel:StaticText{text:'10', justify:'right'},\
                   }\
            },\
            	panelGroup:Group{orientation:'column', alignChildren:['fill', 'top'],\
                   inertiaPos:Button{text:'Inertia Position'},\
                   inertiaRot:Button{text:'Inertia Rotation'},\
                   inertiaScale:Button{text:'Inertia Scale'},\
                   squashStretchScale:Button{text:'Squash/Stretch Scale'},\
                }\
			}\
			panelTwo:Panel{orientation:'column', alignChildren:['fill', 'top'], text:'BOUNCES',\
						footnote:StaticText{text:'*Requires Keyframes*'},\
            sliderGroup:Group{orientation:'column', alignChildren:['fill', 'top'],\
				periodLabel:StaticText{text:'Period', justify:'center'},\
                   periodSlider:Slider{bounds:[0, 0, 150, 10], value:0.6, minvalue:0, maxvalue:1},\
                   periodLabels:Group{orientation:'row', alignChildren:['fill', 'fill'],\
                      periodMinLabel:StaticText{text:'0'},\
					  periodValLabel:StaticText{text:'0.6', justify:'center'},\
                      periodMaxLabel:StaticText{text:'1', justify:'right'},\
                   }\
				ampLabel:StaticText{text:'Amplitude', justify:'center'},\
                   ampSlider:Slider{bounds:[0, 0, 150, 10], value:50, minvalue:0, maxvalue:200},\
                   ampLabels:Group{orientation:'row', alignChildren:['fill', 'fill'],\
                      ampMinLabel:StaticText{text:'0'},\
					  ampValLabel:StaticText{text:'50', justify:'center'},\
                      ampMaxLabel:StaticText{text:'200', justify:'right'},\
                   }\
				slackLabel:StaticText{text:'Slack', justify:'center'},\
                   slackSlider:Slider{bounds:[0, 0, 150, 10], value:1.70, minvalue:0, maxvalue:2},\
                   slackLabels:Group{orientation:'row', alignChildren:['fill', 'fill'],\
                      slackMinLabel:StaticText{text:'0'},\
					  slackValLabel:StaticText{text:'1.70', justify:'center'},\
                      slackMaxLabel:StaticText{text:'2', justify:'right'},\
                   }\
            },\
            	panelGroup:Group{orientation:'column', alignChildren:['fill', 'top'],\
                   bouncePos:Button{text:'Bounce Position'},\
                   elasticPos:Button{text:'Elastic Position'},\
                   backPos:Button{text:'Back Position'},\
                }\
			}\
			panelThree:Panel{orientation:'column', alignChildren:['fill', 'top'],\
            sliderGroup:Group{orientation:'column', alignChildren:['fill', 'top'],\
				ampLabel:StaticText{text:'Amplitude', justify:'center'},\
                   ampSlider:Slider{bounds:[0, 0, 150, 10], value:3, minvalue:0, maxvalue:5},\
                   ampLabels:Group{orientation:'row', alignChildren:['fill', 'fill'],\
                      ampMinLabel:StaticText{text:'0'},\
					  ampValLabel:StaticText{text:'3', justify:'center'},\
                      ampMaxLabel:StaticText{text:'5', justify:'right'},\
                   }\
				freqLabel:StaticText{text:'Frequency', justify:'center'},\
                   freqSlider:Slider{bounds:[0, 0, 150, 10], value:3, minvalue:0, maxvalue:5},\
                   freqLabels:Group{orientation:'row', alignChildren:['fill', 'fill'],\
                      freqMinLabel:StaticText{text:'0'},\
					  freqValLabel:StaticText{text:'3', justify:'center'},\
                      freqMaxLabel:StaticText{text:'5', justify:'right'},\
                   }\
				speedLabel:StaticText{text:'Speed', justify:'center'},\
                   speedSlider:Slider{bounds:[0, 0, 150, 10], value:2, minvalue:0, maxvalue:5},\
                   speedLabels:Group{orientation:'row', alignChildren:['fill', 'fill'],\
                      speedMinLabel:StaticText{text:'0'},\
					  speedValLabel:StaticText{text:'2', justify:'center'},\
                      speedMaxLabel:StaticText{text:'5', justify:'right'},\
                   }\
            },\
            	panelGroup:Group{orientation:'column', alignChildren:['fill', 'top'],\
                   undulation:Button{text:'Undulation'},\
                }\
			}\
			panelFour:Panel{orientation:'column', alignChildren:['fill', 'top'],\
            sliderGroup:Group{orientation:'column', alignChildren:['fill', 'top'],\
				fpsLabel:StaticText{text:'FPS', justify:'center'},\
                   fpsSlider:Slider{bounds:[0, 0, 150, 10], value:5, minvalue:1, maxvalue:15},\
                   fpsLabels:Group{orientation:'row', alignChildren:['fill', 'fill'],\
                      fpsMinLabel:StaticText{text:'1'},\
					  fpsValLabel:StaticText{text:'5', justify:'center'},\
                      fpsMaxLabel:StaticText{text:'15', justify:'right'},\
                   }\
				amtLabel:StaticText{text:'Amount', justify:'center'},\
                   amtSlider:Slider{bounds:[0, 0, 150, 10], value:25, minvalue:0, maxvalue:50},\
                   amtLabels:Group{orientation:'row', alignChildren:['fill', 'fill'],\
                      amtMinLabel:StaticText{text:'0'},\
					  amtValLabel:StaticText{text:'25', justify:'center'},\
                      amtMaxLabel:StaticText{text:'50', justify:'right'},\
                   }\
            },\
            	panelGroup:Group{orientation:'column', alignChildren:['fill', 'top'],\
                   jumpyWiggle:Button{text:'Jumpy Wiggle'},\
                }\
			}\
			panelFive:Panel{orientation:'column', alignChildren:['fill', 'top'],\
            sliderGroup:Group{orientation:'column', alignChildren:['fill', 'top'],\
				colLabel:StaticText{text:'Columns', justify:'center'},\
                   colSlider:Slider{bounds:[0, 0, 150, 10], value:10, minvalue:0, maxvalue:20},\
                   colLabels:Group{orientation:'row', alignChildren:['fill', 'fill'],\
                   colMinLabel:StaticText{text:'0'},\
					  				colValLabel:StaticText{text:'10', justify:'center'},\
                    colMaxLabel:StaticText{text:'20', justify:'right'},\
                   }\
				holdLabel:StaticText{text:'Hold Time', justify:'center'},\
                   holdSlider:Slider{bounds:[0, 0, 150, 10], value:0.2, minvalue:0, maxvalue:1},\
                   holdLabels:Group{orientation:'row', alignChildren:['fill', 'fill'],\
                   holdMinLabel:StaticText{text:'0'},\
					  			 holdValLabel:StaticText{text:'0.2', justify:'center'},\
                      holdMaxLabel:StaticText{text:'1', justify:'right'},\
                   }\
				minTimeLabel:StaticText{text:'Min Time', justify:'center'},\
                   minTimeSlider:Slider{bounds:[0, 0, 150, 10], value:0.5, minvalue:0, maxvalue:1},\
                   minTimeLabels:Group{orientation:'row', alignChildren:['fill', 'fill'],\
                      minTimeMinLabel:StaticText{text:'0'},\
					  minTimeValLabel:StaticText{text:'0.5', justify:'center'},\
                      minTimeMaxLabel:StaticText{text:'1', justify:'right'},\
                   }\
				maxTimeLabel:StaticText{text:'Max Time', justify:'center'},\
                   maxTimeSlider:Slider{bounds:[0, 0, 150, 10], value:1, minvalue:0, maxvalue:2},\
                   maxTimeLabels:Group{orientation:'row', alignChildren:['fill', 'fill'],\
                   maxTimeMinLabel:StaticText{text:'0'},\
					  			maxTimeValLabel:StaticText{text:'1', justify:'center'},\
                      maxTimeMaxLabel:StaticText{text:'2', justify:'right'},\
                   }\
            },\
            	panelGroup:Group{orientation:'column', alignChildren:['fill', 'top'],\
                   randomGrid:Button{text:'Random Grid'},\
                }\
				}\
      }";
        myPanel.grp = myPanel.add(res);
        
        //slider vars
        var ampVal = myPanel.grp.panelOne.sliderGroup.ampSlider.value.toFixed(2);
				var freqVal = myPanel.grp.panelOne.sliderGroup.freqSlider.value.toFixed(2);
				var decayVal = myPanel.grp.panelOne.sliderGroup.decaySlider.value.toFixed(2);
				var periodVal = myPanel.grp.panelTwo.sliderGroup.periodSlider.value.toFixed(2);
				var ampVal_2 = myPanel.grp.panelTwo.sliderGroup.ampSlider.value.toFixed(2);
				var slackVal = myPanel.grp.panelTwo.sliderGroup.slackSlider.value.toFixed(2);
				var ampVal_3 = myPanel.grp.panelThree.sliderGroup.ampSlider.value.toFixed(2);
				var freqVal_2 = myPanel.grp.panelThree.sliderGroup.freqSlider.value.toFixed(2);
				var speedVal = myPanel.grp.panelThree.sliderGroup.speedSlider.value.toFixed(2);
				var fpsVal = myPanel.grp.panelFour.sliderGroup.fpsSlider.value.toFixed(2);
				var amtVal = myPanel.grp.panelFour.sliderGroup.amtSlider.value.toFixed(2);
				var colVal = Math.round(myPanel.grp.panelFive.sliderGroup.colSlider.value);
				var holdVal = myPanel.grp.panelFive.sliderGroup.holdSlider.value.toFixed(2);
				var minTimeVal = myPanel.grp.panelFive.sliderGroup.minTimeSlider.value.toFixed(2);
				var maxTimeVal = myPanel.grp.panelFive.sliderGroup.maxTimeSlider.value.toFixed(2);
		
		//update vals
		myPanel.grp.panelOne.sliderGroup.ampSlider.onChanging = function() {
			ampVal = myPanel.grp.panelOne.sliderGroup.ampSlider.value.toFixed(2);
			myPanel.grp.panelOne.sliderGroup.ampLabels.ampValLabel.text = ampVal;
		}
		
		myPanel.grp.panelOne.sliderGroup.freqSlider.onChanging = function() {
			freqVal = myPanel.grp.panelOne.sliderGroup.freqSlider.value.toFixed(2);
			myPanel.grp.panelOne.sliderGroup.freqLabels.freqValLabel.text = freqVal;
		}
		
		myPanel.grp.panelOne.sliderGroup.decaySlider.onChanging = function() {
			decayVal = myPanel.grp.panelOne.sliderGroup.decaySlider.value.toFixed(2);
			myPanel.grp.panelOne.sliderGroup.decayLabels.decayValLabel.text = decayVal;
		}
		
		myPanel.grp.panelTwo.sliderGroup.periodSlider.onChanging = function() {
			periodVal = myPanel.grp.panelTwo.sliderGroup.periodSlider.value.toFixed(2);
			myPanel.grp.panelTwo.sliderGroup.periodLabels.periodValLabel.text = periodVal;
		}
		
		myPanel.grp.panelTwo.sliderGroup.ampSlider.onChanging = function() {
			ampVal_2 = myPanel.grp.panelTwo.sliderGroup.ampSlider.value.toFixed(2);
			myPanel.grp.panelTwo.sliderGroup.ampLabels.ampValLabel.text = ampVal_2;
		}
		
		myPanel.grp.panelTwo.sliderGroup.slackSlider.onChanging = function() {
			slackVal = myPanel.grp.panelTwo.sliderGroup.slackSlider.value.toFixed(2);
			myPanel.grp.panelTwo.sliderGroup.slackLabels.slackValLabel.text = slackVal;
		}
		myPanel.grp.panelThree.sliderGroup.ampSlider.onChanging = function() {
			ampVal_3 = myPanel.grp.panelThree.sliderGroup.ampSlider.value.toFixed(2);
			myPanel.grp.panelThree.sliderGroup.ampLabels.ampValLabel.text = ampVal_3;
		}
		myPanel.grp.panelThree.sliderGroup.freqSlider.onChanging = function() {
			freqVal_2 = myPanel.grp.panelThree.sliderGroup.freqSlider.value.toFixed(2);
			myPanel.grp.panelThree.sliderGroup.freqLabels.freqValLabel.text = freqVal_2;
		}
    myPanel.grp.panelThree.sliderGroup.speedSlider.onChanging = function() {
			speedVal = myPanel.grp.panelThree.sliderGroup.speedSlider.value.toFixed(2);
			myPanel.grp.panelThree.sliderGroup.speedLabels.speedValLabel.text = speedVal;
		}
		myPanel.grp.panelFour.sliderGroup.fpsSlider.onChanging = function() {
			fpsVal = myPanel.grp.panelFour.sliderGroup.fpsSlider.value.toFixed(2);
			myPanel.grp.panelFour.sliderGroup.fpsLabels.fpsValLabel.text = fpsVal;
		}
    myPanel.grp.panelFour.sliderGroup.amtSlider.onChanging = function() {
			amtVal = myPanel.grp.panelFour.sliderGroup.amtSlider.value.toFixed(2);
			myPanel.grp.panelFour.sliderGroup.amtLabels.amtValLabel.text = amtVal;
		}
		myPanel.grp.panelFive.sliderGroup.colSlider.onChanging = function() {
			colVal = Math.round(myPanel.grp.panelFive.sliderGroup.colSlider.value);
			myPanel.grp.panelFive.sliderGroup.colLabels.colValLabel.text = colVal;
		}
    myPanel.grp.panelFive.sliderGroup.holdSlider.onChanging = function() {
			holdVal = myPanel.grp.panelFive.sliderGroup.holdSlider.value.toFixed(2);
			myPanel.grp.panelFive.sliderGroup.holdLabels.holdValLabel.text = holdVal;
		}
		myPanel.grp.panelFive.sliderGroup.minTimeSlider.onChanging = function() {
			minTimeVal = myPanel.grp.panelFive.sliderGroup.minTimeSlider.value.toFixed(2);
			myPanel.grp.panelFive.sliderGroup.minTimeLabels.minTimeValLabel.text = minTimeVal;
		}
		myPanel.grp.panelFive.sliderGroup.maxTimeSlider.onChanging = function() {
			maxTimeVal = myPanel.grp.panelFive.sliderGroup.maxTimeSlider.value.toFixed(2);
			myPanel.grp.panelFive.sliderGroup.maxTimeLabels.maxTimeValLabel.text = maxTimeVal;
		}
    
		
		//button functions
        myPanel.grp.panelOne.panelGroup.inertiaPos.onClick = function(){
            var thisLayers = app.project.activeItem.selectedLayers;
            for (var i = 0; i < thisLayers.length; i++) {
                    thisLayers[i].transform.position.expression = inertiaPos(ampVal, freqVal, decayVal);
                }
        }

        myPanel.grp.panelOne.panelGroup.inertiaRot.onClick = function(){
            var thisLayers = app.project.activeItem.selectedLayers;
            for (var i = 0; i < thisLayers.length; i++) {
                    thisLayers[i].transform.rotation.expression = inertiaRot(ampVal, freqVal, decayVal);
                }
        }

        myPanel.grp.panelOne.panelGroup.inertiaScale.onClick = function(){
            var thisLayers = app.project.activeItem.selectedLayers;
            for (var i = 0; i < thisLayers.length; i++) {
                    thisLayers[i].transform.scale.expression = inertiaScale(ampVal, freqVal, decayVal);
                }
        }

        myPanel.grp.panelOne.panelGroup.squashStretchScale.onClick = function(){
            var thisLayers = app.project.activeItem.selectedLayers;
            for (var i = 0; i < thisLayers.length; i++) {
                    thisLayers[i].transform.scale.expression = squashStretchScale(ampVal, freqVal, decayVal); 
                }
        }


        myPanel.grp.panelTwo.panelGroup.bouncePos.onClick = function(){
            var thisLayers = app.project.activeItem.selectedLayers;
            for (var i = 0; i < thisLayers.length; i++) {
                    thisLayers[i].transform.position.expression = bouncePos(periodVal, ampVal_2, slackVal);
                }
        }

        myPanel.grp.panelTwo.panelGroup.elasticPos.onClick = function(){
            var thisLayers = app.project.activeItem.selectedLayers;
            for (var i = 0; i < thisLayers.length; i++) {
                    thisLayers[i].transform.position.expression = elasticPos(periodVal, ampVal_2, slackVal);
                }
        }

        myPanel.grp.panelTwo.panelGroup.backPos.onClick = function(){
            var thisLayers = app.project.activeItem.selectedLayers;
            for (var i = 0; i < thisLayers.length; i++) {
                    thisLayers[i].transform.position.expression = backPos(periodVal, ampVal_2, slackVal);
                }
        }

        myPanel.grp.panelThree.panelGroup.undulation.onClick = function(){
            var thisLayers = app.project.activeItem.selectedLayers;
            for (var i = 0; i < thisLayers.length; i++) {
                    thisLayers[i].transform.position.expression = undulation(ampVal_3, freqVal_2, speedVal);
                }
        }

        myPanel.grp.panelFour.panelGroup.jumpyWiggle.onClick = function(){
            var thisLayers = app.project.activeItem.selectedLayers;
            for (var i = 0; i < thisLayers.length; i++) {
                    thisLayers[i].transform.position.expression = jumpyWiggle(fpsVal, amtVal);
                }
        }

        myPanel.grp.panelFive.panelGroup.randomGrid.onClick = function(){
            var thisLayers = app.project.activeItem.selectedLayers;
            for (var i = 0; i < thisLayers.length; i++) {
                    thisLayers[i].transform.position.expression = randomGrid(colVal, holdVal, minTimeVal, maxTimeVal);
                }
        }

        
        //this draws the panel
        myPanel.layout.layout(true);
        return myPanel;
        }
    var myScriptPal = myScript_buildUI(thisObj);
    
    if((myScriptPal != null) && (myScriptPal instanceof Window)){
        myScriptPal.center();
        myScriptPal.show();
        }
    }
myScript(this);
}