<!DOCTYPE html">
<html>
	<head>
		<title>Music Viewer</title>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
		<link href="css/viewer.css" type="text/css" rel="stylesheet" />
	</head>

	<body>
		<div id="header">

			<h1>190M Music Playlist Viewer</h1>
			<h2>Search Through Your Playlists and Music</h2>
		</div>

		<div id="listarea">

			<ul id="musiclist">

        <?php

      $playlisty = $_REQUEST["playlist"];
      if ($playlisty == NULL){

        
        foreach(glob("songs/*.mp3") as $musique){
          $taille = filesize($musique);

          $extension = " b";

          if ($taille >= 1048576){
            $taille = round($taille/1048576,2);
            $extension = " mb";
          }

          elseif ($taille > 1024){
            $taille = round($taille/1024,2);
            $extension = " kb";
          }
          
          
          ?>
              <li class="mp3item"><a href= "<?php echo $musique ?>"><?php echo(basename($musique));?> </a><?php echo "(".$taille.$extension.")"; ?></li>
        <?php 
          
        }
        
        foreach(glob("songs/*.txt") as $texte){
          ?>
              <li class="playlistitem"><a href= "<?php echo $texte ?>"><?php echo(basename($texte));?> </a></li>
        <?php 
        }

      }
      else{
        
      
foreach (glob("songs/$playlisty") as $playlisto) 
         {
         $texto = file($playlisto);

         for($i = 0;$i != count($texto);$i++){

  ?>

  <li class="mp3item"><a href= "<?php echo $texto[$i] ?>"><?php echo(basename($texto[$i]));?> </a></li>

<?php
}
         }
        }
?>

        
         
			</ul>
      
		</div>
	</body>
</html> 