$(document).ready(function(){
	
 	// Default save on enter key pressed
 	 	$(document).bind('keypress', function(e) {
        if(e.keyCode==13){
             $('#save').trigger('click');
         }
    });

 	// Add new div by clicking 'Add new task'
	$("#new").click(function(){
	 	$("#divAdd").show();
	 	$("#taskInput").val('');
	 	$("#taskInput").focus();
	 	$("#taskInput").css({
						    border: "1px solid gray",
						    height:"30px",
						    padding:"10px"
						});
	})

	// Save the task with clicking Save button
	$("#save").click(function(){
		//- Preventing saving even when the divAdd is not visible and input is empty
		var isHidden  = $("#divAdd").is(':hidden'); 
		if($("#taskInput").val() == "" || isHidden == true)
		{
 			return
 		}

 		//Save new task on clicking save
 		$("#divAdd").hide();
 		var todo = $("#taskInput").val() ;
		var newTask = 
 		'<div id="divTask" class="col-md-12 divTask" >' +
 		'   <div class="col-md-1"> <input class="ckbxCompleteItem" type="checkbox">  </div>' +
	 	'   <div class="col-md-8 todo" class="" id="todo"><span id="todoText" class="todoText">' +  todo + '</span><input type="text" id="editText" value="' + todo + '" hidden/></div>' + 
	 	'   <div class="col-md-2"> <button class="btn btn-primary btnEdit" id="btnEdit">Edit</button><button class="btn btn-success editSave" id="editSave" style="display:none;">Update</button> </div>' +
	 	'   <div class="col-md-1"> <button class="btn btn-danger btnDelete"  id="" >Delete</button><button class="btn btn-info editCancel" id="editCancel" style="display:none;">Cancel</button>  </div>' +
	 	'</div>'	 		
 		$("#divList").prepend(newTask);
 		$("#divTask").css({
						   height: "30px",
						   margin:"10px",
						   fontFamily: "ariel",
						   fontSize:"20px",
						   backgroundColor:"white"
						});
  	})
  	// Edit
	$(document).on('click','.btnEdit', function(){

		//Tabish
		$(this).parent().parent().find('#editText').css({paddingLeft:"10px", border:"1px solid green", fontSize:"20px"}); 
		ShowAndHideButtons("EDIT",this);

		//elmas
		//$(this).parent().parent().find('#editText').show().css({paddingLeft:"10px", border:"1px solid green", fontSize:"20px"}); 
		// $(this).parent().parent().find('#editText').show().focus();
		// $(this).parent().parent().find('#editSave').show();   // show save button
		// $(this).parent().parent().find('#editCancel').show(); //show edit cancel btn
		// $(this).parent().parent().find('.btnDelete').hide();  // hide delete btn
		// $(this).parent().parent().find('#todoText').hide();   // when saving hide input box
		// $(this).parent().parent().find('.btnEdit').hide();    // hide delete and Edit
	})

	//  Save Edit
	$(document).on('click','.editSave', function(){

		//Tabish
		var updatedText = $(this).parent().parent().find('#editText').val(); // pick up updated text and put in variable
		$(this).parent().parent().find('#todoText').text(updatedText);  // copy input box text to span 
		ShowAndHideButtons("EDITSAVE",this);

		//elmas
		// var updatedText = $(this).parent().parent().find('#editText').val(); // pick up updated text and put in variable
		// $(this).parent().parent().find('#todoText').show();      // and show span
		// $(this).parent().parent().find('#todoText').text(updatedText);  // copy input box text to span 
		// $(this).parent().parent().find('#editText').hide();	   // original input text hide
		// $(this).parent().parent().find('.btnEdit').show();    // show Edit
		// $(this).parent().parent().find('.btnDelete').show();  // show Delete
		// $(this).parent().parent().find('#editSave').hide();   //hide edit save btn	
		// $(this).parent().parent().find('#editCancel').hide(); //cancel btn hide

	})

	// Cancel Edit text
	$(document).on('click','.editCancel', function(){
		$(this).parent().parent().find('#editText').hide();   //hide edit btn
		$(this).parent().parent().find('#todoText').show();   // show original text without changes
		$(this).parent().parent().find('.editCancel').hide(); //cancel btn hide
		$(this).parent().parent().find('.btnDelete').show();  // show Delete
		$(this).parent().parent().find('.btnEdit').show();    //show edit btn
		$(this).parent().parent().find('.editSave').hide();   //hide edit save btn
	}); 
		
  	// Cancel Task
  	$("#cancel").click(function(){
  		$("#divAdd").hide();
  	})

	// Complete Task
	$("#divList").on('change', '.ckbxCompleteItem', function(){
		$(this).parent().parent('#divTask').toggleClass('done');
		$(this).parent().siblings('#todo').toggleClass('done');
	})


    // Delete Task 
	$(document).on('click',".btnDelete", function(){
	 	// alert("go bye bye")
	 	$(this).parent().parent().remove();
	})

	

	// ------------------------------------------------t
	function ShowAndHideButtons(evt,obj){

		if (evt == "EDIT"){
			$(obj).parent().parent().find('#editText').show().focus();
			$(obj).parent().parent().find('#editSave').show();   // show save button
			$(obj).parent().parent().find('#editCancel').show(); //show edit cancel btn
			$(obj).parent().parent().find('.btnDelete').hide();  // hide delete btn
			$(obj).parent().parent().find('#todoText').hide();   // when saving hide input box
			$(obj).parent().parent().find('.btnEdit').hide();    // hide delete and Edit
		}

		if (evt == "EDITSAVE"){
			$(obj).parent().parent().find('#todoText').show();      // and show span
			$(obj).parent().parent().find('#editText').hide();	   // original input text hide
			$(obj).parent().parent().find('.btnEdit').show();    // show Edit
			$(obj).parent().parent().find('.btnDelete').show();  // show Delete
			$(obj).parent().parent().find('#editSave').hide();   //hide edit save btn	
			$(obj).parent().parent().find('#editCancel').hide(); //cancel btn hide
		}
	}

	// ===============================================
	

	// _______________________________________---
}); //document ready







