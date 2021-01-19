<?php
$_POST = json_decode( file_get_contents("php://input"), true ); // для работы (получения) с json на php
echo var_dump($_POST);