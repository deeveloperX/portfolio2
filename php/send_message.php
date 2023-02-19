<?php

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
    // Replace with your email address
    $to = 'mahadmnzr@gmail.com';
    
    $subject = 'New message from ' . $_POST['name'];
    
    $message = $_POST['message'];
    
    $headers = 'From: ' . $_POST['name'] . ' <' . $_POST['email'] . '>' . "\r\n" .
    'Reply-To: ' . $_POST['email'] . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    
    // Send the email
    mail($to, $subject, $message, $headers);
    
    // Redirect the user to a thank-you page
    header('Location: thank-you.html');
    exit;
}

?>
