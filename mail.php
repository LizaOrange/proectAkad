<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/PHPMailer.php';
    require 'phpmailer/src/SMTP.php';
    require 'phpmailer/src/Exception.php';

    date_default_timezone_set('Etc/UTC');
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.yandex.ru';//Указать сервер электронной почты, от лица которой придет письмо (SMTP-сервер)
        $mail->Port = 465;//Указать smtp порт(протокол шифрования SSL/TLS). Тут может быть цифра также 465, а может 587 и в крайнем случае 25 или 2525
        $mail->SMTPAuth = true;
        $mail->Username = 'alize.kolosova@yandex.ru';//Указать адрес электронной почты, от лица которой придет письмо
        $mail->Password = 'zbauieceksusqjuz';//Указать пароль от этой почты
        $mail->SMTPSecure = 'ssl';// Скорее всего протокол шифрования будет так же ssl, но возможно, что tls. Зависит от настроек почты

        $mail->CharSet = 'UTF-8';
        $mail->IsHTML(true);
    
        //От кого письмо. Здесь дублируем почту из поля Username
        $mail->setFrom('alize.kolosova@yandex.ru', 'Сайт cosmos-academy.ru');
        //Кому отправить. Указать почту, куда должна падать заявка
//        $mail->addAddress('bagirovdil96@gmail.com');
        $mail->addAddress('kolosovaalisa@gmail.com');
        //Тема письма
        $mail->Subject = 'Заявка с сайта';
    
        //Тело письма
        $body = '<h1>Заявка с сайта</h1>';
    
        if(trim(!empty($_POST['FirstName']))){
            $body.= '<p><strong>ФИО:</strong> '.$_POST['FirstName'].'</p>';
        }
        if(trim(!empty($_POST['Phone']))){
            $body.= '<p><strong>Телефон:</strong> '.$_POST['Phone'].'</p>';
        }
        if(trim(!empty($_POST['Email']))){
            $body.= '<p><strong>Email:</strong> '.$_POST['Email'].'</p>';
        }
        if(trim(!empty($_POST['category']))){
            $body.= '<p><strong>Категория:</strong> '.$_POST['category'].'</p>';
        }
        if(trim(!empty($_POST['EmploymentFormat']))){
            $body.= '<p><strong>Вид занятости:</strong> '.$_POST['EmploymentFormat'].'</p>';
        }
        if(trim(!empty($_POST['Education']))){
            $body.= '<p><strong>Образование:</strong> '.$_POST['Education'].'</p>';
        }
        if(trim(!empty($_POST['Regions']))){
            $body.= '<p><strong>Регион:</strong> '.$_POST['Regions'].'</p>';
        }
        if(trim(!empty($_POST['Program']))){
            $body.= '<p><strong>Программа:</strong> '.$_POST['Program'].'</p>';
        }
    
        $mail->Body = $body;
        $mail->send();
        die;
        header('Content-type: application/json');
        echo json_encode(['message' => 'Message has been sent!']);
    } catch (Exception $e) {
        echo json_encode(['message' => "Message could not be sent. Error: {$mail->ErrorInfo}"]);
    }
?>
