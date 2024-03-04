<?php

if (isset($_POST['submit'])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $mailTo = "ashkboos2001@gmail.com";
    $headers = "From: ".$email;
    $txt = "You have recieved an email from ".$name.".\n\n".$message;
    
    mail($mailTo, $Subject, $txt, $headers);
    header("Location: index.php?mailsend");
}

