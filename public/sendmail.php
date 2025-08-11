<?php
// Simple mail handler for quote requests
// Note: This script requires a PHP-enabled server to execute.

header('X-Content-Type-Options: nosniff');
header('Content-Type: text/plain; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo "Method Not Allowed";
  exit;
}

// Retrieve and sanitize input
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Basic sanitization
$name = strip_tags($name);
$message = strip_tags($message);

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo "Please provide a valid email address.";
  exit;
}

// Prevent header injection
$bad = ["\r", "\n", "%0a", "%0d", "Content-Type:", "bcc:", "to:", "cc:"];
$name_safe = str_replace($bad, '', $name);
$email_safe = str_replace($bad, '', $email);

if ($name_safe === '' || $email_safe === '' || $message === '') {
  http_response_code(400);
  echo "Please provide your name, email, and a message.";
  exit;
}

$to = 'design@caroflex.ca';
$subject = 'New Quote Request from ' . $name_safe;
$body  = "Name: {$name_safe}\n";
$body .= "Email: {$email_safe}\n\n";
$body .= "Message:\n{$message}\n";

$headers = [
  'From' => 'no-reply@caroflex.ca',
  'Reply-To' => $email_safe,
  'X-Mailer' => 'PHP/' . phpversion(),
];

$formattedHeaders = '';
foreach ($headers as $key => $value) {
  $formattedHeaders .= $key . ': ' . $value . "\r\n";
}

if (@mail($to, $subject, $body, $formattedHeaders)) {
  echo "Thank you! Your message has been sent.";
} else {
  http_response_code(500);
  echo "Sorry, there was an error sending your message.";
}
