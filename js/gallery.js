
/*
 *		This file contains the javascript code for our gallery
 */


var albums_template, photos_template, photo_template, slideshow_template;

// variables to store the current displayed album and photo
var current_album = gallery.albums[0];
var current_photo = current_album.photos[0];


function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);
}


$(document).ready(function(){

	
	var source   = $("#albums-template").html();
	albums_template = Handlebars.compile(source);
	
	source   = $("#photos-template").html();
	photos_template = Handlebars.compile(source);
	
	source   = $("#photo-template").html();
	photo_template = Handlebars.compile(source);
	
	source   = $("#slideshow-template").html();
	slideshow_template = Handlebars.compile(source);

	
	//  clicking on the albums tab shows the 
	//  thumbnails of all the albums
	
	$("#albums-tab").click(function () {

		// displays the albums template
		showTemplate(albums_template, gallery);

		// make the albums tab the active one
		// first make the currently active tab inactive
		$(".nav-tabs .active").removeClass("active");
		// then make albums tab active
		$("#albums-tab").addClass("active");

		
		$(".album-thumbnail").click(function (){
			
			
			var index = $(this).data("id");

			// set the current album to this album
			current_album = gallery.albums[index];

			// displays the photos template
			showTemplate(photos_template, current_album);

			// add an on click al all the photo thumbnails
			// which displays the photo in a modal popup
			$(".photo-thumbnail").click(function (){
				
				var index = $(this).data("id");

				// set the current photo to this photo
				current_photo = current_album.photos[index];
				
				// displays the single photo template
				showTemplate(photo_template, current_photo);
			});
		});
	});

	// 
	//  clicking on the photos tab shows all of the 
	//  photos in the current album
	//
	$("#photos-tab").click(function () {
		
		// displays the photos template
		showTemplate(photos_template, current_album);

		// make the photos tab the active one
		// first make the currently active tab inactive
		$(".nav-tabs .active").removeClass("active");
		// then make photos tab active
		$("#photos-tab").addClass("active");

		// add an on click al all the photo thumbnails
		// which displays the photo in a modal popup
		$(".photo-thumbnail").click(function (){
			
			var index = $(this).data("id");

			// set the current photo to this photo
			current_photo = current_album.photos[index];
			
			// displays the single photo template
			showTemplate(photo_template, current_photo);
		});
	});

	// 
	//  clicking on the slideshow tab displays the
	//  current album as a slide show
	//
	$("#slideshow-tab").click(function () {
		// display the slideshow template using the 
		// current album
		showTemplate(slideshow_template, current_album);
		
		// make the slideshow tab the active one
		// first make the currently active tab inactive
		$(".nav-tabs .active").removeClass("active");
		// then make slideshow tab active
		$("#slideshow-tab").addClass("active");
	});

	

	$("#albums-tab").click();

});