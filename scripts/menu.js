function loadPage(page)
{
	if(window.XMLHttpRequest) {
	  request = new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		request = new ActiveXObject("MSXML2.XMLHTTP");
	}

	request.onreadystatechange = function() {
			if(request.status == 200) {
			  document.getElementById("inner").innerHTML = request.responseText;
			} else if(request.status == 500) {
				document.getElementById("inner").innerHTML = 'Error';
			}
	};
	request.open("GET", page , true);
	request.send(null);
}

document.write("\
	<div id='menu'>\
		&nbsp; <a href=\"javascript:void(0);\" onClick=\"loadPage('home.html')\"><strong>HOME</strong></a><br/>\
		<ul class='listexpander'>\
		<li>People\
			<ul>\
			<li><a href=\"javascript:void(0);\" onClick=\"loadPage('faculty.html')\">Faculty</a></li>\
			<li><a href=\"javascript:void(0);\" onClick=\"loadPage('admin_staff.html')\">Admin Staff</a></li>\
			<li><a href=\"javascript:void(0);\" onClick=\"loadPage('research_staff.html')\">Research Staff</a></li>\
			<li><a href=\"javascript:void(0);\" onClick=\"loadPage('students.html')\">Students</a></li>\
			<li><a href=\"javascript:void(0);\" onClick=\"loadPage('alumni.html')\">Alumni</a></li>\
			<li><a href=\"javascript:void(0);\" onClick=\"loadPage('postdoc_students.html')\">Postdoctoral Fellows</a></li>\
		</ul>\
		</li>\
		<li>Projects\
			<ul>\
			<li><a href=\"javascript:void(0);\" onClick=\"loadPage('reading_projects.html')\">Reading Projects</a></li>\
			<li><a href=\"http://interactive.colorado.edu\">Interactive Systems</a></li>\
			<li><a href=\"http://clear.colorado.edu/compsem\">Computational Semantics</a></li>\
			<li><a href=\"http://www.colorado.edu/ics/research-centers-labs-projects/sumner-lab\">Digital	Learning Sciences</a></li>\
			</ul>\
		</li>\
		<li><a href=\"javascript:void(0);\" onClick=\"loadPage('education.html')\">Education</a></li>\
		<li><a href=\"javascript:void(0);\" onClick=\"loadPage('contact.html')\">Contact Us</a></li>\
		</ul>\
	</div>\
	")
