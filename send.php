<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';


// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];


// Формирование самого письма
if (empty($email)) {
    $title = "Best Tour Plan новое обращение";
    $body = "
    <h2>Новое письмо</h2>
    <b>Имя:</b> $name<br>
    <b>Номер:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message
    ";
} else {
    $title = "Подписка на рассылку Best Tour Plan";
    $body = "
    <h2>Новое письмо</h2>
    <b>Подписка оформлена</b>
    ";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'aaaaaaaaaa@gmail.com'; // Логин на почте
    $mail->Password   = 'aaaaaaaaaa'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('aaaaaaaaaa@gmail.com', 'Олег Сомов'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('aaaaaaaaaa@mail.ru');  
   


// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
if (empty($email)) {
    header('Location: thank-you-appeal.html');
} else {
    header('Location: subscribe.html');
}





