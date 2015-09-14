<?php
	$id = $_GET['id'];
  $page = $_GET['page'];
	if($id=="") $id=0;
	if($page=="") $page = "home";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<title>CLEAR (Computational Language and EducAtion Research)</title>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<meta name="keywords" content="cslr,clear,computational linguistics,human language,
human language technology" />
<link href="scripts/style.css" rel="stylesheet" type="text/css" />
<link href="listexpander/listexpander.css" rel="stylesheet" type="text/css" media="screen" />
<script type="text/javascript" src="listexpander/listexpander.js"></script>
</head>

<body>
<div id="main" >
	<div id="header"><img src="images/banner01.jpg" /></div>
	<script type="text/javascript" src="scripts/menu.js" language="JavaScript"></script> 
		<!-- Add Information Here-->
		
		<div id="inner" width="100%" height="100%"></div>
		<script language="javascript">
			if(window.XMLHttpRequest) {
				 request = new XMLHttpRequest();
			}	else if(window.ActiveXObject)	{
				 request = new ActiveXObject("MSXML2.XMLHTTP");
			}

			request.onreadystatechange = function() {
				if(request.status == 200) {
					document.getElementById("inner").innerHTML = request.responseText;
				} else if(request.status == 500) {
					document.getElementById("inner").innerHTML = 'Error';
					
				}
			}
			request.open("GET", "http://clear.colorado.edu/start2/<?=$page.".html"?>" , true);
			request.send(null);
		</script>

    <center><img src="images/logo_colorado.gif"></center>
</div> <!-- end div id=main -->
</body>

</html>
