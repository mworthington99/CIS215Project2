<?php
/**
 * @author Matthew Worthington
 * Sets up email verification on the server side
 */
require ('dbconfig.php');
$db = connectDB();

// Set proper JSON header
header('Content-Type: application/json');

// Check if email parameter exists
if (!isset($_GET['email'])) {
    echo json_encode(['valid' => false, 'message' => 'No email provided']);
    exit;
}

// Validate email format
$email = filter_var($_GET['email'], FILTER_VALIDATE_EMAIL);
if (!$email) {
    echo json_encode(['valid' => false, 'message' => 'Invalid email format']);
    exit;
}

try {
    // Check for duplicate email
    $stmt = $db->prepare("SELECT COUNT(*) FROM project_data WHERE email = ?");
    $stmt->execute([$email]);
    $count = $stmt->fetchColumn();

    if ($count > 0) {
        echo json_encode(['valid' => false, 'message' => 'Email already exists']);
    } else {
        echo json_encode(['valid' => true, 'message' => 'Email is available']);
    }
} catch (Exception $e) {
    echo json_encode(['valid' => false, 'message' => 'Error checking email']);
}
?> 