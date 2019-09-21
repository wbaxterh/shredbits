<?php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://globalmagnet.amentum.space/api/calculate_magnetic_field?altitude=%200.0618744&longitude=-83.278831&latitude=30.830750&year=2019",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_POSTFIELDS => "",
  CURLOPT_HTTPHEADER => array(
    "Postman-Token: 00795d3e-aaf6-41ea-9b72-09cf7654f171",
    "cache-control: no-cache"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);
$json = json_decode($response, true);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo "<p>Declination: ".$json["declination"]."</p>".
  "<p>Inclination: ".$json["inclination"]."</p>".
  "<p>Total Instensity: ".$json["total_intensity"]."</p>";
}

?>